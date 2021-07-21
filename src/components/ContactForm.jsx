import React from "react";
import { useForm } from "@formspree/react";
import * as C from "./index";

function ContactForm() {
  const [state, handleSubmit] = useForm("xpzklvoo");

  if (state.succeeded) {
    return <p>Thanks for contacting me!</p>;
  }

  return (
    <C.Form onSubmit={handleSubmit}>
      <input id="name" type="text" name="name" placeholder="Name" required />
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      <textarea id="message" name="message" placeholder="Message" required />
      <button type="submit" disabled={state.submitting}>
        {" "}
        Send{" "}
      </button>
    </C.Form>
  );
}

export default ContactForm;
