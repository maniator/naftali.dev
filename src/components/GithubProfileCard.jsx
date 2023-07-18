import React from "react";

const ProfileCard = () => {
  return (
    <>
      <div
        className="github-card"
        data-github="maniator"
        data-width="400"
        data-height="152"
        data-theme="default"
      />
      <script src="//cdn.jsdelivr.net/github-cards/latest/widget.js" />
    </>
  );
};

export default ProfileCard;
