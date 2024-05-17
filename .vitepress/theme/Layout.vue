<template>
  <Layout>
    <Home v-if="frontmatter.home" />
    <div v-else>
      <a href="/">Home</a>
      <Content />
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { useData } from "vitepress";
import Layout from "../theme/src/layout/Layout.vue";

import Home from "./src/pages/Home.vue";

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData();
</script>
