const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    if (node.internal.type === `MarkdownRemark`) {
        const fileNode = getNode(node.parent);
        const slug = createFilePath({
            node,
            getNode,
            basePath: "blog/"
        });

        console.log({ fileNode, slug })

        actions.createNodeField({
            node,
            name: `slug`,
            value: `/blog${slug}`,
        });
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

    const blogPost = path.resolve(`./src/templates/blog-post.js`);
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: blogPost,
            context: {
                slug: node.fields.slug
            },
        })
    })
}
