import { useState } from "react"

export default function UserToken() {
  const getUserToken = () => {
    var userToken = sessionStorage.getItem("user_token")

    if(userToken) {
      userToken = JSON.parse(userToken)
    } 

    return userToken
  }

  const [userToken, setUserToken] = useState(getUserToken())

  const saveUserToken = userToken => {
    sessionStorage.setItem("user_token", JSON.stringify(userToken))
    setUserToken(userToken)
  }

  const clearUserToken = () => {
    sessionStorage.removeItem("user_token") 
    setUserToken(false)
  }

  return {
    userToken,
    setUserToken: saveUserToken,
    clearUserToken: clearUserToken
  }
}