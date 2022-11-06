"use strict";
exports.id = 400;
exports.ids = [400];
exports.modules = {

/***/ 5467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ setOthersCategory)
/* harmony export */ });
const setOthersCategory = (themes)=>{
    return themes.map((theme)=>({
            ...theme,
            frontmatter: {
                ...theme.frontmatter,
                category: !theme.frontmatter.category ? [
                    "Others"
                ] : theme.frontmatter.category
            }
        }));
};


/***/ }),

/***/ 363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ sortReducer)
});

;// CONCATENATED MODULE: ./lib/utils/filterReducer.js
// theme sorting
const reducer = (state, action)=>{
    switch(action.type){
        case "STAR":
            const sortByStar = [
                ...state.sort((a, b)=>(b.frontmatter.github_star ? b.frontmatter.github_star : 0) - (a.frontmatter.github_star ? a.frontmatter.github_star : 0)), 
            ];
            const starData = sortByStar.map((data)=>{
                return {
                    ...data,
                    type: "star"
                };
            });
            return starData;
        case "FORK":
            const sortByFork = [
                ...state.sort((a, b)=>(b.frontmatter.github_fork ? b.frontmatter.github_fork : 0) - (a.frontmatter.github_fork ? a.frontmatter.github_fork : 0)), 
            ];
            const forkData = sortByFork.map((data)=>{
                return {
                    ...data,
                    type: "fork"
                };
            });
            return forkData;
        case "UPDATE":
            const sortByUpdate = [
                ...state.sort((a, b)=>(b.frontmatter.update_date ? new Date(b.frontmatter.update_date) : new Date(b.frontmatter.date)) - (a.frontmatter.update_date ? new Date(a.frontmatter.update_date) : new Date(a.frontmatter.date))), 
            ];
            const updateData = sortByUpdate.map((data)=>{
                return {
                    ...data,
                    type: "update"
                };
            });
            return updateData;
        case "PRICE":
            const sortByPrice = [
                ...state.sort((a, b)=>(b.frontmatter.price ? b.frontmatter.price : 0) - (a.frontmatter.price ? a.frontmatter.price : 0)), 
            ];
            const priceData = sortByPrice.map((data)=>{
                return {
                    ...data,
                    type: "price"
                };
            });
            return priceData;
        case "DEFAULT":
            const sortByDate = [
                ...state.sort((a, b)=>new Date(b.frontmatter.date) - new Date(a.frontmatter.date)), 
            ];
            const defaultData = sortByDate.map((data)=>{
                return {
                    ...data,
                    type: "star"
                };
            });
            return defaultData;
        case "SLUG":
            return action.payload;
        default:
            return state;
    }
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./hooks/sortReducer.js


const SortReducer = (getCategories, show, slug)=>{
    const defaultSort = getCategories.sort((a, b)=>new Date(b.frontmatter?.date) - new Date(a.frontmatter?.date));
    const { 0: isShow , 1: setIsShow  } = (0,external_react_.useState)(false);
    const { 0: isValue , 1: setIsValue  } = (0,external_react_.useState)("default");
    const { 0: currentTheme , 1: dispatch  } = (0,external_react_.useReducer)(reducer, defaultSort);
    const handleSortTheme = (e, type)=>{
        dispatch({
            type: type
        });
        setIsValue(e.target.value);
        if (!show) {
            setIsShow(!isShow);
        }
    };
    (0,external_react_.useEffect)(()=>{
        if (slug) {
            dispatch({
                type: "SLUG",
                payload: defaultSort
            });
            setIsValue("default");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        slug
    ]);
    const handleClick = ()=>{
        setIsShow(!isShow);
    };
    return {
        currentTheme,
        handleSortTheme,
        isShow,
        setIsShow,
        isValue,
        setIsValue,
        defaultSort,
        handleClick
    };
};
/* harmony default export */ const sortReducer = (SortReducer);


/***/ }),

/***/ 8071:
/***/ ((module) => {

module.exports = JSON.parse('{"button":[{"type":"DEFAULT","value":"default","icon":"/images/icons/sort.svg"},{"type":"STAR","value":"star","icon":"/images/icons/star.svg"},{"type":"FORK","value":"fork","icon":"/images/icons/fork.svg"},{"type":"UPDATE","value":"update","icon":"/images/icons/update.svg"},{"type":"PRICE","value":"price","icon":"/images/icons/price.svg"}]}');

/***/ })

};
;