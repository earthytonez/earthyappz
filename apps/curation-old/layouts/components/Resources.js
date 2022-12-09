import { dateFormat } from "@lib/utils/dateFormat";
import { humanize } from "@lib/utils/textConverter";
import { toolsArray } from "@lib/utils/toolsArray";
import Image from "next/future/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TbDownload, TbEye } from "react-icons/tb";
import InfiniteScroll from "react-infinite-scroll-component";
import ImageFallback from "./ImageFallback";
import ToolsIcon from "./ToolsIcon";

// change github data by sort fuctionality
const githubDataChange = (resource) => {
  const getStar = resource.frontmatter.github_star
    ? resource.frontmatter.github_star
    : 0;
  const star =
    getStar < 1000 ? getStar : parseFloat(getStar / 1000).toFixed(1) + "k";
  const fork =
    resource.frontmatter.github_fork < 1000
      ? resource.frontmatter.github_fork
      : parseFloat(resource.frontmatter.github_fork / 1000).toFixed(1) + "k";
  const updateDate = dateFormat(
    resource.frontmatter.update_date
      ? resource.frontmatter.update_date
      : resource.frontmatter.date,
    "dd/MM/yy"
  );
  const price = resource.frontmatter.price ? resource.frontmatter.price : 0;

  if (resource.type === "fork") {
    return price ? price : fork;
  } else if (resource.type === "update") {
    return updateDate;
  } else if (resource.type === "price") {
    return price;
  } else {
    return price ? price : star;
  }
};

const Resources = ({ resources, tools, customRowClass, customColClass }) => {
  const [item, setItem] = useState(4);
  const [page, setPage] = useState(resources.slice(0, item));

  // getWindowDimensions
  const [windowSize, setWindowSize] = useState(768);
  useEffect(() => {
    function showViewport() {
      var width = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      );
      setWindowSize(width);
    }
    showViewport();
    window.onresize = showViewport;
  }, []);

  useEffect(() => {
    setItem(windowSize < 768 ? 4 : 20);
  }, [windowSize]);

  const fetchData = () => {
    setItem(item + 20);
  };
  useEffect(() => {
    setPage(resources.slice(0, item));
  }, [item, resources]);

  // tooltip
  useEffect(() => {
    var tooltipEl = document.querySelectorAll(".has-tooltip");
    if (tooltipEl) {
      var tooltipItems = document.querySelectorAll(".tooltip-label");
      tooltipItems.forEach((item) => {
        item.remove();
      });
      var length = tooltipEl.length;
      for (var i = 0; i < length; i++) {
        var attr = tooltipEl[i].getAttribute("data-tooltip");
        var x = document.createElement("SPAN");
        var t = document.createTextNode(attr);
        x.appendChild(t);
        x.className = "tooltip-label";
        tooltipEl[i].appendChild(x);
      }
    }
  });

  return (
    <InfiniteScroll
      dataLength={page.length}
      next={fetchData}
      hasMore={true}
      className={customRowClass ? customRowClass : "row !overflow-hidden py-4"}
    >
      {page.map((resource) => (
        <div
          className={
            customColClass ? customColClass : "mb-8 sm:col-6 xl:col-4 2xl:col-3"
          }
          key={resource.slug}
        >
          <div className="resource-card">
            <Link href={`/resources/${resource.slug}`} passHref>
              <a className="img-cover">
                <ImageFallback
                  src={`/resources/${resource.slug}.png`}
                  fallback={`https://teamosis-sg.vercel.app/api/img?url=${resource.frontmatter.demo}`}
                  height={250}
                  width={300}
                  alt={resource.frontmatter?.title}
                  className="rounded-t"
                />
              </a>
            </Link>
            <div className="resource-card-body">
              <div className="flex justify-between">
                <h2 className="h6 mb-0 text-lg font-medium">
                  <Link href={`/resources/${resource.slug}`} passHref>
                    <a className="line-clamp-1 hover:underline">
                      {resource.frontmatter?.title}
                    </a>
                  </Link>
                </h2>
                <span
                  className="has-tooltip ml-2 mt-1 flex shrink-0 items-center whitespace-nowrap text-sm text-dark dark:text-white"
                  data-tooltip={humanize(
                    resource.frontmatter.price > 0 && resource.type != "update"
                      ? "Price"
                      : resource.type
                      ? resource.type
                      : "Star"
                  )}
                >
                  {resource.type === "price" ? (
                    githubDataChange(resource) !== 0 && (
                      <Image
                        className="mr-1 inline max-h-[14px] align-text-bottom dark:invert"
                        src={`/images/icons/${
                          resource.frontmatter.price > 0 && resource.type != "update"
                            ? "price"
                            : resource.type
                            ? resource.type
                            : "star"
                        }.svg`}
                        alt="github icon"
                        height="14"
                        width="14"
                      />
                    )
                  ) : (
                    <Image
                      className="mr-1 inline max-h-[14px] align-text-bottom dark:invert"
                      src={`/images/icons/${
                        resource.frontmatter.price > 0 && resource.type != "update"
                          ? "price"
                          : resource.type
                          ? resource.type
                          : "star"
                      }.svg`}
                      alt="github icon"
                      height="14"
                      width="14"
                    />
                  )}
                  {resource.type === "price"
                    ? githubDataChange(resource) !== 0
                      ? githubDataChange(resource)
                      : "Free"
                    : githubDataChange(resource)}
                </span>
              </div>
              <span className="text-xs text-dark dark:text-light">
                by{" "}
                {resource.frontmatter?.author === "EarthyResources" ? (
                  <Link href="/resource-by-us" passHref>
                    <a className="bg-gradient-to-r from-primary to-secondary bg-clip-text font-bold text-transparent">
                      EarthyResources
                    </a>
                  </Link>
                ) : resource.frontmatter?.author ? (
                  resource.frontmatter?.author
                ) : ""}
              </span>
            </div>
            <div className="resource-card-footer">
              <div className="flex-wrap">
                <ToolsIcon
                  tools={tools}
                  type={toolsArray(resource)}
                  resourceCard={true}
                />
              </div>
              <div className="ml-auto flex items-center whitespace-nowrap">
                <Link href={`/demo/${resource.slug}`}>
                  <a
                    className="btn btn-sm btn-demo svg-block mb-2 mr-1 leading-none"
                    target="_blank"
                    rel="noopener nofollow"
                    data-tooltip="Preview"
                    aria-label="Preview Resource"
                  >
                    <TbEye />
                  </a>
                </Link>
                <Link
                  href={`${
                    resource.frontmatter.github
                      ? resource.frontmatter.github
                      : resource.frontmatter.download
                  }?ref=earthytonez.com`}
                >
                  <a
                    className="btn btn-sm btn-download svg-align-bottom mb-2 pr-2 leading-none"
                    target="_blank"
                    rel="noopener nofollow"
                    data-tooltip="Download"
                    aria-label="Download Resource"
                  >
                    <span className="mr-1 hidden lg:inline">Get</span>
                    <TbDownload />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default Resources;
