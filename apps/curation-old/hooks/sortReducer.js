import { reducer } from "@lib/utils/filterReducer";
import { useEffect, useReducer, useState } from "react";

const SortReducer = (getCategories, show, slug) => {
  const defaultSort = getCategories.sort(
    (a, b) => new Date(b.frontmatter?.date) - new Date(a.frontmatter?.date)
  );

  const [isShow, setIsShow] = useState(false);
  const [isValue, setIsValue] = useState("default");
  const [currentResource, dispatch] = useReducer(reducer, defaultSort);

  const handleSortResource = (e, type) => {
    dispatch({ type: type });
    setIsValue(e.target.value);
    if (!show) {
      setIsShow(!isShow);
    }
  };

  useEffect(() => {
    if (slug) {
      dispatch({ type: "SLUG", payload: defaultSort });
      setIsValue("default");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const handleClick = () => {
    setIsShow(!isShow);
  };
  return {
    currentResource,
    handleSortResource,
    isShow,
    setIsShow,
    isValue,
    setIsValue,
    defaultSort,
    handleClick,
  };
};

export default SortReducer;
