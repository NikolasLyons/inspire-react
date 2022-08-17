import { sandboxApi } from "./AxiosService"

class QuotesService{
  async getQuotes() {
    const res = await sandboxApi.get('quotes')
    console.log('we are getting quotes',res.data)
  }

}

export const quotesService = new QuotesService()