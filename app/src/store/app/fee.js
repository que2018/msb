import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// ** Axios Imports
import axios from "axios"

// ** Get Order
export const getFee = createAsyncThunk("fee/getFee", async params => {
  const response = await axios.post("/api/fee/get_fee", params)
  return response.data
})

export const feeSlice = createSlice({
  name: "fee",
  initialState: {
    fee: null
  },
  reducers: {
    setFee: (state, action) => {
      state.fee = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(getFee.fulfilled, (state, action) => {
      console.log(action.payload)

      state.fee = action.payload.data
    })
  }
})

export const {
  setFee
} = feeSlice.actions


export default feeSlice.reducer
