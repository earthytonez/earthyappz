export const toolsArray = (theme) => {
  var tags = [];
  if (theme.frontmatter?.tags) {
    tags = theme.frontmatter?.tags;
  }

    var making = [];
  if (theme.frontmatter?.making) {
    making = theme.frontmatter?.making;
  }

    var learning = [];
  if (theme.frontmatter?.learning) {
    learning = theme.frontmatter?.learning;
  }

    var appreciating = [];
  if (theme.frontmatter?.appreciating) {
    appreciating = theme.frontmatter?.appreciating;
  }

  const tool = [...making, ...learning, ...appreciating, ...tags];

  return tool;
};
