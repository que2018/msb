// ** Toolkit imports
import { configureStore } from "@reduxjs/toolkit"

// ** Reducers
import fee from "src/store/app/fee"
import single from "src/store/app/single"
import completed from "src/store/app/completed"

export const store = configureStore({
  reducer: {
    fee,
    single,
    completed
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
