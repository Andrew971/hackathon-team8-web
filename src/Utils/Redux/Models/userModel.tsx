import { createModel } from '@rematch/core';
import { userApi,orderApi } from '../../Constants/api';
import { CartItem } from './cartModel'
import { Auth } from 'aws-amplify'

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
  
    async signIn(payload: any, rootState) {
      
      const user = await Auth.signIn('andrew.entreprise@gmail.com', 'Littleswak971')
      console.log('user',user)
      this.setUser(user)
      return user
      
    },

    async signUp(payload: any, rootState) {
      console.log('payload', payload)
      const signUpprocess = await Auth.signUp({
        username: payload.username,
        password: payload.password,
        validationData: [ ]  //optional
      })
      return signUpprocess
      
    },

    async confirmationCode(payload: any, rootState) {
      
      const signUpprocess = await Auth.confirmSignUp(payload.username, payload.code, {
        forceAliasCreation: true
      })
      return signUpprocess
      
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



    async logOut(payload: any, rootState) {
      const emptyCart = dispatch.cartModel.emptyCart
      emptyCart()
      this.logoutUser()
    },

  }),

})



