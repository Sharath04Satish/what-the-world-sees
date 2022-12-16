import React from "react";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Newspaper from "@mui/icons-material/Newspaper";
import Translate from "@mui/icons-material/Translate";
import Home from "@mui/icons-material/Home";

const Header = (props) => {
  return (
    <div className="flex justify-between bg-gray-100 px-10 py-5">
      <div class="flex-none mr-8 cursor-pointer header-icon">
        <Home />
        <span className="ml-3 text-sm text-gray-600 ">Home</span>
      </div>
      <div class="flex justify-end">
        <div class="flex-none mr-8 cursor-pointer header-icon">
          <PhotoCamera />
          <span className="ml-3 text-sm text-gray-600 ">Photography</span>
        </div>
        <div class="flex-none mr-8 cursor-pointer header-icon">
          <Newspaper />
          <span className="ml-3 text-sm text-gray-600 ">Newsletter</span>
        </div>
        <div class="flex-none cursor-pointer header-icon">
          <Translate />
          <span className="ml-3 text-sm text-gray-600 ">Miscellaneous</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
