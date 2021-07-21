import React from "react";
import { graphql } from "gatsby";
import Page from "../../components/Page";
import * as C from "../../components";
import { Post } from "../../components/blog/Post";

export default function BlogPost({ data }) {
  const post = data.markdownRemark;

  return (
    <Page>
      <C.FlexContainer as="main">
        <C.Card flexBasis="100vw" centered={false}>
          <C.CardHeader>{post.frontmatter.title}</C.CardHeader>
          <C.SmallHeader>{post.frontmatter.date}</C.SmallHeader>
          <Post dangerouslySetInnerHTML={{ __html: post.html }} />
        </C.Card>
      </C.FlexContainer>
    </Page>
  );
}
export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(fromNow: true)
        path
        title
        tags
      }
    }
  }
`;
