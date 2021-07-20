import React from "react"
import { graphql, Link } from "gatsby"
import Page from "../components/Page";
import * as C from "../components";

export default function Blog({ data }) {
    const { posts } = data.blog

    return (
        <Page>
            <C.FlexContainer as="main">
                <C.Card flexBasis="100vw">
                    <C.CardHeader>My blog posts</C.CardHeader>
                    {posts.map(post => (
                        <article key={post.id}>
                            <Link to={post.fields.slug}>
                                <h2>{post.frontmatter.title}</h2>
                            </Link>
                            <small>{(new Date(post.frontmatter.date)).toDateString()}</small>
                            <p>{post.excerpt}</p>
                        </article>
                    ))}
                </C.Card>
            </C.FlexContainer>
        </Page>
    )
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
        }
        excerpt
        id
      }
    }
  }
`
