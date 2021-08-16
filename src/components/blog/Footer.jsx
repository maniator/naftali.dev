import { PostComments } from "./components";
import { Disqus } from "gatsby-plugin-disqus";
import React from "react";
import { useLocation } from "@reach/router";

const Footer = ({ postId, siteUrl }) => {
  const { pathname } = useLocation();
  let disqusConfig = {
    url: `${siteUrl + pathname}`,
    identifier: postId,
  };
  return (
    <PostComments>
      <Disqus config={disqusConfig} />
    </PostComments>
  );
};

export default () => null;
