"use strict";
exports.id = 514;
exports.ids = [514];
exports.modules = {

/***/ 9153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7285);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_future_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable jsx-a11y/alt-text */ 


const ImageFallback = (props)=>{
    const { src , fallback , ...rest } = props;
    const { 0: imgSrc , 1: setImgSrc  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(src);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_future_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        ...rest,
        src: imgSrc,
        onError: ()=>{
            setImgSrc(fallback);
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageFallback);


/***/ }),

/***/ 5514:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils_dateFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3464);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3312);
/* harmony import */ var _lib_utils_toolsArray__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(824);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7285);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_future_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9678);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4152);
/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_tb__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4336);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ImageFallback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9153);
/* harmony import */ var _ToolsIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5690);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__, _ToolsIcon__WEBPACK_IMPORTED_MODULE_9__]);
([_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__, _ToolsIcon__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











// change github data by sort fuctionality
const githubDataChange = (theme)=>{
    const getStar = theme.frontmatter.github_star ? theme.frontmatter.github_star : 0;
    const star = getStar < 1000 ? getStar : parseFloat(getStar / 1000).toFixed(1) + "k";
    const fork = theme.frontmatter.github_fork < 1000 ? theme.frontmatter.github_fork : parseFloat(theme.frontmatter.github_fork / 1000).toFixed(1) + "k";
    const updateDate = (0,_lib_utils_dateFormat__WEBPACK_IMPORTED_MODULE_1__/* .dateFormat */ .v)(theme.frontmatter.update_date ? theme.frontmatter.update_date : theme.frontmatter.date, "dd/MM/yy");
    const price = theme.frontmatter.price ? theme.frontmatter.price : 0;
    if (theme.type === "fork") {
        return price ? price : fork;
    } else if (theme.type === "update") {
        return updateDate;
    } else if (theme.type === "price") {
        return price;
    } else {
        return price ? price : star;
    }
};
const Themes = ({ themes , tools , customRowClass , customColClass  })=>{
    const { 0: item , 1: setItem  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(4);
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(themes.slice(0, item));
    // getWindowDimensions
    const { 0: windowSize , 1: setWindowSize  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(768);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        function showViewport() {
            var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            setWindowSize(width);
        }
        showViewport();
        window.onresize = showViewport;
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        setItem(windowSize < 768 ? 4 : 20);
    }, [
        windowSize
    ]);
    const fetchData = ()=>{
        setItem(item + 20);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        setPage(themes.slice(0, item));
    }, [
        item,
        themes
    ]);
    // tooltip
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        var tooltipEl = document.querySelectorAll(".has-tooltip");
        if (tooltipEl) {
            var tooltipItems = document.querySelectorAll(".tooltip-label");
            tooltipItems.forEach((item)=>{
                item.remove();
            });
            var length = tooltipEl.length;
            for(var i = 0; i < length; i++){
                var attr = tooltipEl[i].getAttribute("data-tooltip");
                var x = document.createElement("SPAN");
                var t = document.createTextNode(attr);
                x.appendChild(t);
                x.className = "tooltip-label";
                tooltipEl[i].appendChild(x);
            }
        }
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_7___default()), {
        dataLength: page.length,
        next: fetchData,
        hasMore: true,
        className: customRowClass ? customRowClass : "row !overflow-hidden py-4",
        children: page.map((theme)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: customColClass ? customColClass : "mb-8 sm:col-6 xl:col-4 2xl:col-3",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "theme-card",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                            href: `/themes/${theme.slug}`,
                            passHref: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "img-cover",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageFallback__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    src: `/themes/${theme.slug}.png`,
                                    fallback: `https://teamosis-sg.vercel.app/api/img?url=${theme.frontmatter.demo}`,
                                    height: 250,
                                    width: 300,
                                    alt: theme.frontmatter?.title,
                                    className: "rounded-t"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "theme-card-body",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "h6 mb-0 text-lg font-medium",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                href: `/themes/${theme.slug}`,
                                                passHref: true,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "line-clamp-1 hover:underline",
                                                    children: theme.frontmatter?.title
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "has-tooltip ml-2 mt-1 flex shrink-0 items-center whitespace-nowrap text-sm text-dark dark:text-white",
                                            "data-tooltip": (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .humanize */ .OI)(theme.frontmatter.price > 0 && theme.type != "update" ? "Price" : theme.type ? theme.type : "Star"),
                                            children: [
                                                theme.type === "price" ? githubDataChange(theme) !== 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_future_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    className: "mr-1 inline max-h-[14px] align-text-bottom dark:invert",
                                                    src: `/images/icons/${theme.frontmatter.price > 0 && theme.type != "update" ? "price" : theme.type ? theme.type : "star"}.svg`,
                                                    alt: "github icon",
                                                    height: "14",
                                                    width: "14"
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_future_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    className: "mr-1 inline max-h-[14px] align-text-bottom dark:invert",
                                                    src: `/images/icons/${theme.frontmatter.price > 0 && theme.type != "update" ? "price" : theme.type ? theme.type : "star"}.svg`,
                                                    alt: "github icon",
                                                    height: "14",
                                                    width: "14"
                                                }),
                                                theme.type === "price" ? githubDataChange(theme) !== 0 ? githubDataChange(theme) : "Free" : githubDataChange(theme)
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "text-xs text-dark dark:text-light",
                                    children: [
                                        "by",
                                        " ",
                                        theme.frontmatter?.author === "EarthyResources" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/theme-by-us",
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "bg-gradient-to-r from-primary to-secondary bg-clip-text font-bold text-transparent",
                                                children: "EarthyResources"
                                            })
                                        }) : theme.frontmatter?.author ? (theme.frontmatter?.author) : theme.frontmatter?.github.match(/github\.com\/([^\/]+)/, "")[0]
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "theme-card-footer",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex-wrap",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ToolsIcon__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        tools: tools,
                                        type: (0,_lib_utils_toolsArray__WEBPACK_IMPORTED_MODULE_10__/* .toolsArray */ .A)(theme),
                                        themeCard: true
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "ml-auto flex items-center whitespace-nowrap",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: `/demo/${theme.slug}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "btn btn-sm btn-demo svg-block mb-2 mr-1 leading-none",
                                                target: "_blank",
                                                rel: "noopener nofollow",
                                                "data-tooltip": "Preview",
                                                "aria-label": "Preview Theme",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_tb__WEBPACK_IMPORTED_MODULE_6__.TbEye, {})
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: `${theme.frontmatter.github ? theme.frontmatter.github : theme.frontmatter.download}?ref=statichunt.com`,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                className: "btn btn-sm btn-download svg-align-bottom mb-2 pr-2 leading-none",
                                                target: "_blank",
                                                rel: "noopener nofollow",
                                                "data-tooltip": "Download",
                                                "aria-label": "Download Theme",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "mr-1 hidden lg:inline",
                                                        children: "Get"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_tb__WEBPACK_IMPORTED_MODULE_6__.TbDownload, {})
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }, theme.slug))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Themes);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5690:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6626);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3312);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7285);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_future_image__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__]);
_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const ToolsIcon = ({ tools , type , size , themeCard  })=>{
    const { darkIconList  } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__;
    const filteredTools = tools.filter((data)=>type?.map((tool)=>(0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .slugify */ .lV)(tool)).includes((0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .slugify */ .lV)(data.frontmatter.title)));
    const toolsLength = filteredTools.length;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: type && (themeCard ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                toolsLength === 4 ? filteredTools.map((icon, i)=>i < 4 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "has-tooltip mr-3 mb-2",
                        "data-tooltip": icon.frontmatter.title,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_future_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            width: size ? size : 18,
                            height: size ? size : 18,
                            alt: icon.frontmatter.title,
                            src: icon.frontmatter.icon,
                            style: {
                                maxHeight: size ? size : "18px"
                            },
                            className: darkIconList.includes((0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .slugify */ .lV)(icon.frontmatter.title)) ? "dark:invert" : ""
                        })
                    }, `icon-${i}`)) : toolsLength >= 4 ? filteredTools.map((icon, i)=>i < 3 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "has-tooltip mr-3 mb-2",
                        "data-tooltip": icon.frontmatter.title,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_future_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            width: size ? size : 18,
                            height: size ? size : 18,
                            alt: icon.frontmatter.title,
                            src: icon.frontmatter.icon,
                            style: {
                                maxHeight: size ? size : "18px"
                            },
                            className: darkIconList.includes((0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .slugify */ .lV)(icon.frontmatter.title)) ? "dark:invert" : ""
                        })
                    }, `icon-${i}`)) : filteredTools.map((icon, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "has-tooltip mr-3 mb-2",
                        "data-tooltip": icon.frontmatter.title,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_future_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            width: size ? size : 18,
                            height: size ? size : 18,
                            alt: icon.frontmatter.title,
                            src: icon.frontmatter.icon,
                            style: {
                                maxHeight: size ? size : "18px"
                            },
                            className: darkIconList.includes((0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .slugify */ .lV)(icon.frontmatter.title)) ? "dark:invert" : ""
                        })
                    }, `icon-${i}`)),
                filteredTools.length >= 5 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: "has-tooltip-static mr-3 mb-2",
                    children: [
                        "+ ",
                        filteredTools.length - 3,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "tooltip-label-static",
                            children: filteredTools.slice(3).map((icon, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: icon.frontmatter.title
                                }, i))
                        })
                    ]
                })
            ]
        }) : filteredTools.map((icon, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "has-tooltip mr-3 mb-2",
                "data-tooltip": icon.frontmatter.title,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_future_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                    width: size ? size : 18,
                    height: size ? size : 18,
                    alt: icon.frontmatter.title,
                    src: icon.frontmatter.icon,
                    style: {
                        maxHeight: size ? size : "18px"
                    },
                    className: darkIconList.includes((0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .slugify */ .lV)(icon.frontmatter.title)) ? "dark:invert" : ""
                })
            }, `icon-${i}`)))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToolsIcon);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ dateFormat)
/* harmony export */ });
/* harmony import */ var date_fns_tz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5465);
/* harmony import */ var date_fns_tz__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns_tz__WEBPACK_IMPORTED_MODULE_0__);

const dateFormat = (date, format)=>{
    return (0,date_fns_tz__WEBPACK_IMPORTED_MODULE_0__.formatInTimeZone)(date, "America/New_York", format ? format : "dd MMM yyyy");
};


/***/ }),

/***/ 824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ toolsArray)
/* harmony export */ });
const toolsArray = (theme)=>{
    var tags = [];
    if (theme.frontmatter?.tags) {
        tags = theme.frontmatter?.tags;
    }
    var making = [];
    if (theme.frontmatter?.making) {
        making = theme.frontmatter?.making;
    }
    var learning = [];
    if (theme.frontmatter?.learning) {
        learning = theme.frontmatter?.learning;
    }
    var appreciating = [];
    if (theme.frontmatter?.appreciating) {
        appreciating = theme.frontmatter?.appreciating;
    }
    const tool = [
        ...making,
        ...learning,
        ...appreciating,
        ...tags
    ];
    return tool;
};


/***/ })

};
;