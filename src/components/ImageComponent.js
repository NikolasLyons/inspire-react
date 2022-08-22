import React, { useState } from "react";
// import { sandboxApi } from "./AxiosService.js";

import { imageService } from "../services/ImageService";
const getImage = () => {
  console.log("getting image");
};
const ImageComponent = (props) => {
  const [url, setUrl] = React.useState("default url");

  return (
    <>
      <h1>{url}</h1>
      <button onClick={getImage()}>Get Image</button>
    </>
  );
};

export default ImageComponent;
