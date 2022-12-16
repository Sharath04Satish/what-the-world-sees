import React from "react";
import ProgressiveImage from "react-progressive-graceful-image";
import Tooltip from "@mui/material/Tooltip";

const ImagePreviewer = (props) => {
  return (
    <ProgressiveImage src={props.imageSrc} placeholder={props.placeholderSrc}>
      {(src, loading) => (
        <Tooltip title={props.toolTipTitle} placement={props.placement}>
          <img
            className={`image${loading ? " preview" : " rendered"} ${
              props.givenClass
            }`}
            src={src}
            alt={props.alt}
            width={props.width}
          />
        </Tooltip>
      )}
    </ProgressiveImage>
  );
};

export default ImagePreviewer;
