import React from "react";
import * as C from "../components";
import GithubProfileCard from "../components/GithubProfileCard";
import {Helmet} from "react-helmet";
import ContactForm from "../components/ContactForm";

function App() {
  return (
    <C.Page>
      <Helmet>
        <title>Naftali Lubin (@maniator)</title>
        <link rel="preload" href="//fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800,900&display=swap" as="style" />
        <link rel="preload" href="//cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" as="style" />

        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800,900&display=swap" />
        <link rel="stylesheet" href="//cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </Helmet>
      <C.AppHeader>
        <h2>Naftali Lubin</h2>
        <small>Full Stack Software Engineer</small>
        <div className="after" />
      </C.AppHeader>
      <C.FlexContainer>
        <C.Card flexBasis="100vw">
          <C.CardHeader>Where I can be found</C.CardHeader>
          <C.CardList>
            <li>
              <GithubProfileCard />
            </li>
            <li>
              <C.HeaderLink href="http://ctrlitall.com">
                <img
                  src="https://stackexchange.com/users/flair/271284.png?theme=clean"
                  width="208"
                  height="58"
                  alt="profile for Naftali aka Neal on Stack Exchange, a network of free, community-driven Q&amp;A sites"
                  title="profile for Naftali aka Neal on Stack Exchange, a network of free, community-driven Q&amp;A sites"
                />
              </C.HeaderLink>
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

            {/* TODO Put names under all logos (and download the images (svgs) for use on site in the future */}
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
              <C.HeaderLink href="https://github.com/maniator/servable">
                servable - a simple observable
              </C.HeaderLink>
            </li>
            <li>
              <C.HeaderLink href="https://github.com/maniator/praetbot">
                praetbot - a slackbot built in node
              </C.HeaderLink>
            </li>
            <li>
              <C.HeaderLink href="https://blipit.net">
                Self playing/talking online baseball game
              </C.HeaderLink>
            </li>
          </C.CardList>
        </C.Card>
        <C.Card flexBasis="100vw">
          <C.CardHeader>Meetup Talks</C.CardHeader>
          <C.CardList flexDirection="column">
            <li>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/dlRWNEN1eew"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </li>
            <li>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/Pmk8yl3O53U"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </li>
          </C.CardList>
        </C.Card>
        <C.Card flexBasis="100vw">
          <C.CardHeader>Get in touch</C.CardHeader>
          <ContactForm />
        </C.Card>
      </C.FlexContainer>
    </C.Page>
  );
}

export default App;
