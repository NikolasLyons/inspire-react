import React from 'react'
import { quotesService } from '../services/QuotesService'
import { Pop } from '../Utils/Pop'

class QuoteComponent extends React.Component {
  constructor(){
    super()
    
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
        I will place a quote here
  
        </div>
  
      </div>
    )
  }
}
export default QuoteComponent;
