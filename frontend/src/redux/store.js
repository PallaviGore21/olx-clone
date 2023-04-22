import {configureStore} from '@reduxjs/toolkit'
import ProductsSlice from './products/ProductsSlice'
import registerSlice from './signup/registerSlice'
import userSlice from './userProfile/profileSlice'

const store = configureStore({
   reducer:{
     allproducts : ProductsSlice,
      allusers: registerSlice,
      userprofile: userSlice
   }
})
export default store