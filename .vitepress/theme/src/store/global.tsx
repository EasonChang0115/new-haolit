import { defineStore } from "pinia";

export const useGlobalStore = defineStore("globalSetting", {
  state: () => ({
    themeMode: localStorage.getItem("themeMode") || "auto",
  }),
  actions: {
    setThemeMode(theme: string) {
      console.log(theme);
      this.themeMode = theme;
      localStorage.setItem("themeMode", theme);
    },
  },
});
