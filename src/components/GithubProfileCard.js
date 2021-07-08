import React, { useEffect } from "react";
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
  useEffect(() => {
    if (typeof window !== "undefined" && global.GitHubCard) {
      function loadProfileCard () {
        let widget = new global.GitHubCard({
          username: "maniator",
          template: "#profile-card",
          sortBy: "updateTime",
          maxRepos: 0,
          hideTopLanguages: true
        });
    
        widget.init();
      }

      loadProfileCard();
    }
  }, []);

  return (
    <Card>
      <div id="profile-card" />
    </Card>
  );
};

export default ProfileCard;
