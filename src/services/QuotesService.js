import { ProxyState } from "../AppState"
import { sandboxApi } from "./AxiosService"

class QuotesService{
  async getQuotes() {
    const res = await sandboxApi.get('quotes')
    ProxyState.quote = res.data
  }

}

export const quotesService = new QuotesService()