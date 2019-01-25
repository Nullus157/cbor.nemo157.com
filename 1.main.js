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
/* harmony import */ var _cbor_nemo157_com_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cbor_nemo157_com_bg */ "./build/cbor_nemo157_com_bg.wasm");
/* tslint:disable */


const lTextEncoder = typeof TextEncoder === 'undefined' ? __webpack_require__(/*! util */ "./node_modules/util/util.js").TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _cbor_nemo157_com_bg__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetUint8Memory = new Uint8Array(_cbor_nemo157_com_bg__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetUint8Memory;
}

let WASM_VECTOR_LEN = 0;

function passStringToWasm(arg) {

    const buf = cachedTextEncoder.encode(arg);
    const ptr = _cbor_nemo157_com_bg__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"](buf.length);
    getUint8Memory().set(buf, ptr);
    WASM_VECTOR_LEN = buf.length;
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
* @param {string} arg0
* @returns {any}
*/
function parse_auto(arg0) {
    const ptr0 = passStringToWasm(arg0);
    const len0 = WASM_VECTOR_LEN;
    try {
        return takeObject(_cbor_nemo157_com_bg__WEBPACK_IMPORTED_MODULE_0__["parse_auto"](ptr0, len0));

    } finally {
        _cbor_nemo157_com_bg__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_free"](ptr0, len0 * 1);

    }

}

/**
* @param {string} arg0
* @returns {any}
*/
function parse_hex(arg0) {
    const ptr0 = passStringToWasm(arg0);
    const len0 = WASM_VECTOR_LEN;
    try {
        return takeObject(_cbor_nemo157_com_bg__WEBPACK_IMPORTED_MODULE_0__["parse_hex"](ptr0, len0));

    } finally {
        _cbor_nemo157_com_bg__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_free"](ptr0, len0 * 1);

    }

}

/**
* @param {string} arg0
* @returns {any}
*/
function parse_diag(arg0) {
    const ptr0 = passStringToWasm(arg0);
    const len0 = WASM_VECTOR_LEN;
    try {
        return takeObject(_cbor_nemo157_com_bg__WEBPACK_IMPORTED_MODULE_0__["parse_diag"](ptr0, len0));

    } finally {
        _cbor_nemo157_com_bg__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_free"](ptr0, len0 * 1);

    }

}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? __webpack_require__(/*! util */ "./node_modules/util/util.js").TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8');

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

function __wbindgen_json_parse(ptr, len) {
    return addHeapObject(JSON.parse(getStringFromWasm(ptr, len)));
}



/***/ }),

/***/ "./build/cbor_nemo157_com_bg.wasm":
/*!****************************************!*\
  !*** ./build/cbor_nemo157_com_bg.wasm ***!
  \****************************************/
/*! exports provided: memory, parse_auto, parse_hex, parse_diag, __wbindgen_malloc, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Instantiate WebAssembly module
var wasmExports = __webpack_require__.w[module.i];
__webpack_require__.r(exports);
// export exports from WebAssembly module
for(var name in wasmExports) if(name != "__webpack_init__") exports[name] = wasmExports[name];
// exec imports from WebAssembly module (for esm order)
/* harmony import */ var m0 = __webpack_require__(/*! ./cbor_nemo157_com */ "./build/cbor_nemo157_com.js");


