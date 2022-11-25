import { markdownify } from "@lib/utils/textConverter";
import Resources from "./components/Resources";

const ResourceByUs = ({ statichuntResources, tools, data }) => {
  const { frontmatter, content } = data[0];
  const { title } = frontmatter;
  return (
    <section className="section">
      <div className="container">
        <div className="row mb-8 justify-center">
          <div className="col-10 text-center">
            {markdownify(title, "h1", "mb-8")}
            {markdownify(content, "div", "content")}
          </div>
        </div>
        <Resources themes={statichuntResources} tools={tools} />
      </div>
    </section>
  );
};

export default ResourceByUs;
