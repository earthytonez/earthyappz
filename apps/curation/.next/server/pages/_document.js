"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 4835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _document)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./layouts/components/TwSizeIndicator.js

const TwSizeIndicator = ()=>{
    if (false) {} else {
        return null;
    }
};
/* harmony default export */ const components_TwSizeIndicator = (TwSizeIndicator);

// EXTERNAL MODULE: ./config/config.json
var config = __webpack_require__(6626);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@12.3.1_2mygebwfgdyopr3fy2qddu2eli/node_modules/next/document.js
var next_document = __webpack_require__(6852);
;// CONCATENATED MODULE: ./pages/_document.js




const Document = ()=>{
    // destructuring items from config object
    const { favicon  } = config.site;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Head, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "shortcut icon",
                        href: favicon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "msapplication-TileColor",
                        content: "#252f37"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "theme-color",
                        media: "(prefers-color-scheme: light)",
                        content: "#fff"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "theme-color",
                        media: "(prefers-color-scheme: dark)",
                        content: "#252f37"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "yandex-verification",
                        content: "776294feb841e08c"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_document.Main, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_TwSizeIndicator, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_document.NextScript, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const _document = (Document);


/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [470,852,626], () => (__webpack_exec__(4835)));
module.exports = __webpack_exports__;

})();