import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { AppHeader } from "."


function Header () {
    const { headerImage } = useStaticQuery(
        graphql`
            query {
                headerImage: file(relativePath: { eq: "header.png" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 2440, maxHeight: 1040) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `
    )
    const imageData = headerImage.childImageSharp.fluid

    return (
        <AppHeader
          Tag="header"
          fluid={[
              "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.55))",
              imageData,
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
