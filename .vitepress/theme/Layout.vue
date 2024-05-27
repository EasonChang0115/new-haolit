<template>
  <Layout>
    <Home v-if="frontmatter.home" />
    <About v-else-if="frontmatter.about" />
    <Article v-else />
  </Layout>
</template>

<script setup lang="ts">
import { useData } from "vitepress";
import Layout from "../theme/src/layout/Layout.vue";
import Home from "./src/pages/Home.vue";
import About from "./src/pages/About.vue";
import Article from "./src/pages/Article.vue";

// https://vitepress.dev/reference/runtime-api#usedata
const { frontmatter } = useData();
</script>
