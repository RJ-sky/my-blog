import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Bolg",
  description: "博客",
  base: "/my-blog/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      // { text: "Examples", link: "/markdown-examples" },
      { text: "日常", link: "/daily" },
      { text: "学习", link: "/learn" },
    ],

    // sidebar: [
    //   {
    //     text: "Examples",
    //     items: [
    //       { text: "Markdown Examples", link: "/markdown-examples" },
    //       { text: "Runtime API Examples", link: "/api-examples" },
    //     ],
    //   },
    // ],
    sidebar: {
      "/daily/": [
        {
          text: "日常",
          items: [{ text: "介绍", link: "/daily/" }],
        },
      ],
      "/learn/": [
        {
          text: "学习",
          collapsed: true,
          items: [
            { text: "简介", link: "/learn/" },
            {
              text: "算法",
              items: [
                { text: "简介", link: "/learn/algorithm/" },
                { text: "测试1", link: "/learn/algorithm/testOne" },
              ],
            },
          ],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/RJ-sky" }],
  },
});
