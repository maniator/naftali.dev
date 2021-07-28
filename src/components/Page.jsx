import React from "react";
import * as C from ".";
import { Helmet } from "react-helmet";
import Header from "./Header";
import SEO from "./SEO";
import GlobalStyles from "./GlobalStyles";
import ContactForm from "./ContactForm";

function Page({ children, footer, ...props }) {
  return (
    <C.Page>
      <GlobalStyles />
      <SEO {...props} />
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

        <link
          rel="preload"
          href="//fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800,900&display=swap"
          as="style"
        />
        <link
          rel="preload"
          href="//cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
          as="style"
        />
        <link
          rel="preload"
          href="//github-profile.com/dist/gh-profile-card.min.js"
          as="script"
        />

        <link
          rel="stylesheet"
          href="//fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800,900&display=swap"
        />
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />

        <script
          defer
          type="text/javascript"
          src="//github-profile.com/dist/gh-profile-card.min.js"
        />
      </Helmet>
      <Header />
      <C.Main>{children}</C.Main>

      <C.Footer>
        {footer || (
          <>
            <C.CardHeader>Get in touch</C.CardHeader>
            <ContactForm />
          </>
        )}
      </C.Footer>
    </C.Page>
  );
}

export default Page;
