const pageTitle = "Naftali Lubin (@maniator)";
const siteUrl =
  process.env.APP_ENV === "development"
    ? "http://localhost:8000"
    : "https://naftali.lubin.dev";

module.exports = {
  siteMetadata: {
    title: pageTitle,
    titleTemplate: `%s · ${pageTitle}`,
    siteUrl,
    description: `
Naftali Lubin is a Software Engineer in New York
who builds scalable full stack web applications
with over 10 years of experience

Father of three amazing boys

Husband of one incredible wife
    `.trim(),
    twitterUsername: "@maniator",
    image: "/images/rubber_ball.jpeg",
  },
  plugins: [
    "gatsby-plugin-catch-links",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-BVXGW4V2JT",
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
        path: `${__dirname}/src/blog`,
      },
      __key: "blog",
    },
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
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-prismjs`,
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
  ],
};
