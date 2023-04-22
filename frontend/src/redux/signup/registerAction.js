import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const addRegisterAction = createAsyncThunk("users/add", async userData => {
    try {
        const { data } = await axios.post("http://localhost:5000/users", userData)
        return data
    } catch (error) {
        return error.message
    }
})

export const getRegisterAction = createAsyncThunk("users/get", async () => {
    try {
        const { data } = await axios.get("http://localhost:5000/users")
        return data
    } catch (error) {
        return error.message
    }
})

export const adduserLoginAction = createAsyncThunk("users/login", async () => {
    try {
        const { data } = await axios.post("http://localhost:5000/users")
        return data
    } catch (error) {
        return error.message
    }
})

export const userLoginAction = createAsyncThunk("users/login", async (loginData) => {
    try {
        const { data } = await axios.get("http://localhost:5000/users")
        let result = data.find(item=> item.email===loginData.email && item.password === loginData.password)

        
        if (result) {
            localStorage.setItem("login", JSON.stringify(result))
            return result
        } else {
            return ("username or password wrong")
        }
    } catch (error) {
        return error.message
    }
})

