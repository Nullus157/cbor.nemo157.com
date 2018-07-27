(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./build/cbor_nemo157_com.js":
/*!***********************************!*\
  !*** ./build/cbor_nemo157_com.js ***!
  \***********************************/
/*! exports provided: parse_auto, parse_hex, parse_diag, __wbindgen_json_parse, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse_auto", function() { return parse_auto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse_hex", function() { return parse_hex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse_diag", function() { return parse_diag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_json_parse", function() { return __wbindgen_json_parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_throw", function() { return __wbindgen_throw; });
/* harmony import */ var _cbor_nemo157_com_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cbor_nemo157_com_bg */ "./build/cbor_nemo157_com_bg.wasm");
/* tslint:disable */


const TextEncoder = typeof self === 'object' && self.TextEncoder
    ? self.TextEncoder
    : __webpack_require__(/*! util */ "./node_modules/util/util.js").TextEncoder;

let cachedEncoder = new TextEncoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _cbor_nemo157_com_bg__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetUint8Memory = new Uint8Array(_cbor_nemo157_com_bg__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetUint8Memory;
}

function passStringToWasm(arg) {
    
    const buf = cachedEncoder.encode(arg);
    const ptr = _cbor_nemo157_com_bg__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"](buf.length);
    getUint8Memory().set(buf, ptr);
    return [ptr, buf.length];
}

const stack = [];

const slab = [{ obj: undefined }, { obj: null }, { obj: true }, { obj: false }];

function getObject(idx) {
    if ((idx & 1) === 1) {
        return stack[idx >> 1];
    } else {
        const val = slab[idx >> 1];
        
        return val.obj;
        
    }
}

let slab_next = slab.length;

function dropRef(idx) {
    
    idx = idx >> 1;
    if (idx < 4) return;
    let obj = slab[idx];
    
    obj.cnt -= 1;
    if (obj.cnt > 0) return;
    
    // If we hit 0 then free up our space in the slab
    slab[idx] = slab_next;
    slab_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropRef(idx);
    return ret;
}
/**
* @param {string} arg0
* @returns {any}
*/
function parse_auto(arg0) {
    const [ptr0, len0] = passStringToWasm(arg0);
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
    const [ptr0, len0] = passStringToWasm(arg0);
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
    const [ptr0, len0] = passStringToWasm(arg0);
    try {
        return takeObject(_cbor_nemo157_com_bg__WEBPACK_IMPORTED_MODULE_0__["parse_diag"](ptr0, len0));
        
    } finally {
        _cbor_nemo157_com_bg__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_free"](ptr0, len0 * 1);
        
    }
    
}

function addHeapObject(obj) {
    if (slab_next === slab.length) slab.push(slab.length + 1);
    const idx = slab_next;
    const next = slab[idx];
    
    slab_next = next;
    
    slab[idx] = { obj, cnt: 1 };
    return idx << 1;
}

const TextDecoder = typeof self === 'object' && self.TextDecoder
    ? self.TextDecoder
    : __webpack_require__(/*! util */ "./node_modules/util/util.js").TextDecoder;

let cachedDecoder = new TextDecoder('utf-8');

function getStringFromWasm(ptr, len) {
    return cachedDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

function __wbindgen_json_parse(ptr, len) {
    return addHeapObject(JSON.parse(getStringFromWasm(ptr, len)));
}

function __wbindgen_throw(ptr, len) {
    throw new Error(getStringFromWasm(ptr, len));
}



/***/ }),

/***/ "./build/cbor_nemo157_com_bg.wasm":
/*!****************************************!*\
  !*** ./build/cbor_nemo157_com_bg.wasm ***!
  \****************************************/
