import React from 'react'
import { graphql, useStaticQuery } from "gatsby";
import { AppHeader } from ".";
import { getImage } from "gatsby-plugin-image";

function Header () {
    const { headerImage } = useStaticQuery(graphql`{
  headerImage: file(relativePath: {eq: "header.png"}) {
    childImageSharp {
        gatsbyImageData(
            width: 2440
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
        )
    }
  }
}
`);

    const image = getImage(headerImage);

    return (
        <AppHeader
          Tag="header"
          loading="eager"
          image={[
              "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.55))",
              image,
          ]}
          title="Naftali Lubin"
          id="header"
          role="img"
          aria-label="Header Image"
        >
            <h2>Naftali Lubin</h2>
            <small>Full Stack Software Engineer</small>
        </AppHeader>
    )
}

export default Header;
