#!/usr/bin/env node
// Simple test to verify ADMIN_ROUTES are exported/defined in frontend config file

const fs = require("fs");
const path = require("path");

const configPath = path.join(
  __dirname,
  "..",
  "prrc-next-app",
  "src",
  "lib",
  "config.ts"
);
if (!fs.existsSync(configPath)) {
  console.error("ERROR: config file not found:", configPath);
  process.exit(2);
}

const src = fs.readFileSync(configPath, "utf8");
const requiredKeys = [
  "FRONTEND_ADMIN",
  "BACKEND_ADMIN",
  "FRONTEND_ADMIN_LOGIN",
];
let missing = [];
for (const k of requiredKeys) {
  const re = new RegExp("\\b" + k + "\\s*:", "m");
  if (!re.test(src)) missing.push(k);
}
if (missing.length) {
  console.error("ERROR: ADMIN_ROUTES is missing keys:", missing.join(", "));
  process.exit(1);
}
console.log("ADMIN_ROUTES export appears to contain required keys.");
process.exit(0);
