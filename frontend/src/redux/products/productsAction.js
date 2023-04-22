import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const AddProductionAction = createAsyncThunk("products/add", async productData =>{
    try {
        const {data} = await axios.post("http://localhost:5000/Productsdata", productData)
        return data
    } catch (error) {
        return error.message
    }
})

export const getProductionAction = createAsyncThunk("products/get", async productData =>{
    try {
        const {data} = await axios.get("http://localhost:5000/Productsdata", productData)
        return data
    } catch (error) {
        return error.message
    }
})

export const getSingleProductAction = createAsyncThunk("single/get", async(id) =>{
    try {
        const {data} = await axios.get(`http://localhost:5000/Productsdata/${id}`)
        return data
    } catch (error) {
        return error.message
    }
})

