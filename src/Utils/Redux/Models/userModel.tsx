import { createModel } from '@rematch/core';
import { userApi,orderApi } from '../../Constants/api';
import { CartItem } from './cartModel'

export interface ProductSpecification {
  key: string
  value: string
}
export interface User {
  id: string
  tokens: {
    idToken: any
    refreshToken: any
    accessToken: any
    clockDrift: number
  }
}
export interface Profile {
  First_Name: string
  Last_Name: string
  Location: {
    streetName: string
    zipCode: string
    city: string
    state: string
    country: string
  }
  Email: string
}


export interface Order {
  Items: CartItem
  UserId: string
  Created_At: Number
  Updated_At: Number
  Delivery:Profile
}


export interface State {
  user: User | null
  profile: Profile | null
  orderList: Order[] | []
}



export const userModel = createModel({
  state: {
    user:null,
    profile:null,
    orderList:[],
  },
  reducers: {
    // handle state changes with pure functions
    setUser: (state: State, payload: any): State => {
      const { attributes, signInUserSession } = payload

      return {
        ...state,
        user: {
          id: attributes.sub,
          tokens : signInUserSession
        }
      }

    },
    setProfile: (state: State, payload: any): State => {

      return {
        ...state,
        profile: payload
      }

    },
    setOrderList: (state: State, payload: any): State => {

      return {
        ...state,
        orderList: payload
      }

    },
    logoutUser: (state: State, payload: null) => {

      return {
        ...state,
        user: null,
        profile: null,
        orderList: []
      }
    },

  },
  effects: (dispatch: any) => ({

    async asyncSubmitProfile(payload: [string, string][], rootState) {
      if(rootState.userModel.user){
        const id = rootState.userModel.user.id
        const data = await userApi.post('/profile',{
          id,
          entries: payload
        })
        
        return data;
      }
    },
    async asyncSetGuessProfile(payload: [string, string][], rootState) {
      let formObject: any = {}
      payload.forEach(([key,value]) => formObject[key] = value)
      
      const profile = {
        First_Name: formObject.firstName,
        Last_Name: formObject.lastName,
        Location: {
          streetName: formObject.address,
          zipCode: formObject.zipCode,
          city: formObject.city,
          state: formObject.state,
          country: formObject.country,
        },
        Email: formObject.email
      }
      this.setProfile(profile)
      return null;
    },
    async asyncGetProfile(payload: any, rootState) {
      
      if(rootState.userModel.user){
      const id = rootState.userModel.user.id
      const result = await userApi.get(`/profile?id=${id}`)

      const { Items } = result.data
      this.setProfile(Items[0])
      return Items[0]
      }
    },

    async asyncSendOrder(payload: any, rootState) {
      if(rootState.userModel.user){
        const id = rootState.userModel.user.id
        await orderApi.post(`/order`,{
          id,
        delivery: rootState.userModel.profile,
        items: rootState.cartModel.cartMap,
        })
      }else {
        await orderApi.post(`/order`,{
          id:'Guest',
        delivery: rootState.userModel.profile,
        items: rootState.cartModel.cartMap,
        })
      }
      const emptyCart = dispatch.cartModel.emptyCart
      emptyCart()
    },
    async asyncGetOrder(payload: any, rootState) {
      if(rootState.userModel.user){

        const id = rootState.userModel.user.id
        const result = await orderApi.get(`/order?id=${id}`)
        const { Items } = result.data

        this.setOrderList(Items)
        return Items
      }
    },

    async logOut(payload: any, rootState) {
      const emptyCart = dispatch.cartModel.emptyCart
      emptyCart()
      this.logoutUser()
    },

  }),

})



