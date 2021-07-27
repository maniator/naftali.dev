import React from "react";
import { graphql } from "gatsby";
import Page from "../../components/Page";
import * as C from "../../components";
import { Post } from "../../components/blog/Post";
import { Disqus } from "gatsby-plugin-disqus";
import { useLocation } from "@reach/router";

export default function BlogPost({ data }) {
  const {
    markdownRemark: {
      id: postId,
      html: postHtml,
      frontmatter: { title: postTitle, date: postDate },
    },
    site: {
      siteMetadata: { siteUrl },
    },
  } = data;
  const { pathname } = useLocation();
  let disqusConfig = {
    url: `${siteUrl + pathname}`,
    identifier: postId,
  };
  return (
    <Page title={postTitle} pageType="article">
      <C.FlexContainer as="main">
        <C.Card flexBasis="100vw" centered={false}>
          <C.CardHeader>{postTitle}</C.CardHeader>
          <C.SmallHeader>{postDate}</C.SmallHeader>
          <Post html={postHtml} />
        </C.Card>
      </C.FlexContainer>
      <C.FlexContainer as="main">
        <C.Card flexBasis="100vw" centered={false}>
          <Disqus config={disqusConfig} />
        </C.Card>
      </C.FlexContainer>
    </Page>
  );
}
export const query = graphql`
  query ($id: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
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
