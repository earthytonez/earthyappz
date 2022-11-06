"use strict";
(() => {
var exports = {};
exports.id = 3;
exports.ids = [3];
exports.modules = {

/***/ 6373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6626);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_2__);



const Share = ({ title , description , slug , className  })=>{
    // destructuring items from config object
    const { base_url  } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__.site;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        className: `flex gap-x-4 ${className}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "facebook share button",
                    href: `https://facebook.com/sharer/sharer.php?u=${base_url}/${slug}`,
                    target: "_blank",
                    rel: "noreferrer noopener",
                    button: "true",
                    className: "inline-flex h-[35px] w-[35px] items-center justify-center rounded-[4px] bg-black/5 text-center text-dark transition-all duration-200 hover:bg-primary hover:text-white dark:bg-white/5 dark:text-white dark:hover:bg-primary",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_2__.IoLogoFacebook, {})
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "twitter share button",
                    href: `https://twitter.com/intent/tweet/?text=${title}&amp;url=${base_url}/${slug}`,
                    target: "_blank",
                    rel: "noreferrer noopener",
                    button: "true",
                    className: "inline-flex h-[35px] w-[35px] items-center justify-center rounded-[4px] bg-black/5 text-center text-dark transition-all duration-200 hover:bg-primary hover:text-white dark:bg-white/5 dark:text-white dark:hover:bg-primary",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_2__.IoLogoTwitter, {})
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "linkedin share button",
                    href: `https://www.linkedin.com/shareArticle?mini=true&url=${base_url}/${slug}&title=${title}&summary=${description}&source=${base_url}`,
                    target: "_blank",
                    rel: "noreferrer noopener",
                    className: "inline-flex h-[35px] w-[35px] items-center justify-center rounded-[4px] bg-black/5 text-center text-dark transition-all duration-200 hover:bg-primary hover:text-white dark:bg-white/5 dark:text-white dark:hover:bg-primary",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_2__.IoLogoLinkedin, {})
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "pinterest share button",
                    href: `https://pinterest.com/pin/create/button/?url=${base_url}/${slug}&media=&description=${description}`,
                    target: "_blank",
                    rel: "noreferrer noopener",
                    button: "true",
                    className: "inline-flex h-[35px] w-[35px] items-center justify-center rounded-[4px] bg-black/5 text-center text-dark transition-all duration-200 hover:bg-primary hover:text-white dark:bg-white/5 dark:text-white dark:hover:bg-primary",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_2__.IoLogoPinterest, {})
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Share);


/***/ }),

/***/ 1569:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils_dateFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3464);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7285);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_future_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9678);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ToolsIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5690);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ToolsIcon__WEBPACK_IMPORTED_MODULE_4__]);
_ToolsIcon__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable @next/next/no-html-link-for-pages */ 




