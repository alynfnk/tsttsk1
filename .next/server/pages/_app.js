/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./helpers/intercept.js":
/*!******************************!*\
  !*** ./helpers/intercept.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\naxios__WEBPACK_IMPORTED_MODULE_0___default().interceptors.request.use((config)=>{\n    const token = localStorage.getItem('token');\n    if (token) {\n        config.headers['Token'] = token;\n    }\n    return config;\n}, (error)=>{\n    Promise.reject(error);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL2ludGVyY2VwdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBeUI7QUFFekJBLHFFQUE4QixFQUM1QkksTUFBTSxHQUFJLENBQUM7SUFDUCxLQUFLLENBQUNDLEtBQUssR0FBR0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBTztJQUMxQyxFQUFFLEVBQUVGLEtBQUssRUFBRSxDQUFDO1FBQ1JELE1BQU0sQ0FBQ0ksT0FBTyxDQUFDLENBQU8sVUFBSUgsS0FBSztJQUNuQyxDQUFDO0lBQ0QsTUFBTSxDQUFDRCxNQUFNO0FBQ2pCLENBQUMsR0FDREssS0FBSyxHQUFJLENBQUM7SUFDTkMsT0FBTyxDQUFDQyxNQUFNLENBQUNGLEtBQUs7QUFDeEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3R0YXNrLy4vaGVscGVycy9pbnRlcmNlcHQuanM/YTA4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuYXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKFxyXG4gIGNvbmZpZyA9PiB7XHJcbiAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgY29uZmlnLmhlYWRlcnNbJ1Rva2VuJ10gPSB0b2tlbjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY29uZmlnO1xyXG4gIH0sXHJcbiAgZXJyb3IgPT4ge1xyXG4gICAgICBQcm9taXNlLnJlamVjdChlcnJvcilcclxuICB9KTsiXSwibmFtZXMiOlsiYXhpb3MiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaGVhZGVycyIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./helpers/intercept.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.scss */ \"./styles/global.scss\");\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_intercept__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/intercept */ \"./helpers/intercept.js\");\n/* harmony import */ var uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uikit */ \"uikit\");\n/* harmony import */ var uikit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uikit__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n// This default export is required in a new `pages/_app.js` file.\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n        ...pageProps,\n        __source: {\n            fileName: \"C:\\\\project\\\\testtask\\\\pages\\\\_app.js\",\n            lineNumber: 8,\n            columnNumber: 10\n        },\n        __self: this\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNEO0FBQ0o7QUFHekIsRUFBaUU7QUFDbEQsUUFBUSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUN2RCxNQUFNLHNFQUFFRCxTQUFTO1dBQUtDLFNBQVM7Ozs7Ozs7O0FBQ2pDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0dGFzay8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWwuc2NzcydcclxuaW1wb3J0ICcuLi9oZWxwZXJzL2ludGVyY2VwdCdcclxuaW1wb3J0IFVJa2l0IGZyb20gJ3Vpa2l0JztcclxuXHJcblxyXG4vLyBUaGlzIGRlZmF1bHQgZXhwb3J0IGlzIHJlcXVpcmVkIGluIGEgbmV3IGBwYWdlcy9fYXBwLmpzYCBmaWxlLlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG59Il0sIm5hbWVzIjpbIlVJa2l0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/global.scss":
/*!****************************!*\
  !*** ./styles/global.scss ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "uikit":
/*!************************!*\
  !*** external "uikit" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("uikit");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();