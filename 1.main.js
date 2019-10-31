(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./build/cbor_nemo157_com.js":
/*!***********************************!*\
  !*** ./build/cbor_nemo157_com.js ***!
  \***********************************/
/*! exports provided: parse_auto, parse_hex, parse_diag, __wbindgen_json_parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse_auto", function() { return parse_auto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse_hex", function() { return parse_hex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse_diag", function() { return parse_diag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_json_parse", function() { return __wbindgen_json_parse; });
/* harmony import */ var _cbor_nemo157_com_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cbor_nemo157_com_bg.wasm */ "./build/cbor_nemo157_com_bg.wasm");


let WASM_VECTOR_LEN = 0;

const lTextEncoder = typeof TextEncoder === 'undefined' ? __webpack_require__(/*! util */ "./node_modules/util/util.js").TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _cbor_nemo157_com_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetUint8Memory = new Uint8Array(_cbor_nemo157_com_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetUint8Memory;
}

function passStringToWasm(arg) {

    let len = arg.length;
    let ptr = _cbor_nemo157_com_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"](len);

    const mem = getUint8Memory();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = _cbor_nemo157_com_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"](ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

const heap = new Array(32);

heap.fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}
/**
* @param {string} s
* @returns {any}
*/
function parse_auto(s) {
    const ret = _cbor_nemo157_com_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["parse_auto"](passStringToWasm(s), WASM_VECTOR_LEN);
    return takeObject(ret);
}

/**
* @param {string} hex
* @returns {any}
*/
function parse_hex(hex) {
    const ret = _cbor_nemo157_com_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["parse_hex"](passStringToWasm(hex), WASM_VECTOR_LEN);
    return takeObject(ret);
}

/**
* @param {string} diag
* @returns {any}
*/
function parse_diag(diag) {
    const ret = _cbor_nemo157_com_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["parse_diag"](passStringToWasm(diag), WASM_VECTOR_LEN);
    return takeObject(ret);
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? __webpack_require__(/*! util */ "./node_modules/util/util.js").TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

const __wbindgen_json_parse = function(arg0, arg1) {
    const ret = JSON.parse(getStringFromWasm(arg0, arg1));
    return addHeapObject(ret);
};



/***/ }),

/***/ "./build/cbor_nemo157_com_bg.wasm":
/*!****************************************!*\
  !*** ./build/cbor_nemo157_com_bg.wasm ***!
  \****************************************/
/*! exports provided: memory, parse_auto, parse_hex, parse_diag, __wbindgen_malloc, __wbindgen_realloc */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Instantiate WebAssembly module
var wasmExports = __webpack_require__.w[module.i];
__webpack_require__.r(exports);
// export exports from WebAssembly module
for(var name in wasmExports) if(name != "__webpack_init__") exports[name] = wasmExports[name];
// exec imports from WebAssembly module (for esm order)
/* harmony import */ var m0 = __webpack_require__(/*! ./cbor_nemo157_com.js */ "./build/cbor_nemo157_com.js");


