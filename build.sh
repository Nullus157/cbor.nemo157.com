#!/bin/sh
set -e -o pipefail
cargo +nightly build --target wasm32-unknown-unknown --release
rm -rf build/*
wasm-bindgen target/wasm32-unknown-unknown/release/cbor_nemo157_com.wasm --out-dir build
rm -rf dist/*
npm run build
