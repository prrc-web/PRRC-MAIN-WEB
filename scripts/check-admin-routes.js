#!/usr/bin/env node
// Scan frontend source code for hard-coded admin paths and ensure ADMIN_ROUTES is used.

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const FRONTEND_SRC = path.join(ROOT, "prrc-next-app", "src");
// Only consider occurrences inside quotes/backticks to minimize false positives (like './admin/importMap')
const patternRegex =
  /(['"`])(?:\/admin-panel|\/AdministrationPage|\/admin(?:\/login|\/signup|\/index)?)(['"`])/;

function isBinary(filePath) {
  const exts = [".png", ".jpg", ".jpeg", ".gif", ".ico", ".svg", ".pdf"];
  return exts.includes(path.extname(filePath).toLowerCase());
}

function walk(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  files.forEach((f) => {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (["node_modules", ".git", ".next", "dist", "public"].includes(f))
        return;
      walk(full, fileList);
    } else {
      fileList.push(full);
    }
  });
  return fileList;
}

function check() {
  const files = walk(FRONTEND_SRC);
  const matches = [];
  const codeFileFilters = /\.(js|jsx|ts|tsx|md|json|html|css|scss)$/i;
  for (const file of files) {
    if (isBinary(file)) continue;
    if (!codeFileFilters.test(file)) continue;
    const content = fs.readFileSync(file, "utf8");
    const lines = content.split(/\n/);
    for (let i = 0; i < lines.length; i++) {
      const l = lines[i];
      if (patternRegex.test(l)) {
        // If using ADMIN_ROUTES it's fine
        if (l.includes("ADMIN_ROUTES")) continue;
        // Skip the config file itself (this is the canonical source of truth)
        if (file.endsWith("/src/lib/config.ts")) continue;
        const match = l.match(patternRegex)[0];
        matches.push({ file, line: i + 1, text: l.trim(), pattern: match });
      }
    }
  }
  if (matches.length) {
    console.log(
      "\nDetected hard-coded admin path strings (consider using ADMIN_ROUTES constants):\n"
    );
    matches.forEach((m) => {
      console.log(`${m.file}:${m.line}  (${m.pattern})  ${m.text}`);
    });
    process.exit(1);
  }
  console.log(
    "\nNo hard-coded admin path strings found in frontend src/ files. All good!\n"
  );
}

check();
