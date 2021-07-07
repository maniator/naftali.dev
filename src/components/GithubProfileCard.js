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
    var widget = new global.GitHubCard({
      username: "maniator",
      template: "#profile-card",
      sortBy: "updateTime",
      maxRepos: 0,
      hideTopLanguages: true
    });

    widget.init();
  }, []);

  return (
    <Card>
      <div id="profile-card" />
    </Card>
  );
};

export default ProfileCard;
