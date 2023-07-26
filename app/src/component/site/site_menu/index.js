//React Import
import React from "react"

//React Route Import
import { useLocation } from "react-router-dom"

//Antd Import
import { Menu } from "antd"

const SiteMenu = () => {
  const location = useLocation()

  var pathname = location.pathname.replace("/", "")

  if (!pathname) {
    pathname = "home"
  }

  const items = [
    {
      label: (
        <a href="/">
          <strong>Home</strong>
        </a>
      ),
      key: "home"
    },
    {
      label: (
        <a href="/about">
          <strong>About</strong>
        </a>
      ),
      key: "about"
    }
  ]

  return (
    <Menu
      theme="light"
      mode="horizontal"
      defaultSelectedKeys={[pathname]}
      items={items} />
  )
}

export default SiteMenu