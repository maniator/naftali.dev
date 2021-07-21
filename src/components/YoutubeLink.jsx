import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import * as C from "../components";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

const imageMap = {
  dlRWNEN1eew: "realLife",
  Pmk8yl3O53U: "observable",
};

const ListItem = styled.li`
  width: calc(50vw - 20px);
  height: calc(50vh - 20px);
  margin: 10px;
  position: relative;

  @media only screen and (max-width: 600px) {
    height: calc(30vh - 20px);
    width: calc(80vw - 20px);
  }
`;

const Link = styled(C.Link)`
  position: relative;
  height: 100%;
  width: 100%;
`;

const Image = styled(BgImage).attrs({
  Tag: "section",
})`
  height: 100%;
  width: 100%;
  position: static !important;

  &,
  &:after,
  &:before {
    background-size: contain !important;
  }
`;

function YoutubeLink({ id, title }) {
  const data = useStaticQuery(graphql`
    {
      realLife: file(relativePath: { eq: "is_this_real_life.webp" }) {
        childImageSharp {
          gatsbyImageData(
            width: 2440
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      observable: file(relativePath: { eq: "observables.webp" }) {
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

  const image = getImage(data[imageMap[id]]);

  return (
    <ListItem>
      <Link href={`//youtu.be/${id}`}>
        <Image
          image={image}
          loading="eager"
          preserveStackingContext
          alt={title}
          title={title}
          fadeIn={`soft`}
          keepStatic
        />
      </Link>
    </ListItem>
  );
}

export default YoutubeLink;