const ThemeInfo = ({ theme , slug , tools  })=>{
    const { title , author , author_link , description , github , github_star , github_fork , publish_date , update_date , download , price , makingmusic , aesthetic , tags , category , external_url ,  } = theme[0].frontmatter;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "widget mb-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "h2 mb-5",
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mb-2",
                        children: description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "intro-description",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mt-6 flex",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "btn btn-demo mr-4 sm:px-10 lg:px-7 xl:px-10",
                                    target: "_blank",
                                    rel: "noopener noreferrer nofollow",
                                    href: external_url,
                                    children: "Website"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "btn btn-fill sm:px-10 lg:px-7 xl:px-10",
                                    href: `${github ? github : download}?ref=statichunt.com`,
                                    target: "_blank",
                                    rel: "nofollow noopener noreferrer",
                                    children: "Download"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "widget widget-info mb-3 mt-12",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "h4 mb-3 font-light",
                        children: "Theme Information:"
                    }),
                    github_star > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center py-[6px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "min-w-[120px]",
                                children: "Stars : "
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_future_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        className: "mr-2 dark:invert",
                                        src: "/images/icons/star.svg",
                                        alt: "github star",
                                        height: "15",
                                        width: "15"
                                    }),
                                    github_star
                                ]
                            })
                        ]
                    }),
                    github_fork > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center py-[6px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "min-w-[120px]",
                                children: "Forks : "
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_future_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        className: "mr-2 dark:invert",
                                        src: "/images/icons/fork.svg",
                                        alt: "github fork",
                                        height: "14",
                                        width: "14"
                                    }),
                                    github_fork
                                ]
                            })
                        ]
                    }),
                    price && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center py-[6px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "min-w-[120px]",
                                children: "Price : "
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "text-dark dark:text-white",
                                children: [
                                    "$",
                                    price
                                ]
                            })
                        ]
                    }),
                    update_date && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center py-[6px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "min-w-[120px]",
                                children: "Updated : "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-dark dark:text-white",
                                children: (0,_lib_utils_dateFormat__WEBPACK_IMPORTED_MODULE_1__/* .dateFormat */ .v)(update_date)
                            })
                        ]
                    }),
                    publish_date && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center py-[6px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "min-w-[120px]",
                                children: "Published : "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-dark dark:text-white",
                                children: (0,_lib_utils_dateFormat__WEBPACK_IMPORTED_MODULE_1__/* .dateFormat */ .v)(publish_date)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "flex py-[6px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "mb-2 min-w-[120px]",
                                children: "Types : "
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-wrap items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ToolsIcon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        tools: tools,
                                        size: 20,
                                        themeCard: false,
                                        type: makingmusic
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ToolsIcon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        tools: tools,
                                        size: 20,
                                        themeCard: false,
                                        type: aesthetic
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ToolsIcon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        tools: tools,
                                        size: 20,
                                        themeCard: false,
                                        type: tags
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ToolsIcon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        tools: tools,
                                        size: 20,
                                        themeCard: false,
                                        type: category
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "widget mt-10",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_future_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: github ? `https://www.github.com/${github.match(/github\.com\/([^\/]+)/, "")[1]}.png` : "/images/author-placeholder.png",
                            height: 50,
                            width: 50,
                            alt: author,
                            className: "mr-5 rounded border border-gray-100 dark:border-darkmode-border"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "mb-[2px] block text-sm",
                                    children: "Created by"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: author_link ? author_link : github ? `https://${github.match(/github\.com\/([^\/]+)/, "")[0]}` : "",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        target: "_blank",
                                        rel: "nofollow noopener noreferrer",
                                        className: "text-dark hover:underline dark:text-white",
                                        children: author ? author : github ? github.match(/github\.com\/([^\/]+)/, "")[0] : ""
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeInfo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ImageFallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9153);
/* eslint-disable react/jsx-no-comment-textnodes */ 


