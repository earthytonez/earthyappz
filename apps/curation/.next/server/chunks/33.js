"use strict";
exports.id = 33;
exports.ids = [33];
exports.modules = {

/***/ 2033:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6626);
/* harmony import */ var _layouts_partials_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2006);
/* harmony import */ var _layouts_partials_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4227);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3312);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5771);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_CookieConsent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3380);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_partials_Footer__WEBPACK_IMPORTED_MODULE_2__, _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_4__]);
([_layouts_partials_Footer__WEBPACK_IMPORTED_MODULE_2__, _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





 // npm install @loadable/component
 // import stylesheet




const Feedback = _loadable_component__WEBPACK_IMPORTED_MODULE_5___default()(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 9785, 23))); // dynamically load Feedback component
const Base = ({ title , meta_title , description , image , noindex , canonical , children ,  })=>{
    // meta data
    const { meta_image , meta_author , meta_description  } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__.metadata;
    const { base_url  } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__.site;
    const { feeder_id  } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__.params;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    // tooltip
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
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
    // scroll to top
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        window.addEventListener("scroll", function() {
            var scrollArrow = document.querySelector(".scroll-to-position");
            var feedbackBlock = document.querySelector(".feedback-block");
            if (window.pageYOffset > 150) {
                scrollArrow.classList.add("visible");
                feedbackBlock.classList.add("visible");
            } else if (window.pageYOffset < 150) {
                scrollArrow.classList.remove("visible");
                feedbackBlock.classList.remove("visible");
            }
        }, false);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_4__/* .plainify */ .ab)(meta_title ? meta_title : title ? title : _config_config_json__WEBPACK_IMPORTED_MODULE_1__.site.title)
                    }),
                    canonical && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "canonical",
                        href: canonical,
                        itemProp: "url"
                    }),
                    noindex && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "robots",
                        content: "noindex,nofollow"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_4__/* .plainify */ .ab)(description ? description : meta_description)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "author",
                        content: meta_author
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_4__/* .plainify */ .ab)(meta_title ? meta_title : title ? title : _config_config_json__WEBPACK_IMPORTED_MODULE_1__.site.title)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_4__/* .plainify */ .ab)(description ? description : meta_description)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:url",
                        content: `${base_url}/${router.asPath.replace("/", "")}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:title",
                        content: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_4__/* .plainify */ .ab)(meta_title ? meta_title : title ? title : _config_config_json__WEBPACK_IMPORTED_MODULE_1__.site.title)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:description",
                        content: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_4__/* .plainify */ .ab)(description ? description : meta_description)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: `${base_url}${image ? image : meta_image}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:image",
                        content: `${base_url}${image ? image : meta_image}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_partials_Header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_partials_Footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CookieConsent__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
            feeder_id && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "feedback-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Feedback, {
                    classList: "hidden",
                    projectId: feeder_id,
                    feedbackTypes: [
                        "bug",
                        "idea"
                    ],
                    email: true,
                    emailRequired: true,
                    primaryColor: "#059669",
                    hoverBorderColor: "#059669"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "scroll-to-position",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "scroll-to-top show",
                    type: "button",
                    "aria-label": "Scroll to Top",
                    onClick: ()=>window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth"
                        }),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "icon icon-tabler icon-tabler-chevron-up",
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                points: "6 15 12 9 18 15"
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Base);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8789);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7945);
/* harmony import */ var react_use_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_use_cookie__WEBPACK_IMPORTED_MODULE_3__);




const CookieConsent = ()=>{
    // cookie bar
    const [cookieAccept, setCookieAccept] = react_use_cookie__WEBPACK_IMPORTED_MODULE_3___default()("cookieAccept", false);
    const { 0: cookieAcceptState , 1: setCookieAcceptState  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    // first visit detection
    const [firstVisit, setFirstVisit] = react_use_cookie__WEBPACK_IMPORTED_MODULE_3___default()("firstVisit", false);
    const { 0: firstVisitState , 1: setFirstVisitState  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    // bookmark
    const [bookmarkAccept, setBookmarkAccept] = react_use_cookie__WEBPACK_IMPORTED_MODULE_3___default()("bookmarkAccept", false);
    const { 0: bookmarkAcceptState , 1: setBookmarkAcceptState  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    // zoom bookmarkbar
    const { 0: zoom , 1: setZoom  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const { 0: bookmarkText , 1: setBookmarkText  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    // cookie check from browser
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        // get cookie accept state
        setCookieAcceptState((0,react_use_cookie__WEBPACK_IMPORTED_MODULE_3__.getCookie)("cookieAccept"));
        // get first visit state
        setFirstVisitState((0,react_use_cookie__WEBPACK_IMPORTED_MODULE_3__.getCookie)("firstVisit"));
    }, [
        cookieAccept,
        firstVisit
    ]);
    // cookie check from browser
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        // get bookmark accept state
        setBookmarkAcceptState((0,react_use_cookie__WEBPACK_IMPORTED_MODULE_3__.getCookie)("bookmarkAccept"));
    }, [
        bookmarkAccept
    ]);
    // cookie handler
    const cookieHandler = ()=>{
        setCookieAccept(true, {
            days: 150,
            SameSite: "Strict",
            Secure: true
        });
        setFirstVisit(true, {
            days: 1,
            SameSite: "Strict",
            Secure: true
        });
    };
    // bookmarkbar handler
    const bookmarkBarHandler = ()=>{
        if (zoom <= 2) {
            setZoom((prev)=>prev + 0.2);
        }
        setBookmarkText(true);
    };
    // bookmark cookie handler
    const bookmarkHandler = ()=>{
        setBookmarkAccept(true, {
            days: 365,
            SameSite: "Strict",
            Secure: true
        });
    };
    // detect OS
    const { 0: os , 1: setOs  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: key , 1: setKey  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setOs(navigator.platform.indexOf("Mac") > -1);
        document.addEventListener("keydown", (e)=>{
            if (os && e.metaKey && e.key === "d") {
                bookmarkHandler();
            } else if (e.ctrlKey && e.key === "d") {
                bookmarkHandler();
            }
        });
        if (os) {
            setKey("⌘+D");
        } else {
            setKey("Ctrl+D");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        os
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `cookieBar ${cookieAcceptState && "hidden"}`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "cookieBarContent",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "mr-2 mt-1 hidden sm:inline-block",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    alt: "cookie",
                                    src: "/images/cookie.png",
                                    height: "30",
                                    width: "30"
                                })
                            }),
                            "This website uses cookies"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "cookieBarBtn",
                        onClick: cookieHandler,
                        children: "Accept"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                onClick: bookmarkBarHandler,
                className: `bookmarkBar ${cookieAcceptState && !firstVisitState && !bookmarkAcceptState && "flex"} `,
                style: {
                    transform: `scale(${zoom})`
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bookmarkIcon",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            alt: "pin",
                            src: "/images/pin.svg",
                            height: "25",
                            width: "32"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                children: bookmarkText ? "Use Your Keyboard" : "Bookmark This Site"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                className: "block",
                                children: key
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        onClick: bookmarkHandler,
                        className: "bookmarkClose",
                        children: "\xd7"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CookieConsent);


/***/ }),

/***/ 8803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__);


const Social = ({ source , className  })=>{
    const { facebook , twitter , instagram , youtube , linkedin , github , gitlab , discord , medium , codepen , bitbucket , dribbble , behance , pinterest , soundcloud , tumblr , reddit , vk , whatsapp , snapchat , vimeo , tiktok , foursquare , rss , email , phone , address , skype , website ,  } = source;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        className: className,
        children: [
            facebook && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "facebook",
                    href: facebook,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoFacebook, {})
                })
            }),
            twitter && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "twitter",
                    href: twitter,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoTwitter, {})
                })
            }),
            instagram && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "instagram",
                    href: instagram,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoInstagram, {})
                })
            }),
            youtube && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "youtube",
                    href: youtube,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoYoutube, {})
                })
            }),
            linkedin && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "linkedin",
                    href: linkedin,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoLinkedin, {})
                })
            }),
            github && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "github",
                    href: github,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoGithub, {})
                })
            }),
            gitlab && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "gitlab",
                    href: gitlab,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoGitlab, {})
                })
            }),
            discord && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "discord",
                    href: discord,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoDiscord, {})
                })
            }),
            medium && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "medium",
                    href: medium,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoMedium, {})
                })
            }),
            codepen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "codepen",
                    href: codepen,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoCodepen, {})
                })
            }),
            bitbucket && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "bitbucket",
                    href: bitbucket,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoBitbucket, {})
                })
            }),
            dribbble && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "dribbble",
                    href: dribbble,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoDribbble, {})
                })
            }),
            behance && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "behance",
                    href: behance,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoBehance, {})
                })
            }),
            pinterest && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "pinterest",
                    href: pinterest,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoPinterest, {})
                })
            }),
            soundcloud && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "soundcloud",
                    href: soundcloud,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoSoundcloud, {})
                })
            }),
            tumblr && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "tumblr",
                    href: tumblr,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoTumblr, {})
                })
            }),
            reddit && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "reddit",
                    href: reddit,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoReddit, {})
                })
            }),
            vk && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "vk",
                    href: vk,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoVk, {})
                })
            }),
            whatsapp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "whatsapp",
                    href: whatsapp,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoWhatsapp, {})
                })
            }),
            snapchat && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "snapchat",
                    href: snapchat,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoSnapchat, {})
                })
            }),
            vimeo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "vimeo",
                    href: vimeo,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoVimeo, {})
                })
            }),
            tiktok && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "tiktok",
                    href: tiktok,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoTiktok, {})
                })
            }),
            foursquare && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "foursquare",
                    href: foursquare,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoFoursquare, {})
                })
            }),
            skype && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "skype",
                    href: skype,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoSkype, {})
                })
            }),
            website && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "website",
                    href: website,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoGlobeOutline, {})
                })
            }),
            rss && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "rss feed",
                    href: rss,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoRss, {})
                })
            }),
            email && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "email",
                    href: `mailto:${email}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoMail, {})
                })
            }),
            phone && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "telephone",
                    href: `tel:${phone}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoCall, {})
                })
            }),
            address && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "location",
                    href: address,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLocation, {})
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Social);


/***/ }),

/***/ 2006:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Social__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8803);
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6626);
/* harmony import */ var _config_menu_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9012);
/* harmony import */ var _config_social_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1639);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3312);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7285);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_future_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9678);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_5__]);
_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const Footer = ()=>{
    const { footer  } = _config_menu_json__WEBPACK_IMPORTED_MODULE_3__;
    const { site , params  } = _config_config_json__WEBPACK_IMPORTED_MODULE_2__;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: "section bg-theme-dark px-4 sm:px-10 xl:px-16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mb-12 border-b border-[#ffffff0f] pb-10",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row lg:justify-center",
                    children: footer.map((item, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `${i === 0 ? "col-12 sm:col-3 md:col-4 lg:col-2" : "col-12 sm:col-9 md:col-8 lg:col-4"} mb-5 pb-4 lg:mb-0 lg:pb-0`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "h5 mb-4 font-medium capitalize text-white",
                                    children: item.name
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    className: i != 0 ? "mr-4 columns-2" : undefined,
                                    children: item.pages.map((page, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "mb-2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                href: page.url,
                                                passHref: true,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "text-sm capitalize text-light hover:text-white",
                                                    rel: page.rel,
                                                    children: page.page
                                                })
                                            })
                                        }, `page-${i}`))
                                })
                            ]
                        }, `footer-menu-${i}`))
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row items-center lg:justify-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12 mb-3 md:col-5 lg:col-3 lg:mb-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                            href: "/",
                            passHref: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "inline-block",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_future_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    src: site.footer_logo,
                                    width: 180,
                                    height: 35,
                                    alt: "logo",
                                    layout: "fixed"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12 mb-4 md:col-7 lg:col-4 lg:mb-0",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "mr-3 inline-block text-sm text-white",
                                    children: "Connect with us :"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Social__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                    source: _config_social_json__WEBPACK_IMPORTED_MODULE_4__,
                                    className: "social-icons inline-block"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12 lg:col-3",
                        children: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_5__/* .markdownify */ .gI)(params.copyright, "p", "text-white text-sm")
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ partials_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./layouts/components/Logo.js
var Logo = __webpack_require__(2492);
// EXTERNAL MODULE: ./config/config.json
var config = __webpack_require__(6626);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./layouts/components/ThemeSwitcher.js




const ThemeSwitcher = ()=>{
    const { theme_switcher  } = config.settings;
    const { 0: mounted , 1: setMounted  } = (0,external_react_.useState)(false);
    const { theme , setTheme , resolvedTheme  } = (0,external_next_themes_.useTheme)();
    (0,external_react_.useEffect)(()=>setMounted(true), []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: theme_switcher && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
            "aria-label": "Toggle Theme",
            type: "button",
            className: `theme-switcher hidden sm:inline-flex md:mr-3 ${mounted && (theme === "dark" || resolvedTheme === "dark") ? "after:left-[29px]" : "after:left-[5px]"}`,
            onClick: ()=>setTheme(theme === "dark" || resolvedTheme === "dark" ? "light" : "dark"),
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    className: "sun",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    height: 20,
                    width: 20,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
                        clipRule: "evenodd"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    className: "moon",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    height: 18,
                    width: 18,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_ThemeSwitcher = (ThemeSwitcher);

// EXTERNAL MODULE: ./config/menu.json
var menu = __webpack_require__(9012);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@12.3.1_2mygebwfgdyopr3fy2qddu2eli/node_modules/next/link.js
var next_link = __webpack_require__(9678);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./layouts/partials/Header.js








const Header = ()=>{
    // distructuring the main menu from menu object
    const { main  } = menu;
    const { logo , logo_light , title  } = config.site;
    const { 0: mounted , 1: setMounted  } = (0,external_react_.useState)(false);
    const { theme , resolvedTheme  } = (0,external_next_themes_.useTheme)();
    (0,external_react_.useEffect)(()=>setMounted(true), []);
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "header",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: "navbar",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "sidebar-toggler mr-lg-0 d-block invisible mr-2 opacity-0 lg:hidden",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                        className: "sidebar-toggle-icon",
                        viewBox: "0 0 100 100",
                        width: "40",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                className: "line top",
                                d: "m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                className: "line middle",
                                d: "m 70,50 h -40"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                className: "line bottom",
                                d: "m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Logo/* default */.Z, {
                            className: "h-8",
                            src: mounted && (theme === "dark" || resolvedTheme === "dark") ? logo_light : logo,
                            alt: title,
                            height: 32,
                            width: 164
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: "btn-follow hidden sm:inline",
                            href: "https://twitter.com/earthy_tonez",
                            target: "_blank",
                            rel: "nofollow noreferrer",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "hidden not-italic md:inline",
                                    children: "Follow "
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "inline-block -translate-y-[2px]",
                                            children: "@"
                                        }),
                                        "EarthyResources"
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "navbar-nav hidden lg:flex",
                    children: main.map((menu, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "nav-item",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: menu.url,
                                passHref: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "nav-link block",
                                    children: menu.name
                                })
                            })
                        }, `menu-${i}`))
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "ml-auto flex items-center lg:ml-0",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(components_ThemeSwitcher, {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: "btn btn-primary origin-right scale-90 md:scale-100 lg:ml-0",
                            href: "https://github.com/statichunt/statichunt",
                            target: "_blank",
                            rel: "nofollow noreferrer",
                            children: [
                                "Submit",
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "hidden md:inline-block",
                                    children: "Theme / Resource"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const partials_Header = (Header);


/***/ }),

/***/ 9012:
/***/ ((module) => {

module.exports = JSON.parse('{"main":[{"name":"Themes","url":"/"},{"name":"Resources","url":"/resources"},{"name":"About","url":"/about"}],"footer":[{"name":"EarthyResources","pages":[{"page":"themes","url":"/"},{"page":"resources","url":"/resources"},{"page":"about","url":"/about"},{"page":"disclaimer","url":"/disclaimer"}]},{"name":"Themes","pages":[{"page":"astro themes","url":"/astro-themes"},{"page":"hugo themes","url":"/hugo-themes"},{"page":"nextjs templates","url":"/nextjs-templates"},{"page":"gatsby themes","url":"/gatsby-themes"},{"page":"jekyll themes","url":"/jekyll-themes"}]},{"name":"Resources","pages":[{"page":"chat","url":"/jamstack-chat"},{"page":"ecommerce","url":"/jamstack-ecommerce"},{"page":"feedback","url":"/jamstack-feedback"},{"page":"form","url":"/jamstack-forms"},{"page":"helper","url":"/jamstack-helper"},{"page":"hosting","url":"/jamstack-hosting"},{"page":"search","url":"/jamstack-search"}]}]}');

/***/ }),

/***/ 1639:
/***/ ((module) => {

module.exports = JSON.parse('{"facebook":"","twitter":"https://twitter.com/heyEarthyResources","instagram":"","youtube":"","linkedin":"","github":"https://github.com/statichunt/","gitlab":"","discord":"https://discord.gg/ph9z267TBZ","medium":"","codepen":"","bitbucket":"","dribbble":"","behance":"","pinterest":"","soundcloud":"","tumblr":"","reddit":"","vk":"","whatsapp":"","snapchat":"","vimeo":"","tiktok":"","foursquare":"","rss":"","email":"","phone":"","address":"","skype":"","website":""}');

/***/ })

};
;