import { createModel } from '@rematch/core';
import { productApi } from '../../Constants/api';

export interface ProductSpecificatoion {
  key: string
  value: string
}
type String = {
  S:string
}
export interface SearchItem {
  ProductId: string
  Brand: string
  Image: String[]
  Retail_Price: string
  Discounted_Price: string
  Product_Name: string
  Product_Description: string
  Product_Specifications: ProductSpecificatoion[]
  Product_Category: String[]
  Product_UniqueId: string
  Product_Pid: string
  Extra_Field: any
}
export interface SearchResultType {
  _index: string
  _type: string
  _id: string
  score: number
  _source: SearchItem
}

export interface State {
  paginatedResult: SearchResultType[]
  limit: number
  resultSize: number
  // Config: typeof config,
}

interface SearchParams {
  term: string
  page: number
}

interface SearchPayloadType {
  result: SearchResultType[],
  resultSize: number,
}
export const searchModel = createModel({
  state: {
    paginatedResult: [],
    resultSize: 0,
    limit: 30
    // Config: config
  },
  reducers: {
    // handle state changes with pure functions
    setSearchResult: (state: State, payload: SearchPayloadType): State => {
      const { result, resultSize } = payload

      return {
        ...state,
        paginatedResult: result,
        resultSize
      }

    },
    cleanUpSearch: (state: State, payload: number) => {
      return {
        ...state,
        paginatedResult: [],
        resultSize: 0
      }
    },

  },
  effects: (dispatch: any) => ({

    async asyncSearch(payload: SearchParams, rootState) {
      const { searchModel: { limit } } = rootState
      const { term, page } = payload
      const queryFrom = (page - 1 ) * rootState.searchModel.limit
      const result = await productApi.post(`/search`,{
        "from": queryFrom,
        "size": limit,
        "query": {
          "multi_match": {
            "query": term,
            "fields": ["Product_Name^4", "Product_Description^2", "Product_Category", "Product_Specifications", "Brand^3"]
          }
        }
      })

      const { hits:{hits, total} } = result.data.body


      this.setSearchResult({
        result: hits,
        resultSize: total,
      })
    },

  }),

})



