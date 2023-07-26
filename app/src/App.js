// React Import
import React from "react"

// React Route Import
import { Routes, Route } from "react-router-dom"

// Store Imports
import { store } from "src/store"
import { Provider } from "react-redux"

//Context Import
import { AuthProvider } from "src/context/AuthContext"

//Antd Import
import { ConfigProvider, theme } from "antd"
const { defaultAlgorithm, darkAlgorithm } = theme

//Page Import
import Home from "src/page/home"
import Login from "src/page/login"
import Register from "src/page/register"
import Single from "src/page/single"
import Completed from "src/page/completed"
import NotFound from "src/page/not_found"
import About from "src/page/common/about.js"


//css Import
import "src/style/app.css"

export default function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: darkAlgorithm,
        token: {
          "fontSize": 20,
          "wireframe": true,
          "colorPrimary": "#e4ff04",
          "colorInfo": "#c5dc06"
        }
      }}>
      <Provider store={store}>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/single" element={<Single />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/completed" element={<Completed />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </Provider>
    </ConfigProvider>
  )
}

