import * as C from "../components";
import ContactForm from "../components/ContactForm";
import React from "react";
import Page from "../components/Page";

const ContactPage = () => (
  <Page>
    <C.FlexContainer>
      <C.Card flexBasis="100vw">
        <C.CardHeader>Get in touch</C.CardHeader>
        <ContactForm />
      </C.Card>
    </C.FlexContainer>
  </Page>
);

export default ContactPage;
