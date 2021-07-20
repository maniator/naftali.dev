module.exports = {
  siteMetadata: {
    siteUrl: "https://naftali.lubin.dev",
    title: "Naftali Lubin (@maniator)",
  },
  plugins: [
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
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/rubber_ball.jpeg",
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
      "gatsby-transformer-remark"
  ],
};
