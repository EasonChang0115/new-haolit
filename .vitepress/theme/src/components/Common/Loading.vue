<template>
  <div class="showX">
    <div class="loading">
      <span>L</span>
      <span>o</span>
      <span>a</span>
      <span>d</span>
      <span>i</span>
      <span>n</span>
      <span>g</span>
    </div>
    <div id="preloader"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import loadingPace from "../../common/loadingPace";

onMounted(() => {
  let hasPace = false;
  const timer = setInterval(() => {
    if (typeof Pace !== "undefined" && !hasPace) {
      hasPace = true;
      loadingPace();
      clearInterval(timer);
    }
  }, 10);
});
</script>
