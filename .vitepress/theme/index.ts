// https://vitepress.dev/guide/custom-theme
import Layout from "./Layout.vue";
import type { Theme } from "vitepress";
import { createPinia } from "pinia";

import "./src/scss/index.scss";

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    const pinia = createPinia();
    app.use(pinia);
  },
} satisfies Theme;
