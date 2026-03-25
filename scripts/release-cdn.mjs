#!/usr/bin/env node
import { execSync } from "child_process";
import { resolve, dirname, join } from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { homedir } from "os";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const { run } = await import(pathToFileURL(join(homedir(), ".claude/skills/release-cdn/release-cdn.mjs")).href);

run({
  root,
  artifacts: {
    plugin: {
      versionKey: "version",
      cdnFileName: "asset-picker.min.js",
      build(version) {
        execSync("npm run build:cdn", { stdio: "inherit", cwd: root });
        return resolve(root, "dist-cdn/asset-picker.min.js");
      },
    },
  },
  updateFiles: ["README.md"],
  // Primary repo is GitLab (private); GitHub (origin) only gets the release branch for demo
  gitPush: [
    "gitlab",
    { remote: "origin", branch: "release" },
  ],
});
