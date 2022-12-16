import React from "react";
import Tooltip from "@mui/material/Tooltip";
import ProfileNavigation from "../components/ProfileNavigation";
import profilePicture from "../assets/images/profilePicture.jpg";
import profilePictureCompressed from "../assets/images/profilePictureCompressed.jpg";
import ImagePreviewer from "../components/ImagePreviewer";

const HomePage = (props) => {
  return (
    <div class="grid grid-cols-2 h-[37.5rem]">
      <div className="flex flex-col justify-center px-12 py-10">
        <Tooltip
          title="That's how you say hello in Kannada"
          placement="top-start"
        >
          <h1 className="text-[4rem] title-1 font-bold text-left text-gray-600 object cursor-pointer">
            Namaskara 👋
          </h1>
        </Tooltip>
        <h1 className="text-[3rem] title-2 font-semibold text-left text-gray-400">
          I'm Sharath
        </h1>

        <h2 className="text-lg mt-6 font-medium text-left text-gray-400">
          Developer. Photographer. Designer
        </h2>
        <ProfileNavigation />
      </div>
      <div class="text-justify bg-gray-100 flex items-center justify-center">
        <ImagePreviewer
          imageSrc={profilePicture}
          placeholderSrc={profilePictureCompressed}
          alt="profile-picture"
          width="415px"
          givenClass="rounded-md profile-picture"
          placement="left"
          toolTipTitle="Well, hello there"
        />
      </div>
    </div>
  );
};

export default HomePage;
