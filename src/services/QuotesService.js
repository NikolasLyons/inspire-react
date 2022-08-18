import { ProxyState } from "../AppState"
import { Quote } from "../Models/Quote"
import { sandboxApi } from "./AxiosService.js"


class QuotesService{
  async getQuotes() {
    const res = await sandboxApi.get('quotes')
    console.log('this is the ')
    ProxyState.quote = new Quote(res.data)
  }

}

export const quotesService = new QuotesService()