//React Import
import React from "react"

//React Route Import
import { Link, useLocation } from "react-router-dom"

//Antd Import
import { Menu } from "antd"
import { CodeSandboxOutlined, DatabaseOutlined } from "@ant-design/icons"

const DashboardMenu = () => {
  const location = useLocation()

  var pathname = location.pathname.replace("/", "")

  if (!pathname) {
    pathname = "completed"
  }

  const menuMapping = {
    "single": "order",
    "completed": "manage"
  }

  const defaultOpenKey = menuMapping[pathname]

  const items = [
    {
      label: "创建运单",
      key: "order",
      icon: <CodeSandboxOutlined />,
      children: [
        { key: "single", label: (<Link to="/single">寄单件</Link>) }
      ]
    },
    {
      label: "订单管理",
      key: "manage",
      icon: <DatabaseOutlined />,
      children: [
        { key: "completed", label: (<Link to="/completed">已完成</Link>) }
      ]
    }
  ]

  return (
    <Menu
      mode="inline"
      theme="dark"
      defaultSelectedKeys={[pathname]}
      defaultOpenKeys={[defaultOpenKey]}
      style={{ height: "100vh" }}
      items={items} />
  )
}

export default DashboardMenu