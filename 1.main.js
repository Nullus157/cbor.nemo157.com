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


const lTextDecoder = typeof TextDecoder === 'undefined' ? __webpack_require__(/*! util */ "./node_modules/util/util.js").TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _cbor_nemo157_com_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetUint8Memory0 = new Uint8Array(_cbor_nemo157_com_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

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

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

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
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function getObject(idx) { return heap[idx]; }

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
    var ptr0 = passStringToWasm0(s, _cbor_nemo157_com_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"], _cbor_nemo157_com_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"]);
    var len0 = WASM_VECTOR_LEN;
    var ret = _cbor_nemo157_com_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["parse_auto"](ptr0, len0);
    return takeObject(ret);
}

/**
* @param {string} hex
* @returns {any}
*/
function parse_hex(hex) {
    var ptr0 = passStringToWasm0(hex, _cbor_nemo157_com_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"], _cbor_nemo157_com_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"]);
    var len0 = WASM_VECTOR_LEN;
    var ret = _cbor_nemo157_com_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["parse_hex"](ptr0, len0);
    return takeObject(ret);
}

/**
* @param {string} diag
* @returns {any}
*/
function parse_diag(diag) {
    var ptr0 = passStringToWasm0(diag, _cbor_nemo157_com_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"], _cbor_nemo157_com_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"]);
    var len0 = WASM_VECTOR_LEN;
    var ret = _cbor_nemo157_com_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["parse_diag"](ptr0, len0);
    return takeObject(ret);
}

