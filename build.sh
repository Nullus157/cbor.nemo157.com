cargo +nightly build --target wasm32-unknown-unknown
wasm-bindgen target/wasm32-unknown-unknown/debug/cbor_nemo157_com.wasm --out-dir build
