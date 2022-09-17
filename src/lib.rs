use wasm_bindgen::{prelude::wasm_bindgen, JsError as Error, JsValue};

#[derive(serde::Serialize)]
struct Response {
    hex: String,
    diag: String,
    bytes_length: usize,
}

impl From<cbor_diag::DataItem> for Response {
    fn from(item: cbor_diag::DataItem) -> Response {
        Response {
            hex: item.to_hex(),
            diag: item.to_diag_pretty(),
            bytes_length: item.to_bytes().len(),
        }
    }
}

impl TryFrom<Response> for JsValue {
    type Error = Error;

    #[fehler::throws]
    fn try_from(item: Response) -> JsValue {
        JsValue::from(serde_json::to_string(&item)?)
    }
}

#[fehler::throws]
#[wasm_bindgen]
pub fn parse_auto(s: &str) -> JsValue {
    Response::from(cbor_diag::parse_hex(s).or_else(|_| cbor_diag::parse_diag(s))?).try_into()?
}

#[fehler::throws]
#[wasm_bindgen]
pub fn parse_hex(hex: &str) -> JsValue {
    Response::from(cbor_diag::parse_hex(hex)?).try_into()?
}

#[fehler::throws]
#[wasm_bindgen]
pub fn parse_diag(diag: &str) -> JsValue {
    Response::from(cbor_diag::parse_diag(diag)?).try_into()?
}
