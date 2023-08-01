//React Import
import React from "react"
import { createContext, useEffect, useState } from "react"

//React Route Import
import { useNavigate } from "react-router-dom"

//Axios Import
import axios from "axios"

//Defaults
const defaultProvider = {
  user: null,
  loading: true,
  login: () => Promise.resolve()
}
const AuthContext = createContext(defaultProvider)

const AuthProvider = ({ children }) => {
  // States
  const [user, setUser] = useState(defaultProvider.user)
  const [loading, setLoading] = useState(defaultProvider.loading)

  // Hooks
  const navigate = useNavigate()

  useEffect(() => {
    const initAuth = async () => {
      const storedToken = window.localStorage.getItem("userData")
      if (storedToken) {
        //navigate("/home")
      }
    }
    initAuth()
  }, [])

  const handleLogin = (params, errorCallback) => {
    axios
      .post("/api/login/submit", {
        "username": params.email,
        "password": params.password
      })
      .then(async response => {
        console.log(response.data)

        setUser(response.data.data)

        window.localStorage.setItem("userData", JSON.stringify(response.data.data))

        navigate("/profile")
      })
      .catch(err => {
        if (errorCallback) errorCallback(err)
      })
  }

  const handleLogout = () => {
    window.localStorage.removeItem('userData')
    navigate("/home")
  }

  const values = {
    user,
    loading,
    login: handleLogin,
    logout: handleLogout
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
