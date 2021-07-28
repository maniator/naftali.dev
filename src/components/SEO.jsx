import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, image, pageType }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata;

  const seo = {
    title: title && titleTemplate.replace("%s", title),
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
    type: pageType || "website",
  };

  return (
    <Helmet
      title={seo.title}
      defaultTitle={defaultTitle}
      htmlAttributes={{ lang: "en" }}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" property="og:image" content={seo.image} />
      <meta property="og:type" content={seo.type} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />

      <meta name="twitter:title" property="og:title" content={seo.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pageType: PropTypes.string,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pageType: "website",
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        defaultImage: image
        twitterUsername
      }
    }
  }
`;
