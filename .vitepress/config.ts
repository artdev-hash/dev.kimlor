import { getPosts, getPostLength } from "./theme/serverUtils";

async function config() {
  return {

    lang: "en-US",
    title: "👓",
    logo: "kl.ico",
    description: "artdev-hash 3.0",
    head: [
      [
        "link",
        {
          rel: "icon",
          type: "image/ico",
          href: "kl.ico",
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
          property: "portfolios",
          content: "Post by Kim Arthur Lorenzo",
        },
      ],
    ],
    // cleanUrls: "with-subfolders",
    lastUpdated: false,
    themeConfig: {
      // repo: dev.kimlor/home",
      logo: "kl.ico",

      search: {
        provider: "local",
      },
      
      docsDir: "/",
      // docsBranch: "master",
      posts: await getPosts(),
      pageSize: 4,
      postLength: await getPostLength(),
      nav: [
        { 
          text: "🏠 Home",
          link: "/",
        },
        {
          text: "🍉 Guide",
          items: [
            {
              text: "🔖 Section",
              link: "/tags",
            },
            {
              text: "📑 Archives",
              link: "/archives",
            },
          ]
        },
        {
          text: "👨‍💻 I am Dev",
          link: "/dev",
        },
        {
          text: "📦 FILES",
          items: [
            {
              text: "🚢 Accomplished",
              link: "/done",
            },
            {
              text: "🚀 Working On",
              link: "/work",
            }
          ]
        }
        
      ],
      socialLinks: [
        { icon: "github", link: "https://github.com/artdev-hash" },
        {
          icon: {
            svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></path>
            </svg>`,
          },
          link: "https://twitter.com/devkimlorenzo",
        },
        {
          icon: {
            svg: `<svg role="img" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20">
            <path d="M874.666667 375.189333V746.666667a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64V375.189333l266.090667 225.6a149.333333 149.333333 0 0 0 193.152 0L874.666667 375.189333zM810.666667 213.333333a64.789333 64.789333 0 0 1 22.826666 4.181334 63.616 63.616 0 0 1 26.794667 19.413333 64.32 64.32 0 0 1 9.344 15.466667c2.773333 6.570667 4.48 13.696 4.906667 21.184L874.666667 277.333333v21.333334L553.536 572.586667a64 64 0 0 1-79.893333 2.538666l-3.178667-2.56L149.333333 298.666667v-21.333334a63.786667 63.786667 0 0 1 35.136-57.130666A63.872 63.872 0 0 1 213.333333 213.333333h597.333334z" ></path>
            </svg>`,
          },
          link: "mailto:dev@lorenzokimarthur.com",
        }
      ],
      aside: false,
    }
  };
}
export default config();
