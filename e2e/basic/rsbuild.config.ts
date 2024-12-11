import { defineConfig } from "@rsbuild/core";
import pkg from "./package.json";

export default defineConfig({
  plugins: [],
  source: {
    decorators: {
      version: "legacy",
    },
  },
  output: {
    externals: Object.keys(pkg.dependencies), // TODO should remove
    target: "node", // TODO should be web-worker
  },
});
