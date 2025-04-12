const fs = require("fs");
const path = require("path");

const DOCS_DIR = "docs";
const IMAGE_DIR = path.join(DOCS_DIR, "images");

const filesToCheck = [
  path.join(DOCS_DIR, "index.html"),
  ...fs
    .readdirSync(path.join(DOCS_DIR, "assets"))
    .map((f) => path.join(DOCS_DIR, "assets", f)),
];

const usedImages = new Set();

filesToCheck.forEach((file) => {
  const content = fs.readFileSync(file, "utf-8");
  const matches = content.match(/images\/[^\s'")]+/g);
  if (matches) matches.forEach((m) => usedImages.add(m));
});

const allImages = fs.readdirSync(IMAGE_DIR);

allImages.forEach((img) => {
  const relPath = `images/${img}`;
  if (!usedImages.has(relPath)) {
    fs.unlinkSync(path.join(IMAGE_DIR, img));
    console.log(`Deleted unused image: ${relPath}`);
  }
});
