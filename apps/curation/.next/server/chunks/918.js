"use strict";
exports.id = 918;
exports.ids = [918];
exports.modules = {

/***/ 9028:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__]);
_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Accordion = ({ data , slug , type , params , themes , arrayMaking , setArrayMaking , arrayLearning , setArrayLearning , arrayAppreciating , setArrayAppreciating , arrayTags , setArrayTags , arrayCategory , setArrayCategory , arrayTool , setArrayTool , setIsIntro ,  })=>{
    const { 0: taxonomy , 1: setTaxonomy  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(type);
    const { darkIconList  } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__;
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        const filterAddition = taxonomy.map((item, id)=>({
                ...item,
                selected: false
            }));
        setTaxonomy(filterAddition);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        slug
    ]);
    //  sorting texonomy
    // const sortedTaxonomy = taxonomySorted(taxonomy);
    // const loadMore = () => {
    //   setnoOfElements(sortedTaxonomy.length);
    //   setReadMore(true);
    // };
    // const loadLess = () => {
    //   setnoOfElements(4);
    //   setReadMore(false);
    // };
    const handleOnClick = (label, type)=>{
        // scroll to top
        window.scrollTo({
            top: 0
        });
        // set active state
        const temp = [
            ...taxonomy
        ];
        for(let i in temp){
            const item = temp[i];
            if ((0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .slugify */ .lV)(item.frontmatter.title) === label) {
                item.selected = !item.selected;
            }
        }
        setTaxonomy(temp);
        // set making array
        if (type === "making") {
            if (arrayMaking.includes(label)) {
                setArrayMaking(arrayMaking.filter((x)=>x !== label));
            } else {
                setArrayMaking((prevValue)=>[
                        ...prevValue,
                        label
                    ]);
            }
        }
        // set making array
        if (type === "learning") {
            if (arrayLearning.includes(label)) {
                setArrayLearning(arrayLearning.filter((x)=>x !== label));
            } else {
                setArrayLearning((prevValue)=>[
                        ...prevValue,
                        label
                    ]);
            }
        }
        // set making array
        if (type === "appreciating") {
            if (arrayAppreciating.includes(label)) {
                setArrayAppreciating(arrayAppreciating.filter((x)=>x !== label));
            } else {
                setArrayAppreciating((prevValue)=>[
                        ...prevValue,
                        label
                    ]);
            }
        }
        // set tags array
        if (type === "tags") {
            if (arrayTags.includes(label)) {
                setArrayTags(arrayTags.filter((x)=>x !== label));
            } else {
                setArrayTags((prevValue)=>[
                        ...prevValue,
                        label
                    ]);
            }
        }
        // set category array
        if (type === "category") {
            if (arrayCategory.includes(label)) {
                setArrayCategory(arrayCategory.filter((x)=>x !== label));
            } else {
                setArrayCategory((prevValue)=>[
                        ...prevValue,
                        label
                    ]);
            }
        }
    };
    // hide intro function
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (setIsIntro) {
            if (arrayMaking?.length > 0 || arrayLearning?.length > 0 || arrayAppreciating?.length > 0 || arrayCategory?.length > 0 || arrayTags?.length > 0) {
                setIsIntro(false);
            } else {
                setIsIntro(true);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        arrayMaking?.length,
        arrayLearning?.length,
        arrayAppreciating?.length,
        arrayCategory?.length,
        arrayTags?.length, 
    ]);
    // category items count
    const countItems = (params, item)=>themes.filter((theme)=>theme.frontmatter[params]?.map((theme)=>(0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .slugify */ .lV)(theme)).includes((0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .slugify */ .lV)(item.frontmatter.title))).length;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: data.selected && data.type === params && taxonomy.map((item, i)=>countItems(params, item) > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                onClick: ()=>handleOnClick((0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .slugify */ .lV)(item.frontmatter.title), data.type),
                className: `filter-list ${item.selected && "active"}`,
                style: {
                    order: item.frontmatter.weight || "100"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_future_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                        className: `${darkIconList.includes((0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .slugify */ .lV)(item.frontmatter.title)) ? "dark:invert" : ""} ml-2`,
                        src: item.frontmatter.icon,
                        height: 18,
                        width: 18,
                        alt: item.frontmatter.title,
                        style: {
                            maxHeight: "18px"
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "ml-2 block",
                        children: [
                            " ",
                            item.frontmatter.title
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "ml-auto",
                        children: countItems(params, item)
                    })
                ]
            }, `item-${i}`))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordion);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1918:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_menu_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9012);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3312);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9678);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9028);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__, _Accordion__WEBPACK_IMPORTED_MODULE_6__]);
