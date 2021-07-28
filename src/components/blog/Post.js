import styled from "styled-components";
import React from "react";

const PostElement = styled.section`
  grid-area: content;
  max-width: 100%;
  position: relative;

  [class*="gatsby"] {
    max-width: 100%;
    position: relative;
  }

  .gatsby-highlight-code-line {
    background-color: #feb;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid #f99;
  }

  /**
   * If you already use line highlighting
   */

  /* Adjust the position of the line numbers */
  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding-left: 2.8em;
  }

  /**
   * If you only want to use line numbering
   */

  .gatsby-highlight {
    background-color: #fdf6e3;
    border-radius: 0.3em;
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
  }

  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding: 0;
    padding-left: 2.8em;
    overflow: initial;
  }
`;

export const Post = ({ html }) => (
  <PostElement
    className="blog-post"
    dangerouslySetInnerHTML={{ __html: html }}
  />
);
