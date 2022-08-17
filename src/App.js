
import React from 'react';
import './App.css';
import { ProxyState } from './AppState';
import QuoteComponent from './components/QuoteComponent';
import { imageService } from './services/ImageService';

// function App() {
//   return (
//     <div className="App container-fluid">
//     <QuoteComponent />
    
//     </div>
//   );
// }

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = ProxyState.image
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
    return(
      <div style={{backgroundImage:`url(${this.state.url})` }}>
        <QuoteComponent />
      </div>
    )  
    }
}


export default App;
