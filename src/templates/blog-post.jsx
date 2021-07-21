import React from "react";
import { graphql } from "gatsby";
import * as C from "../components";
import Page from "../components/Page";

export default function BlogPost({ data }) {
  const post = data.markdownRemark;

  return (
    <Page>
      <C.FlexContainer as="main">
        <C.Card flexBasis="100vw" centered={false}>
          <C.CardHeader>{post.frontmatter.title}</C.CardHeader>
          <C.SmallHeader>{post.frontmatter.date}</C.SmallHeader>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </C.Card>
      </C.FlexContainer>
    </Page>
  );
}
export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(fromNow: true)
      }
    }
  }
`;