([_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__, _Accordion__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Sidebar = ({ sidebar , slug , makingmusic , aesthetic , tags , category , tool , themes , arrayMaking , setArrayMaking , arrayLearning , setArrayLearning , arrayAppreciating , setArrayAppreciating , arrayTags , setArrayTags , arrayCategory , setArrayCategory , arrayTool , setArrayTool , setIsIntro , children , isIntro ,  })=>{
    const { main  } = _config_menu_json__WEBPACK_IMPORTED_MODULE_1__;
    const { 0: sidebarData , 1: setSidebarData  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(sidebar);
    const { 0: isSidebarOpen , 1: setIsSidebarOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    // getWindowDimensions
    const { 0: windowSize , 1: setWindowSize  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1000);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        function showViewport() {
            var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            setWindowSize(width);
        }
        showViewport();
        window.onresize = showViewport;
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        const filterAddition = sidebar.map((item, id)=>({
                ...item,
                selected: windowSize < 1024 ? false : true,
                taxonomy: item.type == "makingmusic" ? makingmusic : item.type == "aesthetic" ? aesthetic : item.type == "tags" ? tags : item.type == "category" ? category : tool
            }));
        setSidebarData(filterAddition);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        windowSize
    ]);
    const handleOnClick = (label)=>{
        const temp = [
            ...sidebarData
        ];
        for(let i in temp){
            const item = temp[i];
            if (item.title === label) {
                item.selected = !item.selected;
            }
        }
        setSidebarData(temp);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "sidebar-toggler mr-lg-0 d-block fixed !top-[1rem] left-[0.75rem] mr-3 sm:left-[2rem] lg:hidden",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                    className: `sidebar-toggle-icon ${isSidebarOpen ? "active" : ""}`,
                    viewBox: "0 0 100 100",
                    width: "35",
                    onClick: ()=>setIsSidebarOpen(!isSidebarOpen),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            className: "line top",
                            d: "m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            className: "line middle",
                            d: "m 70,50 h -40"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            className: "line bottom",
                            d: "m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `sidebar-overlay ${isSidebarOpen ? "show" : ""}`,
                onClick: ()=>setIsSidebarOpen(false)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
                className: `sidebar ${isSidebarOpen ? "show" : ""}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "accordion",
                        children: sidebarData.map((data, i)=>data.taxonomy && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mb-3 lg:mb-5",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                        className: `mb-2 flex cursor-pointer items-center justify-between py-1 pl-0 font-primary text-h6 font-medium lg:pl-3`,
                                        onClick: ()=>handleOnClick(data.title),
                                        children: [
                                            data.title,
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "mr-2 inline-block align-middle",
                                                children: data.selected ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__.IoChevronDownOutline, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__.IoChevronForwardOutline, {})
                                            })
                                        ]
                                    }),
                                    data.taxonomy && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "lh:mb-8 relative mb-3 flex flex-col",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Accordion__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            setArrayMaking: setArrayMaking,
                                            arrayMaking: arrayMaking,
                                            setArrayLearning: setArrayLearning,
                                            arrayLearning: arrayLearning,
                                            setArrayAppreciating: setArrayAppreciating,
                                            arrayAppreciating: arrayAppreciating,
                                            data: data,
                                            slug: slug,
                                            type: data.taxonomy,
                                            params: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .slugify */ .lV)(data.type),
                                            themes: themes,
                                            setArrayTags: setArrayTags,
                                            arrayTags: arrayTags,
                                            setArrayCategory: setArrayCategory,
                                            arrayCategory: arrayCategory,
                                            setArrayTool: setArrayTool,
                                            arrayTool: arrayTool,
                                            setIsIntro: setIsIntro,
                                            isIntro: isIntro
                                        })
                                    })
                                ]
                            }, `accordion-${i}`))
                    }),
                    children && children,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: "sidebar-main-menu block border-t-2 py-4 dark:border-t-darkmode-theme-light lg:hidden",
                        children: main.map((menu, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: menu.url,
                                    passHref: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "inline-block py-2 text-black transition-all duration-150 hover:text-primary dark:text-white dark:hover:text-darkmode-primary",
                                        children: menu.name
                                    })
                                })
                            }, `menu-${i}`))
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;