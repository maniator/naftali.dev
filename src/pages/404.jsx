import * as React from "react";
import { Link } from "gatsby";
import * as C from "../components";
import Page from "../components/Page";

const NotFoundPage = () => {
  return (
    <Page title="404 - Not Found">
      <C.FlexContainer>
        <C.Card $flexBasis="100vw">
          <C.CardHeader>Page not found</C.CardHeader>
          <C.CardList $flexDirection="column">
            {process.env.NODE_ENV === "development" ? (
              <li>
                Try creating a page in &nbsp;<code>src/pages/</code>
              </li>
            ) : null}
            <li>
              <C.Link as={Link} to="/">
                Go home
              </C.Link>
            </li>
          </C.CardList>
        </C.Card>
      </C.FlexContainer>
    </Page>
  );
};

export default NotFoundPage;
