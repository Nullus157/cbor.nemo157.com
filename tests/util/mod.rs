use anyhow::anyhow;
use failure::ResultExt;
use libc::atexit;
use once_cell::sync::Lazy;
use serde_json::value::Value;
use std::sync::Mutex;

pub struct Server {
    pub url: String,
    handle: Mutex<Option<std::process::Child>>,
}

pub static SERVER: Lazy<Server> = Lazy::new(|| start_server().expect("Failed to start server"));

extern "C" fn stop_server() {
    if let Some(mut handle) = SERVER.handle.lock().unwrap().take() {
        handle.kill().unwrap();
        handle.wait().unwrap();
    }
}

fn start_server() -> anyhow::Result<Server> {
    let port = port_check::free_local_port().ok_or_else(|| anyhow!("Failed to find free port"))?;
    let path = std::env::current_dir()?.join("dist");
    let url = format!("http://127.0.0.1:{}", port);

    let handle = std::process::Command::new("miniserve")
        .arg("-i=127.0.0.1")
        .arg(&format!("-p={}", port))
        .arg("--index=index.html")
        .arg(path)
        .stdout(std::process::Stdio::null())
        .spawn()?;

    std::thread::sleep(std::time::Duration::from_millis(200));

    unsafe {
        atexit(stop_server);
    }

    Ok(Server {
        url,
        handle: Mutex::new(Some(handle)),
    })
}

pub trait ElementExt {
    #[fehler::throws(anyhow::Error)]
    fn text_content(&self) -> String;

    #[fehler::throws(anyhow::Error)]
    fn value(&self) -> String;
}

impl ElementExt for headless_chrome::browser::tab::element::Element<'_> {
    #[fehler::throws(anyhow::Error)]
    fn text_content(&self) -> String {
        self.call_js_fn("function() { return this.textContent; }", false)
            .compat()?
            .value
            .and_then(|v| {
                if let Value::String(s) = v {
                    Some(s)
                } else {
                    None
                }
            })
            .unwrap_or_default()
    }

    #[fehler::throws(anyhow::Error)]
    fn value(&self) -> String {
        self.call_js_fn("function() { return this.value; }", false)
            .compat()?
            .value
            .and_then(|v| {
                if let Value::String(s) = v {
                    Some(s)
                } else {
                    None
                }
            })
            .unwrap_or_default()
    }
}
