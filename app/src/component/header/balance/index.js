
//React Import
import React, { useState, useEffect } from "react"

//Antd Import
import { Typography, Statistic, Space } from "antd"
const { Text } = Typography

const Balance = (props) => {
  const [value, setValue] = useState(0)
  useEffect(() => {
    setValue(props.balance)
  })

  return (
    <Space size="middle">
      <Text type="secondary">余额:</Text>
      <Statistic
        style={{ display: "inline-block" }}
        value={value}
        precision={2}
        valueStyle={{ fontSize: 20, fontWeight: 500 }}
        prefix={"$"}
      />
    </Space>
  )
}

export default Balance