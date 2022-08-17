import { ProxyState } from "../AppState"
import { sandboxApi } from "./AxiosService"

class ImageService{
  async getImage() {
    const res = await sandboxApi.get('images')
    console.log('getting the images', res.data)
    ProxyState.image = res.data
  }

}
export const imageService = new ImageService()