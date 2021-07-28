import styled from "styled-components";
import { blue, CardHeader, grey } from "../index";
import { Link as GLink } from "gatsby";

export const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export const PostHeader = styled.header`
  margin: 0;
  position: relative;
  grid-area: title;
  width: 100%;
`;

export const PostPreview = styled.article.attrs({
  itemScope: true,
  itemType: "http://schema.org/Article",
})`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 16px auto 20px auto 16px;

  ${PostHeader} {
    grid-column: initial;
    grid-row: 2;
  }
`;

export const StyledPost = styled.article.attrs({
  itemScope: true,
  itemType: "http://schema.org/Article",
})`
  display: grid;
  position: relative;
  grid-template-rows: 20px auto 10px auto 10px auto 20px;
  grid-template-columns: 95vw;
  grid-template-areas:
    "."
    "title"
    "."
    "content"
    "."
    "comment";
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
  grid-column: initial;
  grid-row: 4;
`;

export const PostComments = styled.div`
  grid-area: comment;
`;
