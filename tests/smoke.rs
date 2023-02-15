use headless_chrome::Browser;
use indoc::indoc;

mod util;

use util::ElementExt;

#[test]
#[fehler::throws(anyhow::Error)]
fn smoke() {
    let _ = pretty_env_logger::try_init();
    let base = &util::SERVER.url;

    let browser = Browser::default()?;
    let tab = browser.new_tab()?;
    tab.navigate_to(base)?;
    tab.wait_until_navigated()?;

    assert_eq!(
        tab.find_element("#header span")?.text_content()?,
        "Inspired by cbor.me"
    );
}

#[test]
#[fehler::throws(anyhow::Error)]
fn defaults() {
    let _ = pretty_env_logger::try_init();
    let base = &util::SERVER.url;

    let browser = Browser::default()?;
    let tab = browser.new_tab()?;
    tab.navigate_to(base)?;
    tab.wait_until_navigated()?;

    let input = tab.find_element("#input")?.value()?;
    assert_eq!(input, "bf6346756ef563416d7421ff");

    assert_eq!(
        tab.find_element("#hex")?.text_content()?,
        indoc!(
            r#"
                bf           # map(*)
                   63        #   text(3)
                      46756e #     "Fun"
                   f5        #   true, simple(21)
                   63        #   text(3)
                      416d74 #     "Amt"
                   21        #   negative(-2)
                   ff        #   break
           "#
        )
    );

    assert_eq!(
        tab.find_element("#diag")?.text_content()?,
        r#"{_ "Fun": true, "Amt": -2}"#
    );
}
