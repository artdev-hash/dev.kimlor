import { getPosts, getPostLength } from "./theme/serverUtils";

async function config() {
  return {
    lang: "en-US",
    title: " ",
    description: "artdev-hash 3.0",
    head: [
      [
        "link",
        {
          rel: "icon",
          type: "image/ico",
          href: "kal.ico",
        },
      ],
      [
        "meta",
        {
          name: "author",
          content: "Kim Arthur Lorenzo",
        },
      ],
      [
        "meta",
        {
          property: "project:title",
          content: "DocsDocs",
        },
      ],
      [
        "meta",
        {
          property: "project:description",
          content: "Docs by Kim Arthur Lorenzo",
        },
      ],
    ],
    // cleanUrls: "with-subfolders",
    lastUpdated: false,
    themeConfig: {
      // repo: dev.kimlor/home",
      base: '/dev.kimlor/',
      logo: "kal.ico",
      docsDir: "/",
      // docsBranch: "master",
      posts: await getPosts(),
      pageSize: 4,
      postLength: await getPostLength(),
      nav: [
        {
          text: "🏠 Latest",
          link: "/",
        },
        {
          text: "🔖 Section",
          link: "/tags",
        },
        {
          text: "📃 Archives",
          link: "/archives",
        },
        {
          text: "👨‍💻 Dev",
          link: "/dev",
        },
        {
          text: "👨‍💻 Works",
          link: "/work",
        }
      ],
      socialLinks: [
        { icon: "github", link: "https://github.com/artdev-hash" },
        { icon: "twitter", link: "https://twitter.com/devkimlorenzo" },
        {
          icon: {
            svg: `<svg role="img" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20">
            <path d="M874.666667 375.189333V746.666667a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64V375.189333l266.090667 225.6a149.333333 149.333333 0 0 0 193.152 0L874.666667 375.189333zM810.666667 213.333333a64.789333 64.789333 0 0 1 22.826666 4.181334 63.616 63.616 0 0 1 26.794667 19.413333 64.32 64.32 0 0 1 9.344 15.466667c2.773333 6.570667 4.48 13.696 4.906667 21.184L874.666667 277.333333v21.333334L553.536 572.586667a64 64 0 0 1-79.893333 2.538666l-3.178667-2.56L149.333333 298.666667v-21.333334a63.786667 63.786667 0 0 1 35.136-57.130666A63.872 63.872 0 0 1 213.333333 213.333333h597.333334z" ></path>
            </svg>`,
          },
          link: "mailto:kim.dev.pr@gmail.com",
        },
      ],
      // outline: 2, //设置右侧aside显示层级
      aside: false,
    }
  };
}
export default config();
