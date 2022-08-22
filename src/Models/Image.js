export class ImageModel {
  constructor(data) {
    // this syntax is called a ternary operator. It's saying "does data exist? If so, then use it. If not, set to an empty string/string array"
    this.image = data ? data.largeImgUrl : "";
    this.name = data ? data.author : "";
    this.query = data ? data.query : "";
    this.tags = data ? data.tags : [""];
  }
}

// export const Image = {
//   image: "",
//   name: "",
//   query: "",
//   tags: []
// };
