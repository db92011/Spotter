import { readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const requiredFiles = [
  "site/index.html",
  "site/styles.css",
  "site/robots.txt",
  "site/sitemap.xml",
  "site/llms.txt",
  "site/ai/spotter-summary.json",
  "site/site.webmanifest",
  "site/sw.js",
  "site/app/index.html",
  "site/app/manifest.json",
  "site/app/mobile-access-patch.js",
  "site/app/service-worker.js",
  "site/app/install/index.html",
  "site/app/install/install.js",
  "site/app/icons/icon-192.png",
  "site/app/icons/icon-512.png"
];

const forbidden = [
  "/spotter/app/",
  "/spotter/site.webmanifest",
  "/spotter/sw.js",
  "universal-installer.js"
];

for (const file of requiredFiles) {
  statSync(join(root, file));
}

for (const file of requiredFiles.filter((file) => /\.(html|js|json|webmanifest|css)$/.test(file))) {
  const text = readFileSync(join(root, file), "utf8");
  for (const needle of forbidden) {
    if (text.includes(needle)) {
      throw new Error(`${file} still contains ${needle}`);
    }
  }
}

const appHtml = readFileSync(join(root, "site/app/index.html"), "utf8");
if (!appHtml.includes('<base href="/app/" />')) {
  throw new Error("site/app/index.html must use the standalone /app/ base path");
}

const manifest = JSON.parse(readFileSync(join(root, "site/site.webmanifest"), "utf8"));
if (manifest.start_url !== "/app/?source=pwa" || manifest.scope !== "/app/") {
  throw new Error("site/site.webmanifest must launch the standalone app surface");
}

console.log("Spotter static surface verified.");
