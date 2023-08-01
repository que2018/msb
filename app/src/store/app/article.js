import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// ** Axios Imports
import axios from "axios"

// ** Get Order
export const getArticle = createAsyncThunk("article/getArticle", async code => {
  console.log(code)

  const response = await axios.get("/api/article/get_article?code=" + code)
  return response.data
})

export const articleSlice = createSlice({
  name: "article",
  initialState: {
    title: "",
    content: ""
  },
  reducers: {
    setArticle: (state, action) => {
      state.article = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(getArticle.fulfilled, (state, action) => {
      console.log(action.payload)

      state.title = action.payload.data.title
      state.content = action.payload.data.content
    })
  }
})

export const {
  setArticle
} = articleSlice.actions


export default articleSlice.reducer
