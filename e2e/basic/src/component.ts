import type { Component, Constructor } from "@loopback/core";

const controllers = require.context("./controllers", true, /\.controller\.ts$/);
function loadClasses(r: any) {
  const classes: Constructor<{}>[] = [];
  for (const key of r.keys()) {
    const mod = r(key);
    for (const m in mod) {
      if (typeof mod[m] === "function") {
        classes.push(mod[m]);
      }
    }
  }
  return classes;
}
export class BasicAppComponent implements Component {
  controllers = loadClasses(controllers);
}
