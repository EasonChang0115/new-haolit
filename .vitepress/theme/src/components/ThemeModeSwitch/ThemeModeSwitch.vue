<template>
  <button
    :class="['color-picker']"
    @click="setModule"
    aria-label="theme-switcher"
  >
    <SunIcon
      v-if="mode === 'light'"
      :style="{
        fill: 'black',
      }"
    />
    <MoonIcon
      v-else
      :style="{
        fill: 'black',
      }"
    />
  </button>
</template>
<script setup>
import { ref, onMounted } from "vue";
import SunIcon from "./SunIcon.vue";
import MoonIcon from "./MoonIcon.vue";
import applyMode from "./applyMode";

const mode = ref("dark");

const setModule = () => {
  mode.value = mode.value === "light" ? "dark" : "light";
  localStorage.setItem("themeMode", mode.value);
  applyMode(mode.value);
};

onMounted(() => {
  const themeMode = localStorage.getItem("themeMode") || "auto";
  if (themeMode === "auto") {
    window.matchMedia("(prefers-color-scheme: dark)").addListener(() => {
      applyMode(themeMode);
    });
    window.matchMedia("(prefers-color-scheme: light)").addListener(() => {
      applyMode(themeMode);
    });
    return;
  }
  mode.value = themeMode;
  applyMode(mode.value);
});
</script>

<style scoped lang="scss">
.color-picker {
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  padding: 0.05rem;
}
</style>
