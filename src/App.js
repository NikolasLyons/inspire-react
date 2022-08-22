import React from "react";
import { ProxyState } from "./AppState";
import ImageComponent from "./components/ImageComponent";
import QuoteComponent from "./components/QuoteComponent";
import { imageService } from "./services/ImageService";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.state = { img: ProxyState.image };
//     this.getImage();
//   }

// return (
//   <>
//     <div style={myStyle}>
//       <ImageComponent />
//     </div>
//   </>
// );
// render() {
//   const myStyle = {
//     backgroundImage: `url('${this.setState()}')`,
//     height: "100vh",
//     marginTop: "-70px",
//     fontSize: "50px",
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//   };
//   }
// }

const App = () => {
  return <ImageComponent></ImageComponent>;
};

export default App;
