"use strict";
exports.id = 685;
exports.ids = [685];
exports.modules = {

/***/ 3685:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GI": () => (/* binding */ getRegularPageSlug),
/* harmony export */   "Gl": () => (/* binding */ getSinglePages),
/* harmony export */   "YC": () => (/* binding */ getSinglePagesSlug),
/* harmony export */   "bk": () => (/* binding */ getRegularPage),
/* harmony export */   "di": () => (/* binding */ getListPage)
/* harmony export */ });
/* harmony import */ var _lib_utils_mdxParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9518);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3312);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1423);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils_mdxParser__WEBPACK_IMPORTED_MODULE_0__, _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__]);
([_lib_utils_mdxParser__WEBPACK_IMPORTED_MODULE_0__, _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





// get index page data, ex: _index.md
const getListPage = async (folder)=>{
    const indexData = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_4___default().join(folder, "_index.md"), "utf-8");
    const indexDataParsed = gray_matter__WEBPACK_IMPORTED_MODULE_3___default()(indexData);
    const frontmatterString = JSON.stringify(indexDataParsed.data);
    const frontmatter = JSON.parse(frontmatterString);
    const content = indexDataParsed.content;
    const mdxContent = await (0,_lib_utils_mdxParser__WEBPACK_IMPORTED_MODULE_0__/* .parseMDX */ .x)(content);
    return {
        frontmatter,
        content,
        mdxContent
    };
};
// get all single pages, ex: blog/post.md
const getSinglePages = (folder)=>{
    const filesPath = fs__WEBPACK_IMPORTED_MODULE_2___default().readdirSync(path__WEBPACK_IMPORTED_MODULE_4___default().join(folder));
    const sanitizeFiles = filesPath.filter((file)=>file.includes(".md"));
    const filterSingleFiles = sanitizeFiles.filter((file)=>file.match(/^(?!_)/));
    const singlePages = filterSingleFiles.map((filename)=>{
        const slug = filename.replace(".md", "");
        const pageData = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_4___default().join(folder, filename), "utf-8");
        const pageDataParsed = gray_matter__WEBPACK_IMPORTED_MODULE_3___default()(pageData);
        const frontmatterString = JSON.stringify(pageDataParsed.data);
        const frontmatter = JSON.parse(frontmatterString);
        const content = pageDataParsed.content;
        const url = frontmatter.url ? frontmatter.url.replace("/", "") : slug;
        return {
            frontmatter: frontmatter,
            slug: url,
            content: content
        };
    });
    const publishedPages = singlePages.filter((page)=>!page.frontmatter.draft && page);
    const filterByDate = publishedPages.filter((page)=>new Date(page.frontmatter.date || new Date()) <= new Date());
    return filterByDate;
};
// get default page data, ex: about.md
const getRegularPage = async (slug)=>{
    const publishedPages = getSinglePages("content");
    const publishedTheme = getSinglePages("content/themes");
    // filter by css
    const ssgData = publishedTheme.filter((theme)=>theme.frontmatter.ssg.map((ssg)=>(0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__/* .slugify */ .lV)(ssg)).includes(slug));
    //  filter by cms
    const cmsData = publishedTheme.filter((theme)=>theme.frontmatter.cms && theme.frontmatter.cms.map((cms)=>(0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__/* .slugify */ .lV)(cms)).includes(slug));
    //  filter by css
    const cssData = publishedTheme.filter((theme)=>theme.frontmatter.css && theme.frontmatter.css.map((css)=>(0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__/* .slugify */ .lV)(css)).includes(slug));
    // filter by archtype
    const categoryData = publishedTheme.filter((theme)=>theme.frontmatter.category && theme.frontmatter.category.map((category)=>(0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__/* .slugify */ .lV)(category)).includes(slug));
    const pageData = publishedPages.filter((data)=>data.slug === slug);
    const regulerData = ssgData.length ? ssgData : cssData.length ? cssData : cmsData.length ? cmsData : categoryData.length ? categoryData : pageData;
    const allRegulerData = regulerData.map((data)=>{
        const { frontmatter , content  } = data;
        const slug = data.slug;
        return {
            frontmatter,
            content,
            slug
        };
    });
    return allRegulerData;
};
// get single pages slug
const getSinglePagesSlug = (folder)=>{
    const publishedPages = getSinglePages(folder);
    const slugs = publishedPages.map((page)=>page.slug);
    return slugs;
};
// get regulerpage slug
const getRegularPageSlug = ()=>{
    const regularPage = getSinglePagesSlug("content");
    const makingFile = getSinglePagesSlug(`content/making`);
    const learningFile = getSinglePagesSlug(`content/learning`);
    const appreciatingFile = getSinglePagesSlug(`content/appreciating`);
    const toolFile = getSinglePagesSlug(`content/tool`);
    const allThemes = getSinglePages("content/themes");
    const allSlug = [
        ...regularPage,
        ...toolFile,
        ...makingFile,
        ...learningFile,
        ...appreciatingFile
    ];
    return allSlug;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9518:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ parseMDX)
/* harmony export */ });
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4818);
/* harmony import */ var rehype_slug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7752);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6809);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_0__, rehype_slug__WEBPACK_IMPORTED_MODULE_1__, remark_gfm__WEBPACK_IMPORTED_MODULE_2__]);
([next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_0__, rehype_slug__WEBPACK_IMPORTED_MODULE_1__, remark_gfm__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// mdx content parser
const parseMDX = async (content)=>{
    const options = {
        mdxOptions: {
            rehypePlugins: [
                rehype_slug__WEBPACK_IMPORTED_MODULE_1__["default"]
            ],
            remarkPlugins: [
                remark_gfm__WEBPACK_IMPORTED_MODULE_2__["default"]
            ]
        }
    };
    return await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_0__.serialize)(content, options);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;