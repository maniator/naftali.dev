import React from "react";
import * as C from "../components";
import GithubProfileCard from "../components/GithubProfileCard";
import Page from "../components/Page";
import YoutubeLink from "../components/YoutubeLink";

function App() {
  return (
    <Page>
      <C.FlexContainer $flexDirection="column">
        <C.Card $flexBasis="100vw">
          <C.CardHeader>Where I can be found</C.CardHeader>
          <C.CardList>
            <C.CardListItem style={{ minHeight: 100 }}>
              <GithubProfileCard />
            </C.CardListItem>
            <C.CardListItem style={{ minHeight: 100 }}>
              <C.Link href="//stackoverflow.com/users/561731/naftali">
                <img
                  src="//stackoverflow.com/users/flair/561731.png?theme=clean"
                  width="208"
                  height="58"
                  alt="profile for Naftali aka Neal on Stack Exchange, a network of free, community-driven Q&amp;A sites"
                  title="profile for Naftali aka Neal on Stack Exchange, a network of free, community-driven Q&amp;A sites"
                />
              </C.Link>
            </C.CardListItem>
          </C.CardList>
        </C.Card>
        <C.Card $flexBasis="100vw">
          <C.CardHeader> What I do </C.CardHeader>

          <div className="paragraph">
            I build scalable full stack web applications
          </div>
          <div className="paragraph">Father of three amazing boys</div>
        </C.Card>
        <C.Card $flexBasis="100vw">
          <C.CardHeader> Technical Skills </C.CardHeader>

          <div>
            <C.CardSmallHeader> Languages </C.CardSmallHeader>

            <C.FlexContainer $justifyContent="center">
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
        <C.Card $flexBasis="100vw" id="projects">
          <C.CardHeader>Projects</C.CardHeader>
          <C.CardList $flexDirection="column">
            <C.CardListItem>
              <C.Link href="//github.com/maniator/servable">
                servable - a simple observable
              </C.Link>
            </C.CardListItem>
            <C.CardListItem>
              <C.Link href="//github.com/maniator/praetbot">
                praetbot - a slackbot built in node
              </C.Link>
            </C.CardListItem>
            <C.CardListItem>
              <C.Link href="//blipit.net">
                Self playing/talking online baseball game
              </C.Link>
            </C.CardListItem>
          </C.CardList>
        </C.Card>
        <C.Card $flexBasis="100vw">
          <C.CardHeader>Meetup Talks</C.CardHeader>
          <C.CardList $flexDirection="column">
            <YoutubeLink
              id="dlRWNEN1eew"
              title="Let's build our own Observable from nothing to a simple Observable"
            />
            <YoutubeLink
              id="Pmk8yl3O53U"
              title="Let's build our own Observable"
            />
          </C.CardList>
        </C.Card>
      </C.FlexContainer>
    </Page>
  );
}

export default App;
