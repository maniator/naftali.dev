import React from "react";
import { graphql, Link } from "gatsby";
import Page from "../components/Page";
import * as C from "../components";

export default function Blog({ data }) {
  const { posts } = data.blog;

  return (
    <Page>
      <C.FlexContainer as="main">
        <C.Card flexBasis="100vw" centered={false}>
          <C.CardHeader>Posts</C.CardHeader>
          {posts.map((post) => (
            <article key={post.id}>
              <C.Link to={post.frontmatter.path} as={Link} $paddingBottom="0">
                {post.frontmatter.title}
              </C.Link>
              <small>{post.frontmatter.date}</small>
            </article>
          ))}
        </C.Card>
      </C.FlexContainer>
    </Page>
  );
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        id
        frontmatter {
          date(fromNow: true)
          title
          path
        }
      }
    }
  }
`;
