const pageTitle = "Naftali Lubin (@maniator)";
const siteUrl =
  process.env.APP_ENV === "development"
    ? "http://localhost:8000"
    : "https://naftali.lubin.dev";

const devPlugins = [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `dev_blog`,
      path: "./src/dev_blog/",
    },
    __key: "dev_blog",
  },
];
const plugins = [
  "gatsby-plugin-catch-links",
  "gatsby-plugin-styled-components",
  "gatsby-plugin-image",
  {
    resolve: "gatsby-plugin-google-gtag",
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        "G-BVXGW4V2JT", // Google Analytics / GA
        "GTM-TBLCVT8", // GTM
      ],
      // This object is used for configuration specific to this plugin
      pluginConfig: {
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
  },
  "gatsby-plugin-react-helmet",
  "gatsby-plugin-sitemap",
  {
    resolve: `gatsby-plugin-disqus`,
    options: {
      shortname: `naftalilubin`,
    },
  },
  {
    resolve: "gatsby-plugin-manifest",
    options: {
      icon: "static/images/rubber_ball.jpeg",
    },
  },
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: "./src/images/",
    },
    __key: "images",
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `blog`,
      path: "./src/blog/",
    },
    __key: "blog",
  },
  ...(process.env.NODE_ENV !== "production" ? devPlugins : []),
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 756,
          },
        },
        {
          resolve: `gatsby-remark-responsive-iframe`,
          options: {
            wrapperStyle: `margin-bottom: 1.0725rem`,
          },
        },
        `gatsby-remark-external-links`,
        `gatsby-remark-copy-linked-files`,
        `gatsby-remark-smartypants`,
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: "language-",
            inlineCodeMarker: null,
            aliases: {
              sh: "bash",
            },
            showLineNumbers: true,
            noInlineHighlight: false,
          },
        },
        {
          resolve: `gatsby-remark-classes`,
          options: {
            classMap: {
              "heading[depth=1]": "title",
              "heading[depth=2]": "subtitle",
              paragraph: "paragraph",
              "list[ordered=false]": "list",
              "list[ordered=true]": "numbered-list",
              listItem: "list-item",
            },
          },
        },
      ],
    },
  },
];

module.exports = {
  siteMetadata: {
    title: pageTitle,
    titleTemplate: `%s · ${pageTitle}`,
    siteUrl,
    description: `
Naftali Lubin is a Software Engineer in New York
who builds scalable full stack web applications
with over 13 years of experience

Father of three amazing boys
    `.trim(),
    twitterUsername: "@maniator",
    image: "/images/rubber_ball.jpeg",
  },
  plugins,
};
