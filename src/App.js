
import React from 'react';

import ReactDOM from 'react-dom';
import './App.css';
import QuoteComponent from './components/QuoteComponent';

// function App() {
//   return (
//     <div className="App container-fluid">
//     <QuoteComponent />
    
//     </div>
//   );
// }

class App extends React.Component{
  // constructor(){
  //   super()
  // }
  render(){
    return(
      <div>
        <QuoteComponent />
      </div>
    )  
    }
}


export default App;
