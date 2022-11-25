import HomeCategory from "@components/HomeCategory";
import Intro from "@components/Intro";
import Sidebar from "@components/Sidebar";
import SortResources from "@components/SortResources";
import Resources from "@components/Resources";
import config from "@config/config.json";
import Base from "@layouts/Baseof";
import { getListPage, getSinglePages } from "@lib/contentParser";
import { slugify } from "@lib/utils/textConverter";
import { setOthersCategory } from "hooks/setOthersCategory";
import SortReducer from "hooks/sortReducer";
import { useState } from "react";

const Home = ({
  frontmatter: { intro },
  aesthetic,
  tags,
  making_music,
  category,
  themes,
  tools,
}) => {
  const { sidebar } = config;

  // making_music array update state
  const [arraySSG, setArraySSG] = useState([]);
  const [arrayCMS, setArrayCMS] = useState([]);
  const [arrayCSS, setArrayCSS] = useState([]);
  const [arrayCategory, setArrayCategory] = useState([]);
  const [isIntro, setIsIntro] = useState(true);
  const getCategories = setOthersCategory(themes);
  const {
    currentResource,
    handleSortResource,
    isShow,
    setIsShow,
    isValue,
    defaultSort,
    handleClick,
  } = SortReducer(getCategories);

  const mouseHndler = () => {
    if (isShow) {
      setIsShow(!isShow);
    }
  };
  // theme filtering
  const filterSSG = currentResource?.filter((theme) =>
    arraySSG.length
      ? arraySSG.find((type) =>
          theme.frontmatter.making_music
            ?.map((making_music) => slugify(making_music))
            .includes(slugify(type))
        )
      : defaultSort
  );
  const filterCMS = filterSSG?.filter((theme) =>
    arrayCMS.length
      ? arrayCMS.find((type) =>
          theme.frontmatter.aesthetic
            ?.map((aesthetic) => slugify(aesthetic))
            .includes(slugify(type))
        )
      : defaultSort
  );
  const filterCSS = filterCMS?.filter((theme) =>
    arrayCSS.length
      ? arrayCSS.find((type) =>
          theme.frontmatter.tags
            ?.map((tags) => slugify(tags))
            .includes(slugify(type))
        )
      : defaultSort
  );
  const filterCategory = filterCSS?.filter((theme) =>
    arrayCategory.length
      ? arrayCategory.find((type) =>
          theme.frontmatter.category
            ?.map((category) => slugify(category))
            .includes(slugify(type))
        )
      : defaultSort
  );

  return (
    <Base>
      <div className="flex" onClick={mouseHndler}>
        <Sidebar
          sidebar={sidebar}
          making_music={making_music}
          aesthetic={aesthetic}
          tags={tags}
          themes={themes}
          setArraySSG={setArraySSG}
          arraySSG={arraySSG}
          setArrayCMS={setArrayCMS}
          arrayCMS={arrayCMS}
          setArrayCSS={setArrayCSS}
          arrayCSS={arrayCSS}
          setIsIntro={setIsIntro}
        />
        <main className="main">
          <div className="container">
            <Intro data={intro} toggleClass={isIntro ? "block" : "hidden"} />
            <div className="mb-8 block justify-between md:flex">
              {/* <HomeCategory
                themes={filterCSS}
                category={category}
                arrayCategory={arrayCategory}
                setArrayCategory={setArrayCategory}
              /> */}
              <SortResources
                isShow={isShow}
                isValue={isValue}
                handleSortResource={handleSortResource}
                handleClick={handleClick}
              />
            </div>

            <Resources themes={filterCategory} tools={tools} />
          </div>
        </main>
      </div>
    </Base>
  );
};

export default Home;

// for homepage data
export const getStaticProps = async () => {
  const homepage = await getListPage("content");
  const { frontmatter } = homepage;
  const making = getSinglePages("content/making_music");
  const learning = getSinglePages("content/learning_music");
  const appreciating = getSinglePages("content/appreciating_music");
  const tags = getSinglePages("content/tags");
  const tools = [...making, ...learning, ...appreciating, ...tags];
  const themes = getSinglePages("content/resources");

  return {
    props: {
      frontmatter: frontmatter,
      making: making,
      learning: learning,
      appreciating: appreciating,
      tags: tags,
      themes: themes,
      tools: tools,
    },
  };
};
