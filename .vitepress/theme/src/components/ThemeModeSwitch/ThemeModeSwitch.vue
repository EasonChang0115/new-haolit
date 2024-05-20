<template>
  <button
    :class="['color-picker']"
    @click="setModule"
    aria-label="theme-switcher"
  >
    <SunIcon
      v-if="globalStore.themeMode === 'light'"
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
import { ref, onMounted, watch } from "vue";
import { useGlobalStore } from "../../store/global";

import SunIcon from "./SunIcon.vue";
import MoonIcon from "./MoonIcon.vue";
import applyMode from "./applyMode";

const globalStore = useGlobalStore();
const setModule = () => {
  const mode = globalStore.themeMode === "light" ? "dark" : "light";
  globalStore.setThemeMode(mode);
  applyMode(mode);
};

onMounted(() => {
  applyMode(globalStore.themeMode);
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
