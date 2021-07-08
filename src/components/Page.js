import React from "react";
import * as C from ".";
import {Helmet} from "react-helmet";

function Page ({ children, title }) {
    return (
        <C.Page>
            <Helmet
            htmlAttributes={{
                lang: 'en',
            }}
            >
                <title>{ title ? title : "Naftali Lubin (@maniator)" }</title>
                <meta name="description" content="Naftali Lubin is a Software Engineer in New York" />
                <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />

                <link rel="preload" href="//fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800,900&display=swap" as="style" />
                <link rel="preload" href="//cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" as="style" />
                <link rel="preload" href="//github-profile.com/dist/gh-profile-card.min.js" as="script" />
        
                <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800,900&display=swap" />
                <link rel="stylesheet" href="//cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />

                <script type="text/javascript" src="//github-profile.com/dist/gh-profile-card.min.js" />
            </Helmet>
            <C.AppHeader as="header">
            <h2>Naftali Lubin</h2>
            <small>Full Stack Software Engineer</small>
            <div className="after" />
            </C.AppHeader>
            {children}
        </C.Page>
    );
}

export default Page;
