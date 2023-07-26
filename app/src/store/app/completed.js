import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// ** Axios Imports
import axios from "axios"

// ** Get Order
export const getCompletedOrders = createAsyncThunk("completed/getCompletedOrders", async params => {
  const response = await axios.post("/api/user/get_orders", params)
  return response.data
})

export const completedSlice = createSlice({
  name: "completed",
  initialState: {
    params: {},
    completedOrders: [],
    totalCompletedOrder: 0
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCompletedOrders.fulfilled, (state, action) => {
      state.completedOrders = action.payload.data.docs
      state.totalCompletedOrder = action.payload.data.totalDocs
    })
  }
})

export default completedSlice.reducer
