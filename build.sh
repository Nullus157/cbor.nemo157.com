#!/bin/sh
set -e -o pipefail
output="$(cargo +nightly build --target wasm32-unknown-unknown --release --message-format=json | jq -r 'select(.reason == "compiler-artifact" and .target.name == "cbor-nemo157-com") | .filenames[]')"
rm -rf build/*
wasm-bindgen "$output" --out-dir build
rm -rf dist/*
npm run build