// exec wasm module
wasmExports["__webpack_init__"]()

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9idWlsZC9jYm9yX25lbW8xNTdfY29tLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUQ7O0FBRW5EOztBQUVBLDBEQUEwRCxtQkFBTyxDQUFDLHlDQUFNOztBQUV4RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsdUVBQXVFLGdFQUFXO0FBQ2xGLDZDQUE2QyxnRUFBVztBQUN4RDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxjQUFjLDJFQUFzQjs7QUFFcEM7O0FBRUE7O0FBRUEsVUFBVSxjQUFjO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw0RUFBdUI7QUFDckM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx5QkFBeUIsa0JBQWtCOztBQUUzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsT0FBTztBQUNqQixZQUFZO0FBQ1o7QUFDTztBQUNQLGdCQUFnQixvRUFBZTtBQUMvQjtBQUNBOztBQUVBO0FBQ0EsVUFBVSxPQUFPO0FBQ2pCLFlBQVk7QUFDWjtBQUNPO0FBQ1AsZ0JBQWdCLG1FQUFjO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLE9BQU87QUFDakIsWUFBWTtBQUNaO0FBQ087QUFDUCxnQkFBZ0Isb0VBQWU7QUFDL0I7QUFDQTs7QUFFQSwwREFBMEQsbUJBQU8sQ0FBQyx5Q0FBTTs7QUFFeEUsbURBQW1ELCtCQUErQjs7QUFFbEY7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSIsImZpbGUiOiIxLm1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB3YXNtIGZyb20gJy4vY2Jvcl9uZW1vMTU3X2NvbV9iZy53YXNtJztcblxubGV0IFdBU01fVkVDVE9SX0xFTiA9IDA7XG5cbmNvbnN0IGxUZXh0RW5jb2RlciA9IHR5cGVvZiBUZXh0RW5jb2RlciA9PT0gJ3VuZGVmaW5lZCcgPyByZXF1aXJlKCd1dGlsJykuVGV4dEVuY29kZXIgOiBUZXh0RW5jb2RlcjtcblxubGV0IGNhY2hlZFRleHRFbmNvZGVyID0gbmV3IGxUZXh0RW5jb2RlcigndXRmLTgnKTtcblxuY29uc3QgZW5jb2RlU3RyaW5nID0gKHR5cGVvZiBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGVJbnRvID09PSAnZnVuY3Rpb24nXG4gICAgPyBmdW5jdGlvbiAoYXJnLCB2aWV3KSB7XG4gICAgcmV0dXJuIGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZUludG8oYXJnLCB2aWV3KTtcbn1cbiAgICA6IGZ1bmN0aW9uIChhcmcsIHZpZXcpIHtcbiAgICBjb25zdCBidWYgPSBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGUoYXJnKTtcbiAgICB2aWV3LnNldChidWYpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlYWQ6IGFyZy5sZW5ndGgsXG4gICAgICAgIHdyaXR0ZW46IGJ1Zi5sZW5ndGhcbiAgICB9O1xufSk7XG5cbmxldCBjYWNoZWdldFVpbnQ4TWVtb3J5ID0gbnVsbDtcbmZ1bmN0aW9uIGdldFVpbnQ4TWVtb3J5KCkge1xuICAgIGlmIChjYWNoZWdldFVpbnQ4TWVtb3J5ID09PSBudWxsIHx8IGNhY2hlZ2V0VWludDhNZW1vcnkuYnVmZmVyICE9PSB3YXNtLm1lbW9yeS5idWZmZXIpIHtcbiAgICAgICAgY2FjaGVnZXRVaW50OE1lbW9yeSA9IG5ldyBVaW50OEFycmF5KHdhc20ubWVtb3J5LmJ1ZmZlcik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWdldFVpbnQ4TWVtb3J5O1xufVxuXG5mdW5jdGlvbiBwYXNzU3RyaW5nVG9XYXNtKGFyZykge1xuXG4gICAgbGV0IGxlbiA9IGFyZy5sZW5ndGg7XG4gICAgbGV0IHB0ciA9IHdhc20uX193YmluZGdlbl9tYWxsb2MobGVuKTtcblxuICAgIGNvbnN0IG1lbSA9IGdldFVpbnQ4TWVtb3J5KCk7XG5cbiAgICBsZXQgb2Zmc2V0ID0gMDtcblxuICAgIGZvciAoOyBvZmZzZXQgPCBsZW47IG9mZnNldCsrKSB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBhcmcuY2hhckNvZGVBdChvZmZzZXQpO1xuICAgICAgICBpZiAoY29kZSA+IDB4N0YpIGJyZWFrO1xuICAgICAgICBtZW1bcHRyICsgb2Zmc2V0XSA9IGNvZGU7XG4gICAgfVxuXG4gICAgaWYgKG9mZnNldCAhPT0gbGVuKSB7XG4gICAgICAgIGlmIChvZmZzZXQgIT09IDApIHtcbiAgICAgICAgICAgIGFyZyA9IGFyZy5zbGljZShvZmZzZXQpO1xuICAgICAgICB9XG4gICAgICAgIHB0ciA9IHdhc20uX193YmluZGdlbl9yZWFsbG9jKHB0ciwgbGVuLCBsZW4gPSBvZmZzZXQgKyBhcmcubGVuZ3RoICogMyk7XG4gICAgICAgIGNvbnN0IHZpZXcgPSBnZXRVaW50OE1lbW9yeSgpLnN1YmFycmF5KHB0ciArIG9mZnNldCwgcHRyICsgbGVuKTtcbiAgICAgICAgY29uc3QgcmV0ID0gZW5jb2RlU3RyaW5nKGFyZywgdmlldyk7XG5cbiAgICAgICAgb2Zmc2V0ICs9IHJldC53cml0dGVuO1xuICAgIH1cblxuICAgIFdBU01fVkVDVE9SX0xFTiA9IG9mZnNldDtcbiAgICByZXR1cm4gcHRyO1xufVxuXG5jb25zdCBoZWFwID0gbmV3IEFycmF5KDMyKTtcblxuaGVhcC5maWxsKHVuZGVmaW5lZCk7XG5cbmhlYXAucHVzaCh1bmRlZmluZWQsIG51bGwsIHRydWUsIGZhbHNlKTtcblxuZnVuY3Rpb24gZ2V0T2JqZWN0KGlkeCkgeyByZXR1cm4gaGVhcFtpZHhdOyB9XG5cbmxldCBoZWFwX25leHQgPSBoZWFwLmxlbmd0aDtcblxuZnVuY3Rpb24gZHJvcE9iamVjdChpZHgpIHtcbiAgICBpZiAoaWR4IDwgMzYpIHJldHVybjtcbiAgICBoZWFwW2lkeF0gPSBoZWFwX25leHQ7XG4gICAgaGVhcF9uZXh0ID0gaWR4O1xufVxuXG5mdW5jdGlvbiB0YWtlT2JqZWN0KGlkeCkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChpZHgpO1xuICAgIGRyb3BPYmplY3QoaWR4KTtcbiAgICByZXR1cm4gcmV0O1xufVxuLyoqXG4qIEBwYXJhbSB7c3RyaW5nfSBzXG4qIEByZXR1cm5zIHthbnl9XG4qL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlX2F1dG8ocykge1xuICAgIGNvbnN0IHJldCA9IHdhc20ucGFyc2VfYXV0byhwYXNzU3RyaW5nVG9XYXNtKHMpLCBXQVNNX1ZFQ1RPUl9MRU4pO1xuICAgIHJldHVybiB0YWtlT2JqZWN0KHJldCk7XG59XG5cbi8qKlxuKiBAcGFyYW0ge3N0cmluZ30gaGV4XG4qIEByZXR1cm5zIHthbnl9XG4qL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlX2hleChoZXgpIHtcbiAgICBjb25zdCByZXQgPSB3YXNtLnBhcnNlX2hleChwYXNzU3RyaW5nVG9XYXNtKGhleCksIFdBU01fVkVDVE9SX0xFTik7XG4gICAgcmV0dXJuIHRha2VPYmplY3QocmV0KTtcbn1cblxuLyoqXG4qIEBwYXJhbSB7c3RyaW5nfSBkaWFnXG4qIEByZXR1cm5zIHthbnl9XG4qL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlX2RpYWcoZGlhZykge1xuICAgIGNvbnN0IHJldCA9IHdhc20ucGFyc2VfZGlhZyhwYXNzU3RyaW5nVG9XYXNtKGRpYWcpLCBXQVNNX1ZFQ1RPUl9MRU4pO1xuICAgIHJldHVybiB0YWtlT2JqZWN0KHJldCk7XG59XG5cbmNvbnN0IGxUZXh0RGVjb2RlciA9IHR5cGVvZiBUZXh0RGVjb2RlciA9PT0gJ3VuZGVmaW5lZCcgPyByZXF1aXJlKCd1dGlsJykuVGV4dERlY29kZXIgOiBUZXh0RGVjb2RlcjtcblxubGV0IGNhY2hlZFRleHREZWNvZGVyID0gbmV3IGxUZXh0RGVjb2RlcigndXRmLTgnLCB7IGlnbm9yZUJPTTogdHJ1ZSwgZmF0YWw6IHRydWUgfSk7XG5cbmNhY2hlZFRleHREZWNvZGVyLmRlY29kZSgpO1xuXG5mdW5jdGlvbiBnZXRTdHJpbmdGcm9tV2FzbShwdHIsIGxlbikge1xuICAgIHJldHVybiBjYWNoZWRUZXh0RGVjb2Rlci5kZWNvZGUoZ2V0VWludDhNZW1vcnkoKS5zdWJhcnJheShwdHIsIHB0ciArIGxlbikpO1xufVxuXG5mdW5jdGlvbiBhZGRIZWFwT2JqZWN0KG9iaikge1xuICAgIGlmIChoZWFwX25leHQgPT09IGhlYXAubGVuZ3RoKSBoZWFwLnB1c2goaGVhcC5sZW5ndGggKyAxKTtcbiAgICBjb25zdCBpZHggPSBoZWFwX25leHQ7XG4gICAgaGVhcF9uZXh0ID0gaGVhcFtpZHhdO1xuXG4gICAgaGVhcFtpZHhdID0gb2JqO1xuICAgIHJldHVybiBpZHg7XG59XG5cbmV4cG9ydCBjb25zdCBfX3diaW5kZ2VuX2pzb25fcGFyc2UgPSBmdW5jdGlvbihhcmcwLCBhcmcxKSB7XG4gICAgY29uc3QgcmV0ID0gSlNPTi5wYXJzZShnZXRTdHJpbmdGcm9tV2FzbShhcmcwLCBhcmcxKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=