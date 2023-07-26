//React Import
import React, { useState } from "react"

//React Route Import
import { Link } from "react-router-dom"

//Context Imoprt
import { useAuth } from "src/hook/useAuth"

//Antd Import
import { Space, Avatar, Dropdown } from "antd"

const Identity = (props) => {
  //Hook
  const { logout } = useAuth()

  const items = [
    {
      key: "logout",
      label: (
        <a onClick={() => {
            logout()
        }}>
          登出
        </a>
      )
    },
    {
      key: "info",
      label: (
        <Link to={`/user/setting/address`}><span>账户信息</span></Link>
      ),
      disabled: true,
    },
    {
      key: "access",
      danger: true,
      label: "账户权限"
    },
  ]

  const [background, setBackground] = useState("#ffffff")

  return (
    <div
      onMouseLeave={() => setBackground("#ffffff")}
      onMouseEnter={() => setBackground("#f8f8f8")}
      style={{ cursor: "pointer", paddingLeft: 8, paddingRight: 8, background: background }}
    >
      <Dropdown
        menu={{items}}
        placement="bottomRight">
        <Space>
          <Avatar style={{ backgroundColor: "#40a9ff" }}>K</Avatar>
          <span style ={{ color: "#1890FF", }}>{props.name}</span>
        </Space>
      </Dropdown>
    </div>
  )
}

export default Identity