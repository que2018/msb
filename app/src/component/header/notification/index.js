//React Import
import React, { useState } from "react"

//Antd Import
import { Badge, Dropdown } from "antd"
import { BellOutlined } from "@ant-design/icons"

const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item',
  },
];

const Notification = () => {
  const [background, setBackground] = useState("#ffffff")

  return (
    <div
      onMouseLeave={() => setBackground("#ffffff")}
      onMouseEnter={() => setBackground("#f8f8f8")}
      style={{ cursor: "pointer", paddingLeft: 16, paddingRight: 16, background: background }}
    >
      <Dropdown trigger={["click"]} menu={{items}} placement="bottomRight" arrow={true}>
        <Badge count={5}>
          <BellOutlined style={{ fontSize: "18px" }} />
        </Badge>
      </Dropdown>
    </div>
  )
}

export default Notification


