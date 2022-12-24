import React from "react";

import devDotToIcon from "../images/socials/devdotto.svg";
import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";
import instagramIcon from "../images/socials/instagram.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import mediumIcon from "../images/socials/medium.svg";
import twitterIcon from "../images/socials/twitter.svg";
import youTubeIcon from "../images/socials/youtube.svg";

const Footer = () => {
  const info = {
    name: "Amaya Lucas",
    title: "Full Stack Web Developer",
    email: "amayajlucas@gmail.com",
    gitHub: "ajluc",
    instagram: "",
    linkedIn: "amaya-lucas",
    medium: "",
    twitter: "",
    youTube: "",
  };

  return (
    <div className="dark" id="contact">
      <div style={{
          padding: '10px',
          display: "flex",
          justifyContent: "center",
          gap: "2.5rem",}}>
        {info.email && (
          <a href={`mailto:${info.email}`}>
            <img src={envelopeIcon} alt="email" className="socialIcon" />
          </a>
        )}
        {info.devDotTo && (
          <a href={`https://dev.to/${info.devDotTo}`} target="_blank" rel="noopener noreferrer">
            <img src={devDotToIcon} alt="Dev.to" className="socialIcon" />
          </a>
        )}
        {info.gitHub && (
          <a href={`https://github.com/${info.gitHub}`} target="_blank" rel="noopener noreferrer">
            <img src={gitHubIcon} alt="GitHub" className="socialIcon" />
          </a>
        )}
        {info.instagram && (
          <a
            href={`https://www.instagram.com/${info.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" className="socialIcon" />
          </a>
        )}
        {info.linkedIn && (
          <a
            href={`https://www.linkedin.com/in/${info.linkedIn}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" />
          </a>
        )}
        {info.medium && (
          <a href={`https://medium.com/@${info.medium}`} target="_blank" rel="noopener noreferrer">
            <img src={mediumIcon} alt="Medium" className="socialIcon" />
          </a>
        )}
        {info.twitter && (
          <a href={`https://twitter.com/${info.twitter}`} target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" className="socialIcon" />
          </a>
        )}
        {info.youTube && (
          <a
            href={`https://www.youtube.com/c/${info.youTube}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youTubeIcon} alt="YouTube" className="socialIcon" />
          </a>
        )}
      </div>
    </div>
  )
}

export default Footer