/*! exports provided: memory, __heap_base, __data_end, __rustc_debug_gdb_scripts_section__, parse_auto, parse_hex, parse_diag, __wbindgen_malloc, __wbindgen_free */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9idWlsZC9jYm9yX25lbW8xNTdfY29tLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsZUFBZSxpQkFBaUIsR0FBRyxZQUFZLEdBQUcsWUFBWSxHQUFHLGFBQWE7O0FBRTlFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsT0FBTztBQUNqQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxVQUFVLE9BQU87QUFDakIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsVUFBVSxPQUFPO0FBQ2pCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMC5tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbmltcG9ydCAqIGFzIHdhc20gZnJvbSAnLi9jYm9yX25lbW8xNTdfY29tX2JnJztcblxuY29uc3QgVGV4dEVuY29kZXIgPSB0eXBlb2Ygc2VsZiA9PT0gJ29iamVjdCcgJiYgc2VsZi5UZXh0RW5jb2RlclxuICAgID8gc2VsZi5UZXh0RW5jb2RlclxuICAgIDogcmVxdWlyZSgndXRpbCcpLlRleHRFbmNvZGVyO1xuXG5sZXQgY2FjaGVkRW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigndXRmLTgnKTtcblxubGV0IGNhY2hlZ2V0VWludDhNZW1vcnkgPSBudWxsO1xuZnVuY3Rpb24gZ2V0VWludDhNZW1vcnkoKSB7XG4gICAgaWYgKGNhY2hlZ2V0VWludDhNZW1vcnkgPT09IG51bGwgfHwgY2FjaGVnZXRVaW50OE1lbW9yeS5idWZmZXIgIT09IHdhc20ubWVtb3J5LmJ1ZmZlcikge1xuICAgICAgICBjYWNoZWdldFVpbnQ4TWVtb3J5ID0gbmV3IFVpbnQ4QXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZ2V0VWludDhNZW1vcnk7XG59XG5cbmZ1bmN0aW9uIHBhc3NTdHJpbmdUb1dhc20oYXJnKSB7XG4gICAgXG4gICAgY29uc3QgYnVmID0gY2FjaGVkRW5jb2Rlci5lbmNvZGUoYXJnKTtcbiAgICBjb25zdCBwdHIgPSB3YXNtLl9fd2JpbmRnZW5fbWFsbG9jKGJ1Zi5sZW5ndGgpO1xuICAgIGdldFVpbnQ4TWVtb3J5KCkuc2V0KGJ1ZiwgcHRyKTtcbiAgICByZXR1cm4gW3B0ciwgYnVmLmxlbmd0aF07XG59XG5cbmNvbnN0IHN0YWNrID0gW107XG5cbmNvbnN0IHNsYWIgPSBbeyBvYmo6IHVuZGVmaW5lZCB9LCB7IG9iajogbnVsbCB9LCB7IG9iajogdHJ1ZSB9LCB7IG9iajogZmFsc2UgfV07XG5cbmZ1bmN0aW9uIGdldE9iamVjdChpZHgpIHtcbiAgICBpZiAoKGlkeCAmIDEpID09PSAxKSB7XG4gICAgICAgIHJldHVybiBzdGFja1tpZHggPj4gMV07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdmFsID0gc2xhYltpZHggPj4gMV07XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdmFsLm9iajtcbiAgICAgICAgXG4gICAgfVxufVxuXG5sZXQgc2xhYl9uZXh0ID0gc2xhYi5sZW5ndGg7XG5cbmZ1bmN0aW9uIGRyb3BSZWYoaWR4KSB7XG4gICAgXG4gICAgaWR4ID0gaWR4ID4+IDE7XG4gICAgaWYgKGlkeCA8IDQpIHJldHVybjtcbiAgICBsZXQgb2JqID0gc2xhYltpZHhdO1xuICAgIFxuICAgIG9iai5jbnQgLT0gMTtcbiAgICBpZiAob2JqLmNudCA+IDApIHJldHVybjtcbiAgICBcbiAgICAvLyBJZiB3ZSBoaXQgMCB0aGVuIGZyZWUgdXAgb3VyIHNwYWNlIGluIHRoZSBzbGFiXG4gICAgc2xhYltpZHhdID0gc2xhYl9uZXh0O1xuICAgIHNsYWJfbmV4dCA9IGlkeDtcbn1cblxuZnVuY3Rpb24gdGFrZU9iamVjdChpZHgpIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoaWR4KTtcbiAgICBkcm9wUmVmKGlkeCk7XG4gICAgcmV0dXJuIHJldDtcbn1cbi8qKlxuKiBAcGFyYW0ge3N0cmluZ30gYXJnMFxuKiBAcmV0dXJucyB7YW55fVxuKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZV9hdXRvKGFyZzApIHtcbiAgICBjb25zdCBbcHRyMCwgbGVuMF0gPSBwYXNzU3RyaW5nVG9XYXNtKGFyZzApO1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB0YWtlT2JqZWN0KHdhc20ucGFyc2VfYXV0byhwdHIwLCBsZW4wKSk7XG4gICAgICAgIFxuICAgIH0gZmluYWxseSB7XG4gICAgICAgIHdhc20uX193YmluZGdlbl9mcmVlKHB0cjAsIGxlbjAgKiAxKTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxufVxuXG4vKipcbiogQHBhcmFtIHtzdHJpbmd9IGFyZzBcbiogQHJldHVybnMge2FueX1cbiovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VfaGV4KGFyZzApIHtcbiAgICBjb25zdCBbcHRyMCwgbGVuMF0gPSBwYXNzU3RyaW5nVG9XYXNtKGFyZzApO1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB0YWtlT2JqZWN0KHdhc20ucGFyc2VfaGV4KHB0cjAsIGxlbjApKTtcbiAgICAgICAgXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgd2FzbS5fX3diaW5kZ2VuX2ZyZWUocHRyMCwgbGVuMCAqIDEpO1xuICAgICAgICBcbiAgICB9XG4gICAgXG59XG5cbi8qKlxuKiBAcGFyYW0ge3N0cmluZ30gYXJnMFxuKiBAcmV0dXJucyB7YW55fVxuKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZV9kaWFnKGFyZzApIHtcbiAgICBjb25zdCBbcHRyMCwgbGVuMF0gPSBwYXNzU3RyaW5nVG9XYXNtKGFyZzApO1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB0YWtlT2JqZWN0KHdhc20ucGFyc2VfZGlhZyhwdHIwLCBsZW4wKSk7XG4gICAgICAgIFxuICAgIH0gZmluYWxseSB7XG4gICAgICAgIHdhc20uX193YmluZGdlbl9mcmVlKHB0cjAsIGxlbjAgKiAxKTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxufVxuXG5mdW5jdGlvbiBhZGRIZWFwT2JqZWN0KG9iaikge1xuICAgIGlmIChzbGFiX25leHQgPT09IHNsYWIubGVuZ3RoKSBzbGFiLnB1c2goc2xhYi5sZW5ndGggKyAxKTtcbiAgICBjb25zdCBpZHggPSBzbGFiX25leHQ7XG4gICAgY29uc3QgbmV4dCA9IHNsYWJbaWR4XTtcbiAgICBcbiAgICBzbGFiX25leHQgPSBuZXh0O1xuICAgIFxuICAgIHNsYWJbaWR4XSA9IHsgb2JqLCBjbnQ6IDEgfTtcbiAgICByZXR1cm4gaWR4IDw8IDE7XG59XG5cbmNvbnN0IFRleHREZWNvZGVyID0gdHlwZW9mIHNlbGYgPT09ICdvYmplY3QnICYmIHNlbGYuVGV4dERlY29kZXJcbiAgICA/IHNlbGYuVGV4dERlY29kZXJcbiAgICA6IHJlcXVpcmUoJ3V0aWwnKS5UZXh0RGVjb2RlcjtcblxubGV0IGNhY2hlZERlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoJ3V0Zi04Jyk7XG5cbmZ1bmN0aW9uIGdldFN0cmluZ0Zyb21XYXNtKHB0ciwgbGVuKSB7XG4gICAgcmV0dXJuIGNhY2hlZERlY29kZXIuZGVjb2RlKGdldFVpbnQ4TWVtb3J5KCkuc3ViYXJyYXkocHRyLCBwdHIgKyBsZW4pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5fanNvbl9wYXJzZShwdHIsIGxlbikge1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KEpTT04ucGFyc2UoZ2V0U3RyaW5nRnJvbVdhc20ocHRyLCBsZW4pKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX3Rocm93KHB0ciwgbGVuKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGdldFN0cmluZ0Zyb21XYXNtKHB0ciwgbGVuKSk7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=