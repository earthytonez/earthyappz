import MobileSidebar from "@components/MobileSidebar";
import Sidebar from "@components/Sidebar";
import SortSidebar from "@components/SortSidebar";
import config from "@config/config.json";
import SortReducer from "@hooks/sortReducer";
import Base from "@layouts/Baseof";
import Default from "@layouts/Default";
import ResourceTaxonomy from "@layouts/ResourceTaxonomy";
import ResourceByUs from "@layouts/ResourceByUs";
import ResourceTaxonomy from "@layouts/ResourceTaxonomy";
import {
  getRegularPage,
  getRegularPageSlug,
  getSinglePages,
  getSinglePagesSlug,
} from "@lib/contentParser";
import { slugify } from "@lib/utils/textConverter";
import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

// for all regular pages
const RegularPages = ({
  slug,
  data,
  makingSlug,
  taxonomies,
  aesthetics,
  category,
  aestheticSlug,
  resources,
  statichuntResources,
}) => {
  const { sidebar } = config;
  const { content } = taxonomies[0];
  const [arrayCategory, setArrayCategory] = useState([]);
  const [isIntro, setIsIntro] = useState(true);

  const {
    isShow,
    isValue,
    defaultSort,
    handleClick,
  } = SortReducer(getCategories, true, slug);
  useEffect(() => {
    setArrayCategory([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  if (taxonomies[0]?.frontmatter.title == undefined) {
    console.warn(`Taxonomy Frontmatter: ${slug} -- ${makingSlug} -- ${JSON.stringify(taxonomies[0])}`);
    return (<React.Fragment></React.Fragment>);
  }

  const { title, meta_title, description, image, noindex, canonical } =
    taxonomies[0]?.frontmatter;

  const filterCategory = currentResource.filter((theme) =>
    arrayCategory.length
      ? arrayCategory.find((type) => {
          if (!theme.frontmatter) {
            console.warn(`WarnLog: No Frontmatter for theme: ${JSON.stringify(theme)}`);
          }

          if (!theme.frontmatter.categories) {
            console.warn(`WarnLog: No Categories for theme frontmatter: ${JSON.stringify(theme.frontmatter)}`);
          }

          theme.frontmatter.categories
            ?.map((category) => slugify(category))
            .includes(slugify(type))
        }
        )
      : defaultSort
  );

  // change others position
  if (!category) {
    console.warn(`WarnLog: category undefined  ${slug} -- ${makingSlug} -- ${JSON.stringify(category)}`);
    return (<React.Fragment></React.Fragment>)
  }

  const indexOfOthers = category.map((data) => data.slug).indexOf("others");
  const element = category.splice(indexOfOthers, 1)[0];
  category.splice(category.length, 0, element);

  return (
    <Base
      title={title}
      description={description ? description : content.slice(0, 120)}
      meta_title={meta_title}
      image={image}
      noindex={noindex}
      canonical={canonical}
    >
      {makingSlug.includes(slug) ? (
        <div className="flex">
          <Sidebar
            sidebar={sidebar}
            themes={getCategories}
            slug={slug}
            category={category}
            setArrayCategory={setArrayCategory}
            arrayCategory={arrayCategory}
            setIsIntro={setIsIntro}
            isIntro={isIntro}
          >
            <SortSidebar
              isShow={isShow}
              isValue={isValue}
              handleSortResource={handleSortResource}
              handleClick={handleClick}
            />
          </Sidebar>
          <ResourceTaxonomy
            taxonomies={taxonomies}
            data={filterCategory}
            aesthetics={aesthetics}
            isIntro={isIntro}
          />
        </div>
      ) : aestheticSlug.includes(slug) ? (
        <>
          <MobileSidebar />
          <ResourceTaxonomy data={resources} taxonomies={taxonomies} />
        </>
      ) : slug === "theme-by-us" ? (
        <ResourceByUs
          statichuntResources={statichuntResources}
          aesthetics={aesthetics}
          data={data}
        />
      ) : (
        <Default data={data} />
      )}
    </Base>
  );
};
export default RegularPages;

// for regular page routes
export const getStaticPaths = async () => {
  const slugs = getRegularPageSlug();
  if (!slugs) {
    console.warn("WarnLog: No Slugs");
  }
  const paths = slugs.map((slug) => ({
    params: {
      regular: slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

// for regular page data
export const getStaticProps = async ({ params }) => {
  const { regular } = params;

  const pageCategories = ["making", "learning", "appreciating", "aesthetic"]

  const making = getSinglePages("content/making_music");
  const learning = getSinglePages("content/learning_music");
  const appreciating = getSinglePages("content/appreciating_music");
  const aestheticPage = appreciating.filter((data) => data.slug === regular);

  // taxonomy slug
  const makingSlug = getSinglePagesSlug("content/making_music");
  const learningSlug = getSinglePagesSlug("content/learning_music");
  const appreciatingSlug = getSinglePagesSlug("content/appreciating_music");

  // taxonomy page data
  const singleListPage =
    making.length &&
    making.filter((page) =>
      page.frontmatter.url
        ? page.frontmatter?.url === `/${regular}`
        : page.slug === regular
    );

  const allResources = await getRegularPage(
    singleListPage.length
      ? slugify(singleListPage[0]?.frontmatter.title)
      : regular
  );

  // aesthetic page
  const allResources = getSinglePages("content/resources");

  const singleToolPage =
    aesthetic.length &&
    aesthetic.filter((page) =>
      page.frontmatter.url
        ? page.frontmatter?.url === `/${regular}`
        : page.slug === regular
    );

  const singleResources = allResources.filter((data) => {
    if (!data.frontmatter) {
      console.warn("WarnLog: No Resource Frontmatter");
      console.log(data);
      return false;
    }
    if (!data.frontmatter) {
      console.warn("WarnLog: No Resource Frontmatter categories");
      console.log(data.fontmatter);
      return false;
    }

    data.frontmatter.categories
      .map((category) => slugify(category))
      .includes(slugify(singleToolPage[0]?.frontmatter.title))
    }
  );

  // layout filtering
  const filterByLayout = (layout) => {
    const layoutFilter = allResources.filter(
      (data) => data.frontmatter.layout === layout
    );
    return layoutFilter;
  };
  const aboutPage = filterByLayout("about");
  const defaultPage = filterByLayout("default");
  const statichunt = filterByLayout("theme-by-us");

  // taxonomies data
  const taxonomies = statichunt.length
    ? statichunt
    : aboutPage.length
    ? aboutPage
    : singleListPage.length
    ? singleListPage
    : aestheticPage.length
    ? aestheticPage
    : defaultPage;

  // all taxonomies
  const allTaxonomies = [...making, ...learning, ...appreciating];

  return {
    props: {
      slug: regular,
      data: allResources,
      makingSlug: makingSlug,
      taxonomies: taxonomies,
      resources: singleResources,
      themes: themes,
      aestheticSlug: aestheticSlug,
      allResources: allResources,
      statichuntResources: statichuntResources,
    },
  };
};
