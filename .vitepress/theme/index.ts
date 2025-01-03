import DefaultTheme from "vitepress/theme";
import Archives from "./components/Archives.vue";
import Tags from "./components/Tags.vue";
import MyLayout from "./components/MyLayout.vue";
import Dev from "./components/Dev.vue";
import Work from "./components/Projie.vue";
import Done from "./components/Accomplished.vue";
import "./custom.css";

export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    const { app } = ctx;
    // register global components
    app.component("Archives", Archives);
    app.component("Tags", Tags);
    app.component("Dev", Dev);
    app.component("Work", Work);
    app.component("Done", Done);

  },
};
