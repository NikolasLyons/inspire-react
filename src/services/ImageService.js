import { ProxyState } from "../AppState";
import { sandboxApi } from "./AxiosService.js";
import { ImageModel } from "../Models/Image";

class ImageService {
  async getImage() {
    const res = await sandboxApi.get("images");
    console.log("this is the img", res.data);
    ProxyState.image = new ImageModel(res.data);
  }
}
export const imageService = new ImageService();
