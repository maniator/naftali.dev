import React from "react";
import * as C from "../components";
import GithubProfileCard from "../components/GithubProfileCard";
import ContactForm from "../components/ContactForm";
import Page from "../components/Page";
import YoutubeLink from "../components/YoutubeLink";

function App() {
  return (
    <Page>
      <C.FlexContainer as="main">
        <C.Card flexBasis="100vw">
          <C.CardHeader>Where I can be found</C.CardHeader>
          <C.CardList>
            <li>
              <GithubProfileCard />
            </li>
            <li>
              <C.Link href="http://ctrlitall.com">
                <img
                  src="https://stackexchange.com/users/flair/271284.png?theme=clean"
                  width="208"
                  height="58"
                  alt="profile for Naftali aka Neal on Stack Exchange, a network of free, community-driven Q&amp;A sites"
                  title="profile for Naftali aka Neal on Stack Exchange, a network of free, community-driven Q&amp;A sites"
                />
              </C.Link>
            </li>
          </C.CardList>
        </C.Card>
        <C.Card flexBasis="100vw">
          <C.CardHeader> What I do </C.CardHeader>

          <div>
            I build scalable full stack web applications <br />
            Father of three amazing boys <br />
            Husband of one incredible wife
          </div>
        </C.Card>
        <C.Card flexBasis="100vw">
          <C.CardHeader> Technical Skills </C.CardHeader>

          <div>
            <C.CardSmallHeader>Languages</C.CardSmallHeader>

            <C.FlexContainer justifyContent="center">
              <C.TypeLogoContainer>
                <C.TypeLogo className="devicon-javascript-plain" />
                JavaScript
              </C.TypeLogoContainer>
              <C.TypeLogoContainer>
                <C.TypeLogo className="devicon-nodejs-plain" />
                NodeJS
              </C.TypeLogoContainer>
              <C.TypeLogoContainer>
                <C.TypeLogo className="devicon-typescript-plain" />
                TypeScript
              </C.TypeLogoContainer>
              <C.TypeLogoContainer>
                <C.TypeLogo className="devicon-css3-plain" />
                CSS
              </C.TypeLogoContainer>
              <C.TypeLogoContainer>
                <C.TypeLogo className="devicon-mysql-plain" />
                MySQL
              </C.TypeLogoContainer>
              <C.TypeLogoContainer>
                <C.TypeLogo className="devicon-ruby-plain" />
                Ruby
              </C.TypeLogoContainer>
              <C.TypeLogoContainer>
                <C.TypeLogo className="devicon-php-plain" />
                PHP
              </C.TypeLogoContainer>
              <C.TypeLogoContainer>
                <C.TypeLogo className="devicon-python-plain" />
                Python
              </C.TypeLogoContainer>
              <C.TypeLogoContainer>
                <C.TypeLogo className="devicon-go-plain" />
                GoLang
              </C.TypeLogoContainer>
            </C.FlexContainer>
          </div>
          <br />
          <div>
            <C.CardSmallHeader> Libraries </C.CardSmallHeader>
            React, Redux, Rails, Angular, Handlebars, Express, Django, Symfony,
            Backbone, Marionette
          </div>
        </C.Card>
        <C.Card flexBasis="100vw">
          <C.CardHeader>Projects</C.CardHeader>
          <C.CardList flexDirection="column">
            <li>
              <C.Link href="//github.com/maniator/servable">
                servable - a simple observable
              </C.Link>
            </li>
            <li>
              <C.Link href="//github.com/maniator/praetbot">
                praetbot - a slackbot built in node
              </C.Link>
            </li>
            <li>
              <C.Link href="//blipit.net">
                Self playing/talking online baseball game
              </C.Link>
            </li>
          </C.CardList>
        </C.Card>
        <C.Card flexBasis="100vw">
          <C.CardHeader>Meetup Talks</C.CardHeader>
          <C.CardList flexDirection="column">
            <YoutubeLink id="dlRWNEN1eew" title="Let's build our own Observable from nothing to a simple Observable" />
            <YoutubeLink id="Pmk8yl3O53U" title="Let's build our own Observable" />
          </C.CardList>
        </C.Card>
        <C.Card flexBasis="100vw">
          <C.CardHeader>Get in touch</C.CardHeader>
          <ContactForm />
        </C.Card>
      </C.FlexContainer>
    </Page>
  );
}

export default App;
