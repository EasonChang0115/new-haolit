import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HAO Lit 前端",
  description: "紀錄、關注及靈活運用技術，創造自我價值",
  srcDir: "blogs",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "stylesheet", href: "/styles/font-awesome.min.css" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap",
      },
    ],

    ["script", { src: "/js/wow.min.js" }],
    ["script", { src: "/js/isotope.pkgd.min.js" }],
    ["script", { src: "/js/pace.min.js" }],
    ["script", { src: "/js/splitting.min.js" }],
    ["script", { src: "/js/simpleParallax.min.js" }],
  ],
});
