import React, { useState } from "react";
import { sandboxApi } from "../services/AxiosService";
import { imageService } from "../services/ImageService";
import { ImageModel } from "../Models/Image";
const ImageComponent = (props) => {
  const [url, setUrl] = React.useState("default url");
  let image = new ImageModel();

  const getImage = async () => {
    const res = await sandboxApi.get("images");
    if (res) {
      const newImage = new ImageModel(res.data);
      console.log(newImage);
      image = newImage;
    }
  };

  return (
    <>
      <h1>{url}</h1>
      <button onClick={getImage}>Get Image</button>
      <div>
        <img src={image.image} alt="Image.logo"></img>
      </div>
    </>
  );
};

export default ImageComponent;
