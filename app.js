const fs = require("fs");
const path = require("path");

const buildDir = "docs";
const imagesDir = path.join(buildDir, "images");
const assetFiles = [
  path.join(buildDir, "index.html"),
  ...fs
    .readdirSync(path.join(buildDir, "assets"))
    .map((file) => path.join(buildDir, "assets", file)),
];

function getAllFiles(dir, allFiles = []) {
  const files = fs.readdirSync(dir);
  for (let file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, allFiles);
    } else {
      allFiles.push(fullPath);
    }
  }
  return allFiles;
}

const imageFiles = getAllFiles(imagesDir);
const usedFiles = new Set();

assetFiles.forEach((file) => {
  const content = fs.readFileSync(file, "utf8");
  imageFiles.forEach((imgPath) => {
    const relativePath = path.relative(buildDir, imgPath).replace(/\\/g, "/");
    if (content.includes(relativePath)) {
      usedFiles.add(imgPath);
    }
  });
});

const unusedFiles = imageFiles.filter((f) => !usedFiles.has(f));
unusedFiles.forEach((f) => {
  fs.unlinkSync(f);
  console.log(`🗑️ Deleted unused: ${path.relative(buildDir, f)}`);
});

console.log(`✅ Cleanup complete. Removed ${unusedFiles.length} file(s).`);
