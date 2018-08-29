#!/bin/sh
set -e -o pipefail
cargo +nightly build --target wasm32-unknown-unknown
rm -rf build/*
wasm-bindgen target/wasm32-unknown-unknown/debug/cbor_nemo157_com.wasm --out-dir build
rm -rf dist/*
npm run build
