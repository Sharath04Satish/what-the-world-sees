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
        <a href="https://twitter.com/iAmNerfect" target={"_blank"}>
          <img
            className="cursor-pointer social-icon"
            src={twitter}
            width="30px"
          />
        </a>
      </Tooltip>
      <Tooltip title="500px">
        <a href="https://500px.com/sharaths1998" target={"_blank"}>
          <img
            className="cursor-pointer social-icon"
            src={fivehundrerpx}
            width="30px"
          />
        </a>
      </Tooltip>
      <Tooltip title="Github">
        <a href="https://github.com/Sharath04Satish" target={"_blank"}>
          <img
            className="cursor-pointer social-icon"
            src={github}
            width="30px"
          />
        </a>
      </Tooltip>
      <Tooltip title="Dribbble">
        <a href="https://dribbble.com/sharathezihan" target={"_blank"}>
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