const __wbindgen_json_parse = function(arg0, arg1) {
    var ret = JSON.parse(getStringFromWasm0(arg0, arg1));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9idWlsZC9jYm9yX25lbW8xNTdfY29tLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUQ7O0FBRW5ELDBEQUEwRCxtQkFBTyxDQUFDLHlDQUFNOztBQUV4RSxtREFBbUQsK0JBQStCOztBQUVsRjs7QUFFQTtBQUNBO0FBQ0EseUVBQXlFLGdFQUFXO0FBQ3BGLDhDQUE4QyxnRUFBVztBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwwREFBMEQsbUJBQU8sQ0FBQyx5Q0FBTTs7QUFFeEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxVQUFVLGNBQWM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLGtCQUFrQjs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLE9BQU87QUFDakIsWUFBWTtBQUNaO0FBQ087QUFDUCxvQ0FBb0MsMkVBQXNCLEVBQUUsNEVBQXVCO0FBQ25GO0FBQ0EsY0FBYyxvRUFBZTtBQUM3QjtBQUNBOztBQUVBO0FBQ0EsVUFBVSxPQUFPO0FBQ2pCLFlBQVk7QUFDWjtBQUNPO0FBQ1Asc0NBQXNDLDJFQUFzQixFQUFFLDRFQUF1QjtBQUNyRjtBQUNBLGNBQWMsbUVBQWM7QUFDNUI7QUFDQTs7QUFFQTtBQUNBLFVBQVUsT0FBTztBQUNqQixZQUFZO0FBQ1o7QUFDTztBQUNQLHVDQUF1QywyRUFBc0IsRUFBRSw0RUFBdUI7QUFDdEY7QUFDQSxjQUFjLG9FQUFlO0FBQzdCO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EiLCJmaWxlIjoiMS5tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgd2FzbSBmcm9tICcuL2Nib3JfbmVtbzE1N19jb21fYmcud2FzbSc7XG5cbmNvbnN0IGxUZXh0RGVjb2RlciA9IHR5cGVvZiBUZXh0RGVjb2RlciA9PT0gJ3VuZGVmaW5lZCcgPyByZXF1aXJlKCd1dGlsJykuVGV4dERlY29kZXIgOiBUZXh0RGVjb2RlcjtcblxubGV0IGNhY2hlZFRleHREZWNvZGVyID0gbmV3IGxUZXh0RGVjb2RlcigndXRmLTgnLCB7IGlnbm9yZUJPTTogdHJ1ZSwgZmF0YWw6IHRydWUgfSk7XG5cbmNhY2hlZFRleHREZWNvZGVyLmRlY29kZSgpO1xuXG5sZXQgY2FjaGVnZXRVaW50OE1lbW9yeTAgPSBudWxsO1xuZnVuY3Rpb24gZ2V0VWludDhNZW1vcnkwKCkge1xuICAgIGlmIChjYWNoZWdldFVpbnQ4TWVtb3J5MCA9PT0gbnVsbCB8fCBjYWNoZWdldFVpbnQ4TWVtb3J5MC5idWZmZXIgIT09IHdhc20ubWVtb3J5LmJ1ZmZlcikge1xuICAgICAgICBjYWNoZWdldFVpbnQ4TWVtb3J5MCA9IG5ldyBVaW50OEFycmF5KHdhc20ubWVtb3J5LmJ1ZmZlcik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWdldFVpbnQ4TWVtb3J5MDtcbn1cblxuZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbVdhc20wKHB0ciwgbGVuKSB7XG4gICAgcmV0dXJuIGNhY2hlZFRleHREZWNvZGVyLmRlY29kZShnZXRVaW50OE1lbW9yeTAoKS5zdWJhcnJheShwdHIsIHB0ciArIGxlbikpO1xufVxuXG5jb25zdCBoZWFwID0gbmV3IEFycmF5KDMyKS5maWxsKHVuZGVmaW5lZCk7XG5cbmhlYXAucHVzaCh1bmRlZmluZWQsIG51bGwsIHRydWUsIGZhbHNlKTtcblxubGV0IGhlYXBfbmV4dCA9IGhlYXAubGVuZ3RoO1xuXG5mdW5jdGlvbiBhZGRIZWFwT2JqZWN0KG9iaikge1xuICAgIGlmIChoZWFwX25leHQgPT09IGhlYXAubGVuZ3RoKSBoZWFwLnB1c2goaGVhcC5sZW5ndGggKyAxKTtcbiAgICBjb25zdCBpZHggPSBoZWFwX25leHQ7XG4gICAgaGVhcF9uZXh0ID0gaGVhcFtpZHhdO1xuXG4gICAgaGVhcFtpZHhdID0gb2JqO1xuICAgIHJldHVybiBpZHg7XG59XG5cbmxldCBXQVNNX1ZFQ1RPUl9MRU4gPSAwO1xuXG5jb25zdCBsVGV4dEVuY29kZXIgPSB0eXBlb2YgVGV4dEVuY29kZXIgPT09ICd1bmRlZmluZWQnID8gcmVxdWlyZSgndXRpbCcpLlRleHRFbmNvZGVyIDogVGV4dEVuY29kZXI7XG5cbmxldCBjYWNoZWRUZXh0RW5jb2RlciA9IG5ldyBsVGV4dEVuY29kZXIoJ3V0Zi04Jyk7XG5cbmNvbnN0IGVuY29kZVN0cmluZyA9ICh0eXBlb2YgY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlSW50byA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gZnVuY3Rpb24gKGFyZywgdmlldykge1xuICAgIHJldHVybiBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGVJbnRvKGFyZywgdmlldyk7XG59XG4gICAgOiBmdW5jdGlvbiAoYXJnLCB2aWV3KSB7XG4gICAgY29uc3QgYnVmID0gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlKGFyZyk7XG4gICAgdmlldy5zZXQoYnVmKTtcbiAgICByZXR1cm4ge1xuICAgICAgICByZWFkOiBhcmcubGVuZ3RoLFxuICAgICAgICB3cml0dGVuOiBidWYubGVuZ3RoXG4gICAgfTtcbn0pO1xuXG5mdW5jdGlvbiBwYXNzU3RyaW5nVG9XYXNtMChhcmcsIG1hbGxvYywgcmVhbGxvYykge1xuXG4gICAgaWYgKHJlYWxsb2MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBidWYgPSBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGUoYXJnKTtcbiAgICAgICAgY29uc3QgcHRyID0gbWFsbG9jKGJ1Zi5sZW5ndGgpO1xuICAgICAgICBnZXRVaW50OE1lbW9yeTAoKS5zdWJhcnJheShwdHIsIHB0ciArIGJ1Zi5sZW5ndGgpLnNldChidWYpO1xuICAgICAgICBXQVNNX1ZFQ1RPUl9MRU4gPSBidWYubGVuZ3RoO1xuICAgICAgICByZXR1cm4gcHRyO1xuICAgIH1cblxuICAgIGxldCBsZW4gPSBhcmcubGVuZ3RoO1xuICAgIGxldCBwdHIgPSBtYWxsb2MobGVuKTtcblxuICAgIGNvbnN0IG1lbSA9IGdldFVpbnQ4TWVtb3J5MCgpO1xuXG4gICAgbGV0IG9mZnNldCA9IDA7XG5cbiAgICBmb3IgKDsgb2Zmc2V0IDwgbGVuOyBvZmZzZXQrKykge1xuICAgICAgICBjb25zdCBjb2RlID0gYXJnLmNoYXJDb2RlQXQob2Zmc2V0KTtcbiAgICAgICAgaWYgKGNvZGUgPiAweDdGKSBicmVhaztcbiAgICAgICAgbWVtW3B0ciArIG9mZnNldF0gPSBjb2RlO1xuICAgIH1cblxuICAgIGlmIChvZmZzZXQgIT09IGxlbikge1xuICAgICAgICBpZiAob2Zmc2V0ICE9PSAwKSB7XG4gICAgICAgICAgICBhcmcgPSBhcmcuc2xpY2Uob2Zmc2V0KTtcbiAgICAgICAgfVxuICAgICAgICBwdHIgPSByZWFsbG9jKHB0ciwgbGVuLCBsZW4gPSBvZmZzZXQgKyBhcmcubGVuZ3RoICogMyk7XG4gICAgICAgIGNvbnN0IHZpZXcgPSBnZXRVaW50OE1lbW9yeTAoKS5zdWJhcnJheShwdHIgKyBvZmZzZXQsIHB0ciArIGxlbik7XG4gICAgICAgIGNvbnN0IHJldCA9IGVuY29kZVN0cmluZyhhcmcsIHZpZXcpO1xuXG4gICAgICAgIG9mZnNldCArPSByZXQud3JpdHRlbjtcbiAgICB9XG5cbiAgICBXQVNNX1ZFQ1RPUl9MRU4gPSBvZmZzZXQ7XG4gICAgcmV0dXJuIHB0cjtcbn1cblxuZnVuY3Rpb24gZ2V0T2JqZWN0KGlkeCkgeyByZXR1cm4gaGVhcFtpZHhdOyB9XG5cbmZ1bmN0aW9uIGRyb3BPYmplY3QoaWR4KSB7XG4gICAgaWYgKGlkeCA8IDM2KSByZXR1cm47XG4gICAgaGVhcFtpZHhdID0gaGVhcF9uZXh0O1xuICAgIGhlYXBfbmV4dCA9IGlkeDtcbn1cblxuZnVuY3Rpb24gdGFrZU9iamVjdChpZHgpIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoaWR4KTtcbiAgICBkcm9wT2JqZWN0KGlkeCk7XG4gICAgcmV0dXJuIHJldDtcbn1cbi8qKlxuKiBAcGFyYW0ge3N0cmluZ30gc1xuKiBAcmV0dXJucyB7YW55fVxuKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZV9hdXRvKHMpIHtcbiAgICB2YXIgcHRyMCA9IHBhc3NTdHJpbmdUb1dhc20wKHMsIHdhc20uX193YmluZGdlbl9tYWxsb2MsIHdhc20uX193YmluZGdlbl9yZWFsbG9jKTtcbiAgICB2YXIgbGVuMCA9IFdBU01fVkVDVE9SX0xFTjtcbiAgICB2YXIgcmV0ID0gd2FzbS5wYXJzZV9hdXRvKHB0cjAsIGxlbjApO1xuICAgIHJldHVybiB0YWtlT2JqZWN0KHJldCk7XG59XG5cbi8qKlxuKiBAcGFyYW0ge3N0cmluZ30gaGV4XG4qIEByZXR1cm5zIHthbnl9XG4qL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlX2hleChoZXgpIHtcbiAgICB2YXIgcHRyMCA9IHBhc3NTdHJpbmdUb1dhc20wKGhleCwgd2FzbS5fX3diaW5kZ2VuX21hbGxvYywgd2FzbS5fX3diaW5kZ2VuX3JlYWxsb2MpO1xuICAgIHZhciBsZW4wID0gV0FTTV9WRUNUT1JfTEVOO1xuICAgIHZhciByZXQgPSB3YXNtLnBhcnNlX2hleChwdHIwLCBsZW4wKTtcbiAgICByZXR1cm4gdGFrZU9iamVjdChyZXQpO1xufVxuXG4vKipcbiogQHBhcmFtIHtzdHJpbmd9IGRpYWdcbiogQHJldHVybnMge2FueX1cbiovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VfZGlhZyhkaWFnKSB7XG4gICAgdmFyIHB0cjAgPSBwYXNzU3RyaW5nVG9XYXNtMChkaWFnLCB3YXNtLl9fd2JpbmRnZW5fbWFsbG9jLCB3YXNtLl9fd2JpbmRnZW5fcmVhbGxvYyk7XG4gICAgdmFyIGxlbjAgPSBXQVNNX1ZFQ1RPUl9MRU47XG4gICAgdmFyIHJldCA9IHdhc20ucGFyc2VfZGlhZyhwdHIwLCBsZW4wKTtcbiAgICByZXR1cm4gdGFrZU9iamVjdChyZXQpO1xufVxuXG5leHBvcnQgY29uc3QgX193YmluZGdlbl9qc29uX3BhcnNlID0gZnVuY3Rpb24oYXJnMCwgYXJnMSkge1xuICAgIHZhciByZXQgPSBKU09OLnBhcnNlKGdldFN0cmluZ0Zyb21XYXNtMChhcmcwLCBhcmcxKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=