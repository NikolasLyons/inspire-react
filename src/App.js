
import React from 'react';
import { ProxyState } from './AppState';
import QuoteComponent from './components/QuoteComponent';
import { imageService } from './services/ImageService';



class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {img: ProxyState.image}
    this.getImage()
  }
  async getImage() {
    try {
      await imageService.getImage()
    } catch (error) {
      console.log('error')
      // Pop.toast(error.message, 'error')
    }
  }
  render(){
    const myStyle={
      backgroundImage: 
`url('${this.setState()}')`,
      height:'100vh',
      marginTop:'-70px',
      fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
  };
    return(
      <div style={myStyle}>

        <QuoteComponent  />
      </div>
    )  
    }
}


export default App;
