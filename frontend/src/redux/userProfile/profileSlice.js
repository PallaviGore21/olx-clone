import { createSlice } from "@reduxjs/toolkit"
import { updateUserProfile } from "./profileAction"

const userSlice = createSlice({
    name: "product",
    initialState: { userProduct: [] },
    reducer: {},
    extraReducers(builder) {
        builder
            .addCase(updateUserProfile.pending, (state, { payload }) => {
                state.loading = false
            })
            .addCase(updateUserProfile.fulfilled, (state, { payload }) => {
                state.loading = false
                state.userProductUpdated= payload

            })
            .addCase(updateUserProfile.rejected, (state, { payload }) => {
                state.loading = false
                state.deletrError = payload
            })

    }

})

export default userSlice.reducer
