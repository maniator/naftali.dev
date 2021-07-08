import React from "react";
import { graphql, useStaticQuery } from 'gatsby'
import styled from "styled-components";
import BackgroundImage from 'gatsby-background-image';
import * as C from "../components";

const imageMap = {
    dlRWNEN1eew: "realLife",
    Pmk8yl3O53U: "observable"
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
`

const Image = styled(BackgroundImage).attrs({
 Tag: "section"
})`
    height: 100%;
    width: 100%;
    position: static !important;

    &, &:after, &:before {
        background-size: contain !important;
    }
`;

function YoutubeLink ({ id, title }) {
    const data = useStaticQuery(
        graphql`
            query {
                realLife: file(relativePath: { eq: "is_this_real_life.webp" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 2440) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                },
                observable: file(relativePath: { eq: "observables.webp" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 2440) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                },
            }
        `
    );

    const imageData = data[imageMap[id]].childImageSharp.fluid;

    return (
        <ListItem>
            <Link href={`//youtu.be/${id}`}>
                <Image
                    fluid={imageData}
                    objectFit="contain"
                    alt={title}
                    title={title}
                    fadeIn={`soft`}
                />
            </Link>
        </ListItem>
    );
}

export default YoutubeLink;
