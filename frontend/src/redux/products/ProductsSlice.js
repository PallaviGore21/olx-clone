import { createSlice } from "@reduxjs/toolkit";
import { AddProductionAction, getProductionAction, getSingleProductAction } from "./productsAction";

const ProductSlice = createSlice({
    name:"products",
    initialState:{products:[]},
    reducers:{},
    extraReducers(builder){
        builder
        
        .addCase(AddProductionAction.pending, (state,{payload})=>{
            state.loading=false
        })
        .addCase(AddProductionAction.fulfilled, (state,{payload})=>{
            state.loading=false
            state.productsAdded= true 
        })
        .addCase(AddProductionAction.rejected, (state,{payload})=>{
            state.loading=false
            state.error=payload
        })


        .addCase(getProductionAction.pending, (state,{payload})=>{
            state.loading=false
        })
        .addCase(getProductionAction.fulfilled, (state,{payload})=>{
            state.loading=false
            state.products= payload
        })
        .addCase(getProductionAction.rejected, (state,{payload})=>{
            state.loading=false
            state.error=payload
        })


        .addCase(getSingleProductAction.pending, (state,{payload})=>{
            state.loading=false
        })
        .addCase(getSingleProductAction.fulfilled, (state,{payload})=>{
            state.loading=false
            state.SingleProduct= payload
        })
        .addCase(getSingleProductAction.rejected, (state,{payload})=>{
            state.loading=false
            state.error=payload
        })
    }
})
export default ProductSlice.reducer