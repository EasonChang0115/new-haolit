<template>
  <CommonScrollToTop />
  <CommonLoading />
  <Navbar />
  <slot />
  <Footer />
</template>

<script setup>
import { onMounted } from "vue";
import CommonScrollToTop from "../components/Common/ScrollToTop.vue";
import CommonLoading from "../components/Common/Loading.vue";
import Navbar from "../components/Common/Navbar.vue";
import Footer from "../components/Common/Footer.vue";

onMounted(() => {
  if (typeof WOW !== "undefined") new WOW().init();
  if (typeof Splitting !== "undefined")
    Splitting({ target: "[data-splitting]" });
});
</script>