const ThemePreview = ({ theme , slug  })=>{
    const { demo  } = theme[0].frontmatter;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let bwsHeader = document.querySelector(".bwsHeader");
        let loaderLabel = document.querySelector(".loaderLabel");
        let bwsThumbnail = document.querySelector(`.bwsThumbnail`);
        let bwsActions = document.querySelector(".bwsActions");
        document.getElementById(slug).onload = ()=>{
            if (bwsHeader) {
                bwsHeader.classList.add(`livePreviwLoaded`);
                loaderLabel.innerHTML = "Live Preview is Loaded";
                setTimeout(()=>{
                    bwsHeader.classList.remove(`livePreviwLoaded`);
                    bwsThumbnail.classList.add(`hidden`);
                    bwsHeader.classList.add(`addElement`);
                    bwsActions.classList.add(`bwsActionsShow`);
                    loaderLabel.classList.add(`loaderLabelHide`);
                }, 750);
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        slug
    ]);
    // device toggle
    const { 0: mobilePreview , 1: setMobilePreview  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `bwsBlock ${mobilePreview && "bwsMobile"} hidden md:block`,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `bwsHeader`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: `loaderLabel`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: `loaderLabelIcon`,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                    className: "mb-0",
                                                    height: "14",
                                                    width: "14",
                                                    version: "1.1",
                                                    viewBox: "0 0 512 512",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "m305.1 501h-98.3c-11.3 0-20.4-9.1-20.4-20.4v-44.8c-2.9-1.1-5.7-2.3-8.5-3.5l-31.5 31.7c-7.7 7.6-21.2 7.7-28.9 0l-69.5-69.5c-3.8-3.8-6-9-6-14.4s2.2-10.6 6-14.4l31.6-31.7c-1.2-2.8-2.4-5.6-3.5-8.5h-44.7c-11.3 0-20.4-9.1-20.4-20.4v-98.3c0-11.3 9.1-20.4 20.4-20.4h44.8c1.1-2.9 2.3-5.7 3.5-8.5l-31.7-31.5c-8-8-8-20.9 0-28.9l69.5-69.5c8-8 20.9-8 28.9 0l31.6 31.6c2.8-1.2 5.6-2.4 8.5-3.5v-44.7c0-11.3 9.1-20.4 20.4-20.4h98.3c11.3 0 20.4 9.1 20.4 20.4v44.8c2.9 1.1 5.7 2.3 8.5 3.5l31.5-31.7c8-8 20.9-8 28.9 0l69.5 69.5c8 8 8 20.9 0 28.9l-31.6 31.6c1.2 2.8 2.4 5.6 3.5 8.5h44.8c11.3 0 20.4 9.1 20.4 20.4v98.3c0 11.3-9.1 20.4-20.4 20.4h-44.8c-1.1 2.9-2.3 5.7-3.5 8.5l31.6 31.6c8 8 8 20.9 0 28.9l-69.5 69.4c-7.7 7.7-21.2 7.7-28.9 0l-31.6-31.6c-2.8 1.2-5.6 2.4-8.5 3.5v44.8c0 11.2-9.1 20.3-20.4 20.3zm-77.8-40.8h57.4v-38.9c0-9 5.9-17 14.6-19.6 10.3-3.1 20.1-7.1 29.1-12 8-4.3 17.8-2.9 24.2 3.5l27.5 27.5 40.6-40.6-27.5-27.5c-6.4-6.4-7.8-16.2-3.5-24.2 4.9-9 8.9-18.7 12-29.1 2.6-8.7 10.5-14.6 19.6-14.6h39v-57.4h-39c-9 0-17-5.9-19.6-14.6-3.1-10.3-7.1-20.1-12-29.1-4.3-8-2.9-17.8 3.5-24.2l27.5-27.5-40.6-40.6-27.5 27.5c-6.4 6.4-16.2 7.8-24.2 3.5-9-4.9-18.7-8.9-29.1-12-8.7-2.6-14.6-10.5-14.6-19.6v-39h-57.4v39c0 9-5.9 17-14.6 19.6-10.3 3.1-20.1 7.1-29.1 12-7.9 4.3-17.8 2.9-24.2-3.5l-27.5-27.5-40.6 40.6 27.5 27.5c6.4 6.4 7.8 16.2 3.5 24.2-4.9 9-8.9 18.7-12 29.1-2.6 8.7-10.5 14.6-19.6 14.6h-39v57.4h39c9 0 17 5.9 19.6 14.6 3.1 10.3 7.1 20.1 12 29.1 4.3 8 2.9 17.8-3.5 24.2l-27.5 27.5 40.6 40.6 27.5-27.5c6.4-6.4 16.2-7.8 24.2-3.5 9 4.9 18.8 8.9 29.1 12 8.7 2.6 14.6 10.5 14.6 19.6v38.9z"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "m256 365.1c-60.2 0-109.1-48.9-109.1-109.1s48.9-109.1 109.1-109.1 109.1 48.9 109.1 109.1-48.9 109.1-109.1 109.1zm0-177.4c-37.6 0-68.3 30.6-68.3 68.3 0 37.6 30.6 68.3 68.3 68.3 37.6 0 68.3-30.6 68.3-68.3 0-37.6-30.7-68.3-68.3-68.3z"
                                                        })
                                                    ]
                                                })
                                            }),
                                            " ",
                                            "We are Pulling down the Live Site here..."
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `bwsActions text-right`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: `bwsActionLink`,
                                            target: "blank",
                                            href: `${demo}?ref=statichunt.com`,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "12",
                                                height: "12",
                                                fill: "currentColor",
                                                viewBox: "0 0 16 16",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        fillRule: "evenodd",
                                                        d: "M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        fillRule: "evenodd",
                                                        d: "M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `bwsContent`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                        id: slug,
                                        sandbox: "allow-same-origin allow-scripts allow-popups allow-forms",
                                        loading: "lazy",
                                        src: demo
                                    }, demo),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: `bwsThumbnailStyle bwsThumbnail`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageFallback__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            src: `/themes/${slug}.png`,
                                            fallback: `https://teamosis-sg.vercel.app/api/img?url=${demo}`,
                                            height: 250,
                                            width: 750,
                                            alt: theme[0].frontmatter.title,
                                            className: "w-full rounded-t"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `rounded-3 lh-0 shadowLg overflow-hidden md:hidden`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageFallback__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            src: `/themes/${slug}.png`,
                            fallback: `https://teamosis-sg.vercel.app/api/img?url=${demo}`,
                            height: "100",
                            width: "500",
                            alt: theme[0].frontmatter.title,
                            className: "w-full rounded-t"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "bws-device-toggle hidden md:block",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            className: "deviceToggleDesktop has-tooltip",
                            "aria-label": "Toggle Desktop",
                            "data-tooltip": "Desktop",
                            onClick: ()=>setMobilePreview(false),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "inline",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                strokeWidth: "2",
                                stroke: "currentColor",
                                fill: "none",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        stroke: "none",
                                        d: "M0 0h24v24H0z",
                                        fill: "none"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                        x: "3",
                                        y: "4",
                                        width: "18",
                                        height: "12",
                                        rx: "1"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                        x1: "7",
                                        y1: "20",
                                        x2: "17",
                                        y2: "20"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                        x1: "9",
                                        y1: "16",
                                        x2: "9",
                                        y2: "20"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                        x1: "15",
                                        y1: "16",
                                        x2: "15",
                                        y2: "20"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            className: "deviceToggleMobile has-tooltip",
                            "aria-label": "Toggle Mobile",
                            "data-tooltip": "Mobile",
                            onClick: ()=>setMobilePreview(true),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "inline",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                strokeWidth: "2",
                                stroke: "currentColor",
                                fill: "none",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        stroke: "none",
                                        d: "M0 0h24v24H0z",
                                        fill: "none"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                        x: "7",
                                        y: "4",
                                        width: "10",
                                        height: "16",
                                        rx: "1"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                        x1: "11",
                                        y1: "5",
                                        x2: "13",
                                        y2: "5"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                        x1: "12",
                                        y1: "17",
                                        x2: "12",
                                        y2: "17.01"
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemePreview);