// exec wasm module
wasmExports["__webpack_init__"]()

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9idWlsZC9jYm9yX25lbW8xNTdfY29tLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM4Qzs7QUFFOUMsMERBQTBELG1CQUFPLENBQUMseUNBQU07O0FBRXhFOztBQUVBO0FBQ0E7QUFDQSx1RUFBdUUsMkRBQVc7QUFDbEYsNkNBQTZDLDJEQUFXO0FBQ3hEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLGdCQUFnQixzRUFBc0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEseUJBQXlCLGtCQUFrQjs7QUFFM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLE9BQU87QUFDakIsWUFBWTtBQUNaO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsK0RBQWU7O0FBRXpDLEtBQUs7QUFDTCxRQUFRLG9FQUFvQjs7QUFFNUI7O0FBRUE7O0FBRUE7QUFDQSxVQUFVLE9BQU87QUFDakIsWUFBWTtBQUNaO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsOERBQWM7O0FBRXhDLEtBQUs7QUFDTCxRQUFRLG9FQUFvQjs7QUFFNUI7O0FBRUE7O0FBRUE7QUFDQSxVQUFVLE9BQU87QUFDakIsWUFBWTtBQUNaO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsK0RBQWU7O0FBRXpDLEtBQUs7QUFDTCxRQUFRLG9FQUFvQjs7QUFFNUI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDBEQUEwRCxtQkFBTyxDQUFDLHlDQUFNOztBQUV4RTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBIiwiZmlsZSI6IjEubWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG5pbXBvcnQgKiBhcyB3YXNtIGZyb20gJy4vY2Jvcl9uZW1vMTU3X2NvbV9iZyc7XG5cbmNvbnN0IGxUZXh0RW5jb2RlciA9IHR5cGVvZiBUZXh0RW5jb2RlciA9PT0gJ3VuZGVmaW5lZCcgPyByZXF1aXJlKCd1dGlsJykuVGV4dEVuY29kZXIgOiBUZXh0RW5jb2RlcjtcblxubGV0IGNhY2hlZFRleHRFbmNvZGVyID0gbmV3IGxUZXh0RW5jb2RlcigndXRmLTgnKTtcblxubGV0IGNhY2hlZ2V0VWludDhNZW1vcnkgPSBudWxsO1xuZnVuY3Rpb24gZ2V0VWludDhNZW1vcnkoKSB7XG4gICAgaWYgKGNhY2hlZ2V0VWludDhNZW1vcnkgPT09IG51bGwgfHwgY2FjaGVnZXRVaW50OE1lbW9yeS5idWZmZXIgIT09IHdhc20ubWVtb3J5LmJ1ZmZlcikge1xuICAgICAgICBjYWNoZWdldFVpbnQ4TWVtb3J5ID0gbmV3IFVpbnQ4QXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZ2V0VWludDhNZW1vcnk7XG59XG5cbmxldCBXQVNNX1ZFQ1RPUl9MRU4gPSAwO1xuXG5mdW5jdGlvbiBwYXNzU3RyaW5nVG9XYXNtKGFyZykge1xuXG4gICAgY29uc3QgYnVmID0gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlKGFyZyk7XG4gICAgY29uc3QgcHRyID0gd2FzbS5fX3diaW5kZ2VuX21hbGxvYyhidWYubGVuZ3RoKTtcbiAgICBnZXRVaW50OE1lbW9yeSgpLnNldChidWYsIHB0cik7XG4gICAgV0FTTV9WRUNUT1JfTEVOID0gYnVmLmxlbmd0aDtcbiAgICByZXR1cm4gcHRyO1xufVxuXG5jb25zdCBoZWFwID0gbmV3IEFycmF5KDMyKTtcblxuaGVhcC5maWxsKHVuZGVmaW5lZCk7XG5cbmhlYXAucHVzaCh1bmRlZmluZWQsIG51bGwsIHRydWUsIGZhbHNlKTtcblxuZnVuY3Rpb24gZ2V0T2JqZWN0KGlkeCkgeyByZXR1cm4gaGVhcFtpZHhdOyB9XG5cbmxldCBoZWFwX25leHQgPSBoZWFwLmxlbmd0aDtcblxuZnVuY3Rpb24gZHJvcE9iamVjdChpZHgpIHtcbiAgICBpZiAoaWR4IDwgMzYpIHJldHVybjtcbiAgICBoZWFwW2lkeF0gPSBoZWFwX25leHQ7XG4gICAgaGVhcF9uZXh0ID0gaWR4O1xufVxuXG5mdW5jdGlvbiB0YWtlT2JqZWN0KGlkeCkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChpZHgpO1xuICAgIGRyb3BPYmplY3QoaWR4KTtcbiAgICByZXR1cm4gcmV0O1xufVxuLyoqXG4qIEBwYXJhbSB7c3RyaW5nfSBhcmcwXG4qIEByZXR1cm5zIHthbnl9XG4qL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlX2F1dG8oYXJnMCkge1xuICAgIGNvbnN0IHB0cjAgPSBwYXNzU3RyaW5nVG9XYXNtKGFyZzApO1xuICAgIGNvbnN0IGxlbjAgPSBXQVNNX1ZFQ1RPUl9MRU47XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHRha2VPYmplY3Qod2FzbS5wYXJzZV9hdXRvKHB0cjAsIGxlbjApKTtcblxuICAgIH0gZmluYWxseSB7XG4gICAgICAgIHdhc20uX193YmluZGdlbl9mcmVlKHB0cjAsIGxlbjAgKiAxKTtcblxuICAgIH1cblxufVxuXG4vKipcbiogQHBhcmFtIHtzdHJpbmd9IGFyZzBcbiogQHJldHVybnMge2FueX1cbiovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VfaGV4KGFyZzApIHtcbiAgICBjb25zdCBwdHIwID0gcGFzc1N0cmluZ1RvV2FzbShhcmcwKTtcbiAgICBjb25zdCBsZW4wID0gV0FTTV9WRUNUT1JfTEVOO1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB0YWtlT2JqZWN0KHdhc20ucGFyc2VfaGV4KHB0cjAsIGxlbjApKTtcblxuICAgIH0gZmluYWxseSB7XG4gICAgICAgIHdhc20uX193YmluZGdlbl9mcmVlKHB0cjAsIGxlbjAgKiAxKTtcblxuICAgIH1cblxufVxuXG4vKipcbiogQHBhcmFtIHtzdHJpbmd9IGFyZzBcbiogQHJldHVybnMge2FueX1cbiovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VfZGlhZyhhcmcwKSB7XG4gICAgY29uc3QgcHRyMCA9IHBhc3NTdHJpbmdUb1dhc20oYXJnMCk7XG4gICAgY29uc3QgbGVuMCA9IFdBU01fVkVDVE9SX0xFTjtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gdGFrZU9iamVjdCh3YXNtLnBhcnNlX2RpYWcocHRyMCwgbGVuMCkpO1xuXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgd2FzbS5fX3diaW5kZ2VuX2ZyZWUocHRyMCwgbGVuMCAqIDEpO1xuXG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIGFkZEhlYXBPYmplY3Qob2JqKSB7XG4gICAgaWYgKGhlYXBfbmV4dCA9PT0gaGVhcC5sZW5ndGgpIGhlYXAucHVzaChoZWFwLmxlbmd0aCArIDEpO1xuICAgIGNvbnN0IGlkeCA9IGhlYXBfbmV4dDtcbiAgICBoZWFwX25leHQgPSBoZWFwW2lkeF07XG5cbiAgICBoZWFwW2lkeF0gPSBvYmo7XG4gICAgcmV0dXJuIGlkeDtcbn1cblxuY29uc3QgbFRleHREZWNvZGVyID0gdHlwZW9mIFRleHREZWNvZGVyID09PSAndW5kZWZpbmVkJyA/IHJlcXVpcmUoJ3V0aWwnKS5UZXh0RGVjb2RlciA6IFRleHREZWNvZGVyO1xuXG5sZXQgY2FjaGVkVGV4dERlY29kZXIgPSBuZXcgbFRleHREZWNvZGVyKCd1dGYtOCcpO1xuXG5mdW5jdGlvbiBnZXRTdHJpbmdGcm9tV2FzbShwdHIsIGxlbikge1xuICAgIHJldHVybiBjYWNoZWRUZXh0RGVjb2Rlci5kZWNvZGUoZ2V0VWludDhNZW1vcnkoKS5zdWJhcnJheShwdHIsIHB0ciArIGxlbikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9qc29uX3BhcnNlKHB0ciwgbGVuKSB7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QoSlNPTi5wYXJzZShnZXRTdHJpbmdGcm9tV2FzbShwdHIsIGxlbikpKTtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==