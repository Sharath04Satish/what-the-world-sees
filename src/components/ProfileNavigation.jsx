import React from "react";
import Tooltip from "@mui/material/Tooltip";
import twitter from "../assets/icons/twitter.png";
import github from "../assets/icons/github.png";
import fivehundrerpx from "../assets/icons/social.png";
import dribbble from "../assets/icons/dribbble.png";

const ProfileNavigation = (props) => {
  return (
    <div className="flex mt-6 gap-6">
      <Tooltip title="Twitter">
        <a href={process.env.REACT_APP_TWITTER_PROFILE} target={"_blank"}>
          <img
            className="cursor-pointer social-icon"
            src={twitter}
            width="30px"
          />
        </a>
      </Tooltip>
      <Tooltip title="500px">
        <a href={process.env.REACT_APP_500PX_PROFILE} target={"_blank"}>
          <img
            className="cursor-pointer social-icon"
            src={fivehundrerpx}
            width="30px"
          />
        </a>
      </Tooltip>
      <Tooltip title="Github">
        <a href={process.env.REACT_APP_GITHUB_PROFILE} target={"_blank"}>
          <img
            className="cursor-pointer social-icon"
            src={github}
            width="30px"
          />
        </a>
      </Tooltip>
      <Tooltip title="Dribbble">
        <a href={process.env.REACT_APP_DRIBBBLE_PROFILE} target={"_blank"}>
          <img
            className="cursor-pointer social-icon"
            src={dribbble}
            width="30px"
          />
        </a>
      </Tooltip>
    </div>
  );
};

export default ProfileNavigation;
