import {sharedModel}  from './sharedModel';
import {cartModel}  from './cartModel';
import {searchModel}  from './searchModel';
import {userModel}  from './userModel';
import { Models } from '@rematch/core'

export interface RootModel extends Models {
  sharedModel: typeof sharedModel
  cartModel: typeof cartModel
  searchModel: typeof searchModel
  userModel: typeof userModel
}

const rootModel: RootModel = { 
  sharedModel, 
  cartModel, 
  searchModel,
  userModel 
}

// add interface to avoid recursive type checking

export default rootModel