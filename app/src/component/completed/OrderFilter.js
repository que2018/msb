//React Import
import React from "react"

//Antd Import
import { Space, Input, Button, DatePicker } from "antd"
const { RangePicker } = DatePicker

//Util Import
import { currentDate } from "src/util/func"

//css Import
import "src/style/component/completed/order_filter.css"

const OrderFilter = (props) => {
  const date = currentDate()

  return (
    <div className="of-wrap">
      <Space size="large">
        <strong>筛选</strong>
        <RangePicker
          format={"YYYY-MM-DD"}
          onChange={props.onChange}
        />
        <Space.Compact
          style={{
            width: '100%'
          }}
        >
          <Input defaultValue="任意搜索 ..." />
          <Button type="primary">搜索</Button>
        </Space.Compact>
      </Space>
    </div>
  )

}

export default OrderFilter