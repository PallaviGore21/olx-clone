import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const updateUserProfile = createAsyncThunk("single/get", async(userData) =>{
    try {
        const {data} = await axios.put(`http://localhost:5000/Productsdata/${userData}`, userData)
        return data
    } catch (error) {
        return error.message
    }
})

export const DeleteUserProfile = createAsyncThunk("single/get", async(userId) =>{
    try {
        const {data} = await axios.delete(`http://localhost:5000/Productsdata/${userId}`)
        return data
    } catch (error) {
        return error.message
    }
})
