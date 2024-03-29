import React from "react";
import { graphql } from "gatsby";
import Page from "../../components/Page";
import { Post } from "../../components/blog/Post";
import {
  PostDate,
  PostHeader,
  StyledPost,
} from "../../components/blog/components";
import Footer from "../../components/blog/Footer";
import { CardHeader } from "../../components";

export default function BlogPost({ data }) {
  const {
    markdownRemark: {
      id: postId,
      html: postHtml,
      excerpt: postExcerpt,
      frontmatter: { title: postTitle, date: postDate, originalDate },
    },
    site: {
      siteMetadata: { siteUrl },
    },
  } = data;

  return (
    <Page
      title={postTitle}
      description={postExcerpt}
      pageType="article"
      footer={<Footer siteUrl={siteUrl} postId={postId} />}
    >
      <StyledPost>
        <PostHeader>
          <CardHeader as="h2" itemProp="headline">
            {postTitle}
          </CardHeader>
          <PostDate title={originalDate}>{postDate}</PostDate>
        </PostHeader>
        <Post html={postHtml} />
      </StyledPost>
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
      excerpt
      frontmatter {
        date(fromNow: true)
        originalDate: date
        path
        title
        tags
      }
    }
  }
`;
