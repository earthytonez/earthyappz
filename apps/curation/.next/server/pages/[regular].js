"use strict";
(() => {
var exports = {};
exports.id = 493;
exports.ids = [493];
exports.modules = {

/***/ 8613:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3312);
/* harmony import */ var _components_MobileSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9841);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__]);
_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Default = ({ data  })=>{
    const { frontmatter , content  } = data[0];
    const { title  } = frontmatter;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MobileSidebar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "section",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row justify-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "sm:col-10 md:col-9 lg:col-7",
                            children: [
                                (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__/* .markdownify */ .gI)(title, "h1", "mb-8"),
                                (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__/* .markdownify */ .gI)(content, "div", "content")
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Default);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5071:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Resources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4860);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3312);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Resources__WEBPACK_IMPORTED_MODULE_1__, _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__]);
([_components_Resources__WEBPACK_IMPORTED_MODULE_1__, _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const ResourceTaxonomy = ({ data , taxonomies  })=>{
    const { frontmatter  } = taxonomies[0];
    const { title , page_title  } = frontmatter;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "section",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row mb-8 justify-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "xl:col-10",
                        children: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .markdownify */ .gI)(page_title || title, "h1")
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Resources__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    resources: data
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResourceTaxonomy);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3085:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3312);
/* harmony import */ var _components_Themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5514);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__, _components_Themes__WEBPACK_IMPORTED_MODULE_2__]);
([_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__, _components_Themes__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const ThemeByUs = ({ statichuntThemes , tools , data  })=>{
    const { frontmatter , content  } = data[0];
    const { title  } = frontmatter;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "section",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row mb-8 justify-center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-10 text-center",
                        children: [
                            (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__/* .markdownify */ .gI)(title, "h1", "mb-8"),
                            (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__/* .markdownify */ .gI)(content, "div", "content")
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Themes__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    themes: statichuntThemes,
                    tools: tools
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeByUs);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5500:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5514);
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6626);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3312);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7285);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_future_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4152);
/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_tb__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Themes__WEBPACK_IMPORTED_MODULE_1__, _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_3__]);
([_components_Themes__WEBPACK_IMPORTED_MODULE_1__, _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const { darkIconList  } = _config_config_json__WEBPACK_IMPORTED_MODULE_2__;
const ThemeTaxonomy = ({ data , taxonomies , tools , isIntro  })=>{
    const { frontmatter , content  } = taxonomies[0];
    const { title , page_title , icon , website , github_path , twitter_username , license , license_url , language ,  } = frontmatter;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        className: "main",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `mb-16 p-6 shadow ${!isIntro && "hidden"}`,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mb-5 flex",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_future_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        className: `${darkIconList.includes((0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_3__/* .slugify */ .lV)(title)) ? "dark:invert" : ""} mr-3`,
                                        src: icon,
                                        alt: `${title} icon`,
                                        height: "40",
                                        width: "40"
                                    }),
                                    (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_3__/* .markdownify */ .gI)(page_title || title, "h1", "self-end")
                                ]
                            }),
                            (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_3__/* .markdownify */ .gI)(content, "p", "mb-5"),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "meta-list",
                                children: [
                                    website && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        title: "Official Website",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_tb__WEBPACK_IMPORTED_MODULE_5__.TbHome, {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                href: website,
                                                children: website
                                            })
                                        ]
                                    }),
                                    github_path && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        title: "GitHub Repository",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_tb__WEBPACK_IMPORTED_MODULE_5__.TbBrandGithub, {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                href: `https://github.com/${github_path}`,
                                                children: github_path
                                            })
                                        ]
                                    }),
                                    twitter_username && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        title: "Twitter Profile",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_tb__WEBPACK_IMPORTED_MODULE_5__.TbBrandTwitter, {}),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                href: `https://twitter.com/${twitter_username}`,
                                                children: [
                                                    "@",
                                                    twitter_username
                                                ]
                                            })
                                        ]
                                    }),
                                    license && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        title: "License",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_tb__WEBPACK_IMPORTED_MODULE_5__.TbLicense, {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                href: license_url,
                                                children: license
                                            })
                                        ]
                                    }),
                                    language && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        title: "Language",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_tb__WEBPACK_IMPORTED_MODULE_5__.TbCode, {}),
                                            language
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Themes__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        themes: data,
                        tools: tools
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeTaxonomy);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3878:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3312);
/* harmony import */ var config_sort_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8071);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7285);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_future_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__]);
_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const SortSidebar = ({ isShow , isValue , handleSortTheme , handleClick  })=>{
    const { button  } = config_sort_json__WEBPACK_IMPORTED_MODULE_2__;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mb-8",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                onClick: handleClick,
                className: "mb-2 flex cursor-pointer items-center justify-between py-1 pl-0 font-primary text-h6 font-medium lg:pl-3",
                children: [
                    "Sort by",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "mr-2 inline-block align-middle",
                        children: !isShow ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__.IoChevronDownOutline, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__.IoChevronForwardOutline, {})
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `sort-sidebar-buttons ${!isShow && "show"}`,
                children: button.map((button, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        className: isValue === button.value ? "active" : undefined,
                        value: button.value,
                        onClick: (e)=>handleSortTheme(e, button.type),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_future_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                src: button.icon,
                                alt: button.value,
                                height: "17",
                                width: "17",
                                className: "mx-2 max-h-[17px] dark:invert"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "dark:invert",
                                children: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__/* .humanize */ .OI)(button.value)
                            })
                        ]
                    }, `button-${i}`))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SortSidebar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59:
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
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1918);
/* harmony import */ var _components_SortSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3878);
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6626);
/* harmony import */ var _hooks_setOthersCategory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5467);
/* harmony import */ var _hooks_sortReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(363);
/* harmony import */ var _layouts_Baseof__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2033);
/* harmony import */ var _layouts_Default__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8613);
/* harmony import */ var _layouts_ResourceTaxonomy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5071);
/* harmony import */ var _layouts_ThemeByUs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3085);
/* harmony import */ var _layouts_ThemeTaxonomy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5500);
/* harmony import */ var _lib_contentParser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3685);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3312);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__, _components_SortSidebar__WEBPACK_IMPORTED_MODULE_3__, _layouts_Baseof__WEBPACK_IMPORTED_MODULE_6__, _layouts_Default__WEBPACK_IMPORTED_MODULE_7__, _layouts_ResourceTaxonomy__WEBPACK_IMPORTED_MODULE_8__, _layouts_ThemeByUs__WEBPACK_IMPORTED_MODULE_9__, _layouts_ThemeTaxonomy__WEBPACK_IMPORTED_MODULE_10__, _lib_contentParser__WEBPACK_IMPORTED_MODULE_11__, _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_12__]);
([_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__, _components_SortSidebar__WEBPACK_IMPORTED_MODULE_3__, _layouts_Baseof__WEBPACK_IMPORTED_MODULE_6__, _layouts_Default__WEBPACK_IMPORTED_MODULE_7__, _layouts_ResourceTaxonomy__WEBPACK_IMPORTED_MODULE_8__, _layouts_ThemeByUs__WEBPACK_IMPORTED_MODULE_9__, _layouts_ThemeTaxonomy__WEBPACK_IMPORTED_MODULE_10__, _lib_contentParser__WEBPACK_IMPORTED_MODULE_11__, _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















// for all regular pages
const RegularPages = ({ slug , data , ssgSlug: ssgSlug1 , taxonomies , tools , category , toolSlug , resources , statichuntThemes ,  })=>{
    const { title , meta_title , description , image , noindex , canonical  } = taxonomies[0]?.frontmatter;
    const { sidebar  } = _config_config_json__WEBPACK_IMPORTED_MODULE_4__;
    const { content  } = taxonomies[0];
    const { 0: arrayCategory , 1: setArrayCategory  } = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)([]);
    const { 0: isIntro , 1: setIsIntro  } = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(true);
    const getCategories = (0,_hooks_setOthersCategory__WEBPACK_IMPORTED_MODULE_14__/* .setOthersCategory */ .b)(data);
    const { currentTheme , handleSortTheme , isShow , isValue , defaultSort , handleClick ,  } = (0,_hooks_sortReducer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(getCategories, true, slug);
    (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(()=>{
        setArrayCategory([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        slug
    ]);
    const filterCategory = currentTheme.filter((theme)=>arrayCategory.length ? arrayCategory.find((type)=>theme.frontmatter.category?.map((category)=>(0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_12__/* .slugify */ .lV)(category)).includes((0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_12__/* .slugify */ .lV)(type))) : defaultSort);
    // change others position
    const indexOfOthers = category.map((data)=>data.slug).indexOf("others");
    const element = category.splice(indexOfOthers, 1)[0];
    category.splice(category.length, 0, element);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_Baseof__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        title: title,
        description: description ? description : content.slice(0, 120),
        meta_title: meta_title,
        image: image,
        noindex: noindex,
        canonical: canonical,
        children: ssgSlug1.includes(slug) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    sidebar: sidebar,
                    themes: getCategories,
                    slug: slug,
                    category: category,
                    setArrayCategory: setArrayCategory,
                    arrayCategory: arrayCategory,
                    setIsIntro: setIsIntro,
                    isIntro: isIntro,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SortSidebar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        isShow: isShow,
                        isValue: isValue,
                        handleSortTheme: handleSortTheme,
                        handleClick: handleClick
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_ThemeTaxonomy__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    taxonomies: taxonomies,
                    data: filterCategory,
                    tools: tools,
                    isIntro: isIntro
                })
            ]
        }) : toolSlug.includes(slug) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MobileSidebar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_ResourceTaxonomy__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    data: resources,
                    taxonomies: taxonomies
                })
            ]
        }) : slug === "theme-by-us" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_ThemeByUs__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            statichuntThemes: statichuntThemes,
            tools: tools,
            data: data
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_Default__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            data: data
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegularPages);
// for regular page routes
const getStaticPaths = async ()=>{
    const slugs = (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_11__/* .getRegularPageSlug */ .GI)();
    const paths = slugs.map((slug)=>({
            params: {
                regular: slug
            }
        }));
    return {
        paths,
        fallback: false
    };
};
// for regular page data
const getStaticProps = async ({ params  })=>{
    const { regular  } = params;
    const making = (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_11__/* .getSinglePages */ .Gl)("content/making");
    const learning = (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_11__/* .getSinglePages */ .Gl)("content/learning");
    const appreciating = (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_11__/* .getSinglePages */ .Gl)("content/appreciating");
    const tool = (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_11__/* .getSinglePages */ .Gl)("content/tool");
    const toolPage = tool.filter((data)=>data.slug === regular);
    // taxonomy slug
    const makingSlug = (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_11__/* .getSinglePagesSlug */ .YC)("content/making");
    const learningSlug = (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_11__/* .getSinglePagesSlug */ .YC)("content/learning");
    const appreciatingSlug = (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_11__/* .getSinglePagesSlug */ .YC)("content/appreciating");
    const toolSlug = (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_11__/* .getSinglePagesSlug */ .YC)("content/tool");
    // taxonomy page data
    const singleListPage = ssg.length && ssg.filter((page)=>page.frontmatter.url ? page.frontmatter?.url === `/${regular}` : page.slug === regular);
    const allThemes = await (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_11__/* .getRegularPage */ .bk)(singleListPage.length ? (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_12__/* .slugify */ .lV)(singleListPage[0]?.frontmatter.title) : regular);
    // tool page
    const allResources = (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_11__/* .getSinglePages */ .Gl)("content/resources");
    const singleToolPage = tool.length && tool.filter((page)=>page.frontmatter.url ? page.frontmatter?.url === `/${regular}` : page.slug === regular);
    const singleResources = allResources.filter((data)=>data.frontmatter.tool.map((tool)=>(0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_12__/* .slugify */ .lV)(tool)).includes((0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_12__/* .slugify */ .lV)(singleToolPage[0]?.frontmatter.title)));
    // layout filtering
    const filterByLayout = (layout)=>{
        const layoutFilter = allThemes.filter((data)=>data.frontmatter.layout === layout);
        return layoutFilter;
    };
    const aboutPage = filterByLayout("about");
    const defaultPage = filterByLayout("default");
    const statichunt = filterByLayout("theme-by-us");
    // taxonomies data
    const taxonomies = statichunt.length ? statichunt : aboutPage.length ? aboutPage : singleListPage.length ? singleListPage : toolPage.length ? toolPage : defaultPage;
    // all taxonomies
    const category = (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_11__/* .getSinglePages */ .Gl)("content/category");
    const tools = [
        ...ssg,
        ...cms,
        ...css,
        ...category
    ];
    // all themes
    const themes = (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_11__/* .getSinglePages */ .Gl)("content/themes");
    // statichunt themes
    const statichuntThemes = themes.filter((theme)=>theme.frontmatter.author === "EarthyResources");
    return {
        props: {
            slug: regular,
            data: allThemes,
            ssgSlug: ssgSlug,
            taxonomies: taxonomies,
            tools: tools,
            resources: singleResources,
            category: category,
            themes: themes,
            toolSlug: toolSlug,
            allResources: allResources,
            statichuntThemes: statichuntThemes
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [470,862,789,626,642,33,685,514,918,860,400,841], () => (__webpack_exec__(59)));
module.exports = __webpack_exports__;

})();