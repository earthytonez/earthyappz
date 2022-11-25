export const setOthersCategory = (resources) => {
  return resources.map((resource) => ({
    ...resource,
    frontmatter: {
      ...resource.frontmatter,
      category: !resource.frontmatter.category
        ? ["Others"]
        : resource.frontmatter.category,
    },
  }));
};
