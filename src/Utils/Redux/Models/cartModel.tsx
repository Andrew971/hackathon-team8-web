import { createModel } from '@rematch/core';
import { SearchItem } from './searchModel'

export interface CartItem {
  id: string
  item : SearchItem
  quantity : number
}
export interface CartMap {
  [Key: string]: CartItem
}
export interface State {
  cart: [string, CartItem][]
  cartMap: CartMap
}


export const cartModel = createModel({
  state: {
    cart: [],
    cartMap:{}
  }, 
  reducers: {
    // handle state changes with pure functions
    addToCart : (state:State, payload:CartItem): State => {

      const isProductInCart = state.cartMap[payload.id] ? true : false

      const cartMap = isProductInCart
      ? {
          ...state.cartMap,
          [payload.id]: {
            ...state.cartMap[payload.id],
            quantity: state.cartMap[payload.id].quantity + payload.quantity
          }
      }
      : {
        ...state.cartMap,
        [payload.id]: payload
    }

    if(payload){
        return {
          ...state,
          cart: Object.entries(cartMap),
          cartMap
        } 
    } else {
      return state
    }

    },
    emptyCart : (state:State, payload:number) =>{
      // console.log(payload)
      return {
        ...state,
        cart:[],
        cartMap:{}
      }
    },
    removeItemFromCart : (state:State, payload:CartItem) =>{

      const cartMap = {
          ...state.cartMap,
          [payload.id]: {
            ...state.cartMap[payload.id],
            quantity: state.cartMap[payload.id].quantity - payload.quantity
          }
      }
      const isQuantityBelowZero = cartMap[payload.id].quantity < 1 ? true : false
      
      isQuantityBelowZero && delete cartMap[payload.id]
      

      if(payload){
        return {
          ...state,
          cart: Object.entries(cartMap),
          cartMap
        } 
    } else {
      return state
    }
  }
  },
  // effects: (dispatch: any) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    // async asyncSetLoadingProgress(payload:number, rootState:iRootState) {
    // console.log(payload)
      // this.setLoadingProgress(payload)
    // },
  
  // }),
  selectors: (slice) => ({

    total() {
      return slice(
        (state:any) => state.cart.reduce(
          (a:number, b:[string, CartItem]) =>{

            const { item, quantity } = state.cartMap[b[0]]
            return a + (parseFloat(item.Retail_Price) * quantity)
          }, 0)
      )
    }
  
  }),
})



