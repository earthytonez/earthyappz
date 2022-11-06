"use strict";
exports.id = 860;
exports.ids = [860];
exports.modules = {

/***/ 4860:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3312);
/* harmony import */ var _ImageFallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9153);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__]);
_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Resources = ({ resources  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row justify-center",
        children: resources.map((resource)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mb-10 xl:col-10",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "group rounded-[4px] bg-gradient-to-r from-white to-[#ffffff00] transition duration-200 hover:bg-[#0596690f] dark:from-darkmode-body sm:flex",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageFallback__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            loading: "lazy",
                            src: `/resources/${resource.slug}.png`,
                            fallback: `https://teamosis-sg.vercel.app/api/img?url=${resource.frontmatter.website}`,
                            alt: "{resources.frontmatter.title}",
                            width: 160,
                            height: 100,
                            className: "mr-8 max-w-[160px] rounded-[4px]"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mt-4 bg-transparent sm:mt-0",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                    className: "h5 mb-[4px] flex items-center pt-2 font-medium",
                                    children: [
                                        resource.frontmatter.title,
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: `${resource.frontmatter.website}?ref=statichunt.com`,
                                            rel: "noopener noreferrer",
                                            target: "_blank",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                className: "ml-3 hidden text-primary group-hover:inline",
                                                width: "15",
                                                height: "16",
                                                viewBox: "0 0 13 14",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.5",
                                                    fill: "none",
                                                    fillRule: "evenodd",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M9.6 4H4.2a2.4 2.4 0 00-2.4 2.4V10"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M6.6 7l3-3-3-3m5.4 9v3H0"
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mb-3 text-sm text-text dark:text-light",
                                    children: resource.frontmatter.description
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex space-x-2",
                                    children: resource.frontmatter.tool.map((tool, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "rounded border border-border px-2 py-[2px] text-xs",
                                            children: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__/* .humanize */ .OI)(tool)
                                        }, `tool-${i}`))
                                })
                            ]
                        })
                    ]
                })
            }, resource.slug))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Resources);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;