/***/ }),

/***/ 8060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ similerItems)
/* harmony export */ });
// similer products
const similerItems = (currentItem, allItems, slug)=>{
    let ssg = [];
    let category = [];
    // set ssg
    if (currentItem[0].frontmatter.ssg?.length > 0) {
        ssg = currentItem[0].frontmatter.ssg;
    }
    // set category
    if (currentItem[0].frontmatter.category?.length > 0) {
        category = currentItem[0].frontmatter.category;
    }
    // filter by ssg
    const filterBySSG = allItems.filter((item)=>ssg.find((ssg)=>item.frontmatter.ssg?.includes(ssg)));
    // filter by category
    const filterByCategory = filterBySSG.filter((item)=>category.find((category)=>item.frontmatter.category?.includes(category)));
    // merged after filter
    // const mergedItems = [...new Set([...filterBySSG, ...filterByCategory])];
    // filter by slug
    const filterBySlug = filterByCategory.filter((product)=>product.slug !== slug);
    return filterBySlug;
};


/***/ }),

/***/ 3503:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MobileSidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9841);
/* harmony import */ var _components_Share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6373);
/* harmony import */ var _components_ThemeInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1569);
/* harmony import */ var _components_ThemePreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3190);
/* harmony import */ var _components_Themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5514);
/* harmony import */ var _layouts_Baseof__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2033);
/* harmony import */ var _lib_contentParser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3685);
/* harmony import */ var _lib_utils_similarItems__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8060);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3312);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ThemeInfo__WEBPACK_IMPORTED_MODULE_3__, _components_Themes__WEBPACK_IMPORTED_MODULE_5__, _layouts_Baseof__WEBPACK_IMPORTED_MODULE_6__, _lib_contentParser__WEBPACK_IMPORTED_MODULE_7__, _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_8__]);
([_components_ThemeInfo__WEBPACK_IMPORTED_MODULE_3__, _components_Themes__WEBPACK_IMPORTED_MODULE_5__, _layouts_Baseof__WEBPACK_IMPORTED_MODULE_6__, _lib_contentParser__WEBPACK_IMPORTED_MODULE_7__, _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const SingleTheme = ({ slug , theme , allTheme , tools  })=>{
    const { frontmatter , content  } = theme[0];
    const { title , description , meta_title , image , noindex , canonical  } = frontmatter;
    const similarThemes = (0,_lib_utils_similarItems__WEBPACK_IMPORTED_MODULE_9__/* .similerItems */ .R)(theme, allTheme, slug);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Baseof__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        title: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_8__/* .plainify */ .ab)(title),
        description: description ? (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_8__/* .plainify */ .ab)(description) : (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_8__/* .plainify */ .ab)(content.slice(0, 120)),
        meta_title: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_8__/* .plainify */ .ab)(meta_title),
        image: image,
        noindex: noindex,
        canonical: canonical,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MobileSidebar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "section mx-auto max-w-[1366px]",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row justify-center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "relative lg:col-8",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ThemePreview__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            theme: theme,
                                            slug: slug
                                        }),
                                        (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_8__/* .markdownify */ .gI)(content, "div", "content"),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-8 hidden border-y border-gray-300 py-5 lg:block",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-wrap items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "h6 mb-1 mr-5",
                                                        children: "Share This Theme:"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Share__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                        title: title,
                                                        description: description,
                                                        slug: slug
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mt-lg-0 mt-4 lg:col-4 lg:mt-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ThemeInfo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        theme: theme,
                                        slug: slug,
                                        tools: tools
                                    })
                                })
                            ]
                        }),
                        similarThemes.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mt-20",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "mb-8 text-center",
                                    children: "Similar Themes"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Themes__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    customRowClass: "row justify-center !overflow-hidden",
                                    customColClass: "col-12 mb-8 sm:col-6 md:col-4 2xl:col-3 2xl:last:block sm:last:block md:last:hidden last:hidden",
                                    themes: similarThemes.slice(0, 4),
                                    tools: tools
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleTheme);
const getStaticPaths = ()=>{
    const slugs = (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_7__/* .getSinglePagesSlug */ .YC)("content/themes");
    const paths = slugs.map((theme)=>({
            params: {
                theme: theme
            }
        }));
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = ({ params  })=>{
    const { theme  } = params;
    const allTheme = (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_7__/* .getSinglePages */ .Gl)("content/themes");
    const singleTheme = allTheme.filter((data)=>data.slug == theme);
    const making = (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_7__/* .getSinglePages */ .Gl)("content/making");
    const learning = (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_7__/* .getSinglePages */ .Gl)("content/learning");
    const appreciating = (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_7__/* .getSinglePages */ .Gl)("content/appreciating");
    const category = (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_7__/* .getSinglePages */ .Gl)("content/category");
    const tools = [
        ...making,
        ...learning,
        ...appreciating,
        ...category
    ];
    return {
        props: {
            theme: singleTheme,
            allTheme: allTheme,
            slug: theme,
            tools: tools
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5771:
/***/ ((module) => {

module.exports = require("@loadable/component");

/***/ }),

/***/ 5465:
/***/ ((module) => {

module.exports = require("date-fns-tz");

/***/ }),

/***/ 9785:
/***/ ((module) => {

module.exports = require("feeder-react-feedback/dist/Feedback");

/***/ }),

/***/ 8904:
/***/ ((module) => {

module.exports = require("github-slugger");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 5107:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 1423:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9989:
/***/ ((module) => {

module.exports = require("react-icons/io5");

/***/ }),

/***/ 4152:
/***/ ((module) => {

module.exports = require("react-icons/tb");

/***/ }),

/***/ 4336:
/***/ ((module) => {

module.exports = require("react-infinite-scroll-component");

/***/ }),

/***/ 7945:
/***/ ((module) => {

module.exports = require("react-use-cookie");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8974:
/***/ ((module) => {

module.exports = import("marked");;

/***/ }),

/***/ 4818:
/***/ ((module) => {

module.exports = import("next-mdx-remote/serialize");;

/***/ }),

/***/ 7752:
/***/ ((module) => {

module.exports = import("rehype-slug");;

/***/ }),

/***/ 6809:
/***/ ((module) => {

module.exports = import("remark-gfm");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [470,862,789,626,642,33,685,514,841], () => (__webpack_exec__(3503)));
module.exports = __webpack_exports__;

})();