import styled from "styled-components";
import { blue, CardHeader, grey } from "../index";
import { Link as GLink } from "gatsby";

export const PostsContainer = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  margin: 20px;
`;

export const PostPreview = styled.article.attrs({
  itemScope: true,
  itemType: "http://schema.org/Article",
})`
  display: grid;
  grid-template-columns: 16px 1fr 20px 2fr 16px;
  grid-template-areas: ". title . content .";
`;

export const StyledPost = styled.article.attrs({
  itemScope: true,
  itemType: "http://schema.org/Article",
})`
  display: grid;
  margin: 20px;
  max-width: 100vw;
  overflow: hidden;
  grid-template-rows: 20px auto 10px auto 10px auto 20px;
  grid-template-areas:
    "."
    "title"
    "."
    "content"
    "."
    "comment";
`;

export const PostHeader = styled.header`
  margin: 0;
  position: relative;
  grid-area: title;
`;
export const PostLink = styled(CardHeader).attrs({
  as: GLink,
  itemProp: "url",
  $paddingBottom: "none",
})`
  &:after {
    margin: 0 0 16px;
  }

  &:visited {
    color: ${blue};
  }

  &:active,
  &:focus,
  &:hover {
    color: ${grey};

    &:after {
      border-color: ${blue};
    }
  }
`;
export const PostDate = styled.h5``;
export const PostExcerpt = styled.main`
  margin: 0;
  position: relative;
  grid-area: content;
`;

export const PostComments = styled.footer`
  grid-area: comment;
`;
