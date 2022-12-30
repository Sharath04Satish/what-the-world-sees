import React, { useEffect, useState } from "react";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Newspaper from "@mui/icons-material/Newspaper";
import Translate from "@mui/icons-material/Translate";
import Home from "@mui/icons-material/Home";
import { Link, useLocation } from "react-router-dom";

const Header = (props) => {
  const [isHomePageVisible, setIsHomePageVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location && location.pathname) {
      if (location.pathname !== "/") {
        setIsHomePageVisible(true);
      } else {
        setIsHomePageVisible(false);
      }
    }
  }, [location.pathname]);

  return (
    <div className="flex justify-between bg-gray-100 px-10 py-3">
      <div class="flex-none mr-8 cursor-pointer header-icon">
        {isHomePageVisible && (
          <Link to="/">
            <Home />
            <span className="ml-3 text-sm text-gray-600 ">Home</span>
          </Link>
        )}
      </div>
      <div class="flex justify-end">
        <Link to="/photography">
          <div class="flex-none mr-8 cursor-pointer header-icon">
            <PhotoCamera />
            <span className="ml-3 text-sm text-gray-600 ">Photography</span>
          </div>
        </Link>
        <Link to="/newsletter">
          <div class="flex-none mr-8 cursor-pointer header-icon">
            <Newspaper />
            <span className="ml-3 text-sm text-gray-600 ">Newsletter</span>
          </div>
        </Link>
        <Link to="/miscellaneous">
          <div class="flex-none cursor-pointer header-icon">
            <Translate />
            <span className="ml-3 text-sm text-gray-600 ">Miscellaneous</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
