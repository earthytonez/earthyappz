import config from "@config/config.json";
import { slugify } from "@lib/utils/textConverter";
import Image from "next/future/image";
import { useEffect, useState } from "react";

const Accordion = ({
  data,
  slug,
  type,
  params,
  themes,
  arrayMaking,
  setArrayMaking,
  arrayLearning,
  setArrayLearning,
  arrayAppreciating,
  setArrayAppreciating,
  arrayTags,
  setArrayTags,
  arrayCategory,
  setArrayCategory,
  arrayTool,
  setArrayTool,
  setIsIntro,
}) => {
  const [taxonomy, setTaxonomy] = useState(type);
  const { darkIconList } = config;

  useEffect(() => {
    const filterAddition = taxonomy.map((item, id) => ({
      ...item,
      selected: false,
    }));
    setTaxonomy(filterAddition);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

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

  const handleOnClick = (label, type) => {
    // scroll to top
    window.scrollTo({ top: 0 });

    // set active state
    const temp = [...taxonomy];
    for (let i in temp) {
      const item = temp[i];
      if (slugify(item.frontmatter.title) === label) {
        item.selected = !item.selected;
      }
    }
    setTaxonomy(temp);

    // set making array
    if (type === "making") {
      if (arrayMaking.includes(label)) {
        setArrayMaking(arrayMaking.filter((x) => x !== label));
      } else {
        setArrayMaking((prevValue) => [...prevValue, label]);
      }
    }
    // set making array
    if (type === "learning") {
      if (arrayLearning.includes(label)) {
        setArrayLearning(arrayLearning.filter((x) => x !== label));
      } else {
        setArrayLearning((prevValue) => [...prevValue, label]);
      }
    }
    // set making array
    if (type === "appreciating") {
      if (arrayAppreciating.includes(label)) {
        setArrayAppreciating(arrayAppreciating.filter((x) => x !== label));
      } else {
        setArrayAppreciating((prevValue) => [...prevValue, label]);
      }
    }

    // set tags array
    if (type === "tags") {
      if (arrayTags.includes(label)) {
        setArrayTags(arrayTags.filter((x) => x !== label));
      } else {
        setArrayTags((prevValue) => [...prevValue, label]);
      }
    }

    // set category array
    if (type === "category") {
      if (arrayCategory.includes(label)) {
        setArrayCategory(arrayCategory.filter((x) => x !== label));
      } else {
        setArrayCategory((prevValue) => [...prevValue, label]);
      }
    }

  };
  // hide intro function
  useEffect(() => {
    if (setIsIntro) {
      if (
        arrayMaking?.length > 0 ||
        arrayLearning?.length > 0 ||
        arrayAppreciating?.length > 0 ||
        arrayCategory?.length > 0 ||
        arrayTags?.length > 0
      ) {
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
  const countItems = (params, item) =>
    themes.filter((theme) =>
      theme.frontmatter[params]
        ?.map((theme) => slugify(theme))
        .includes(slugify(item.frontmatter.title))
    ).length;

  return (
    <>
      {data.selected &&
        data.type === params &&
        taxonomy.map(
          (item, i) =>
            countItems(params, item) > 0 && (
              <a
                onClick={() =>
                  handleOnClick(slugify(item.frontmatter.title), data.type)
                }
                key={`item-${i}`}
                className={`filter-list ${item.selected && "active"}`}
                style={{ order: item.frontmatter.weight || "100" }}
              >
                <Image
                  className={`${
                    darkIconList.includes(slugify(item.frontmatter.title))
                      ? "dark:invert"
                      : ""
                  } ml-2`}
                  src={item.frontmatter.icon}
                  height={18}
                  width={18}
                  alt={item.frontmatter.title}
                  style={{ maxHeight: "18px" }}
                />

                <span className="ml-2 block"> {item.frontmatter.title}</span>
                <span className="ml-auto">{countItems(params, item)}</span>
              </a>
            )
        )}
    </>
  );
};

export default Accordion;
