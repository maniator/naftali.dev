import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  .repos {
    display: none;
  }

  .error {
    visibility: hidden;

    &::after {
      content: "@maniator on Github";
      display: block;
      visibility: initial;
    }
  }
`;

const ProfileCard = () => {
  const [cardApiLoaded, setCardApiLoaded] = useState(false);

  useEffect(() => {
    let timer;
    if (typeof window !== "undefined") {
      timer = global.setInterval(() => {
        if (global.GitHubCard) {
          global.clearInterval(timer);
          setCardApiLoaded(true);
        }
      }, 500);
    }

    return () => {
      global.clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined" && cardApiLoaded) {
      let widget = new global.GitHubCard({
        username: "maniator",
        template: "#profile-card",
        sortBy: "updateTime",
        maxRepos: 0,
        hideTopLanguages: true
      });
  
      widget.init();
    }
  }, [cardApiLoaded]);

  return (
    <Card>
      <div id="profile-card" />
    </Card>
  );
};

export default ProfileCard;
