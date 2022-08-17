import React from 'react'
import { ProxyState } from '../AppState'


import { quotesService } from '../services/QuotesService'



class QuoteComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {quote: ProxyState.quote}
    this.getQuotes()
    
  }
  async getQuotes() {
    try {
      await quotesService.getQuotes()
    } catch (error) {
     console.log('error')
      // Pop.toast(error.message, 'error')
    }
  }
  render(){
   
    
    return (
      <div className='row flex-column'>
        <div className='text-center'>
       {this.state.quote.content}
        </div>
        <p className='text-center'>{this.state.quote.author}</p>
  
      </div>
    )
  }
}
export default QuoteComponent;
