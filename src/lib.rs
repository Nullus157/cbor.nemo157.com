use wasm_bindgen::{prelude::wasm_bindgen, JsValue};

fn result(v: cbor_diag::Result<cbor_diag::DataItem>) -> JsValue {
    let result = v
        .map(|v| (v.to_hex(), v.to_diag_pretty(), v.to_bytes().len()))
        .map_err(|e| format!("{:?}", e));
    JsValue::from_serde(&result).unwrap()
}

#[wasm_bindgen]
pub fn parse_auto(s: &str) -> JsValue {
    result(cbor_diag::parse_hex(s).or_else(|_| cbor_diag::parse_diag(s)))
}

#[wasm_bindgen]
pub fn parse_hex(hex: &str) -> JsValue {
    result(cbor_diag::parse_hex(hex))
}

#[wasm_bindgen]
pub fn parse_diag(diag: &str) -> JsValue {
    result(cbor_diag::parse_diag(diag))
}
