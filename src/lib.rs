#![feature(use_extern_macros)]

use wasm_bindgen::{prelude::wasm_bindgen, JsValue};

#[wasm_bindgen]
pub fn hex2diag(hex: &str) -> JsValue {
    let result = cbor_diag::parse_hex(hex)
        .map(|v| v.to_diag())
        .map_err(|e| format!("{:?}", e));
    JsValue::from_serde(&result).unwrap()
}

#[wasm_bindgen]
pub fn diag2hex(diag: &str) -> JsValue {
    let result = cbor_diag::parse_diag(diag)
        .map(|v| v.to_hex())
        .map_err(|e| format!("{:?}", e));
    JsValue::from_serde(&result).unwrap()
}
