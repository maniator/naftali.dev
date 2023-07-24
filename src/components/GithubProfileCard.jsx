import React from "react";

function loadProfileScript() {
  const script = document.createElement("script");
  script.src = "//cdn.jsdelivr.net/github-cards/latest/widget.js";

  document.body.appendChild(script);
}

const ProfileCard = () => {
  React.useEffect(() => {
    loadProfileScript();
  }, []);
  return (
    <div
      className="github-card"
      data-github="maniator"
      data-width="400"
      data-height="152"
      data-theme="default"
    />
  );
};

export default ProfileCard;
