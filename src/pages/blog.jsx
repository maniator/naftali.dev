import React from "react";
import { graphql, Link } from "gatsby";
import Page from "../components/Page";
import {
  PostPreview,
  PostDate,
  PostExcerpt,
  PostHeader,
  PostLink,
  PostsContainer,
} from "../components/blog/components";

const BlogIndex = ({ data }) => {
  const {
    blog: { posts },
  } = data;

  return (
    <Page title="All Posts">
      <PostsContainer>
        {posts.map((post) => {
          const title = post.frontmatter.title;

          return (
            <PostPreview key={post.id} className="post-list-item">
              <PostHeader as="header">
                <PostLink
                  as={Link}
                  to={post.frontmatter.path}
                  itemProp="url"
                  $paddingBottom="none"
                >
                  <h2 itemProp="headline">{title}</h2>
                </PostLink>
                <PostDate title={post.frontmatter.originalDate}>
                  {post.frontmatter.date}
                </PostDate>
              </PostHeader>
              <PostExcerpt
                dangerouslySetInnerHTML={{
                  __html: post.excerpt,
                }}
                itemProp="description"
              />
            </PostPreview>
          );
        })}
      </PostsContainer>
    </Page>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    blog: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      posts: nodes {
        id
        excerpt
        frontmatter {
          date(fromNow: true)
          originalDate: date
          title
          path
        }
      }
    }
  }
`;
