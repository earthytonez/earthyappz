import fs from "fs-extra";
import ora from "ora";
import Pageres from "pageres";
import path from "path";
import getThemes from "../.json/themes.json"
assert {
  type: "json"
};
const spinner = ora("Loading");
const imagesFolder = path.join(process.cwd(), "/public/themes");

const themes = getThemes.map((data) => ({
  youtube_id: data.frontmatter.youtube_id,
  demo: data.frontmatter.demo,
  slug: data.slug,
}));

const http = require('http'); // or 'https' for https:// URLs
// const fs = require('fs');


const captureScreenshot = async (demo, slug, overwrite) => {
  const themeImage = `${slug}.png`;

  if (!overwrite && fs.existsSync(path.join(imagesFolder, themeImage))) {
    return false;
  }

  try {
    if (youtube_id) {
      let url = `https://img.youtube.com/vi/${youtube_id}/0.jpg`;
      const file = fs.createWriteStream(`${imagesFolder}/${slug}.png`);
      const request = http.get(url, function (response) {
        response.pipe(file);

        // after download completed close filestream
        file.on("finish", () => {
          file.close();
          console.log("Download Completed");
        });
      });
      return true;
    } else {
      const page = await new Pageres({
          delay: 2,
          filename: slug,
        })
        .source(demo, ["1500x1000"], {
          crop: true,
        })
        .destination(imagesFolder)
        .run();
      spinner.text = `${demo} => capturing`;
      return true;
    }
  } catch {
    spinner.text = `${demo} => failed capturing`;
    return false;
  }
};

const generateScreenshots = async (themes, overwrite) => {
  spinner.start("Capturing Screenshots");
  for (const data of themes) {
    await captureScreenshot(data.demo, data.youtube_id, data.slug, overwrite);
  }
  spinner.succeed("Success - Capturing Screenshots");
};

generateScreenshots(
  themes,
  false // overwrite value
);
