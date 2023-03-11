export const toolsArray = (theme) => {
  var cms = [];
  if (theme.frontmatter?.cms) {
    cms = theme.frontmatter?.cms;
  }

  var css = [];
  if (theme.frontmatter?.css) {
    css = theme.frontmatter?.css;
  }

  var ssg = [];
  if (theme.frontmatter?.ssg) {
    ssg = theme.frontmatter?.ssg;
  }

  console.log(theme.frontmatter);
  return [...ssg, ...cms, ...css];

  return tool;
};
