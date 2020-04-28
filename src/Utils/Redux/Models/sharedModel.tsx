import theme from '../../theme';
import { createModel } from '@rematch/core';
// import { productApi } from '../../Constants/constantApi';
// import axios from "axios";
import { RootState } from '../index'
// import config from '../../Constants/moduleConfig'
import { DefaultTheme } from 'styled-components'
export interface State {
  loading:{
    progress:number
    total:number
  },
  Theme: DefaultTheme,
  // Config: typeof config,
}

const model = {
  state: {
    loading:{
      progress:0,
      total:0
  },
  Theme: theme['Main'],
  // Config: config
}, 
  reducers: {
    // handle state changes with pure functions
    setLoadingProgress : (state:State, payload:number) =>{
      // console.log(payload)
      return {
        ...state,
        loading:{
          progress:payload,
          total:0
        }
      }

    },
    setCache : (state:State, payload:number) =>{

      return state
      
    },
    
  },
  effects: (dispatch: any) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async asyncSetLoadingProgress(payload:number, rootState:RootState) {
    // console.log(payload)
      // this.setLoadingProgress(payload)
    },
  
  }),
}

export const sharedModel: typeof model = createModel(model)



