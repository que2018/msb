
//React Import
import React, { useState, useEffect } from "react"

// Store & Actions Imports
import { useDispatch, useSelector } from "react-redux"
import { getFee } from "src/store/app/fee"

//Antd Import
import { Button, Form, Select, Input } from "antd"

// css Import
import "src/style/component/home/exchange_rate_calculator.css"

const ExchangeRateCalculator = (props) => {
  //Hooks
  const dispatch = useDispatch()
  const store = useSelector(state => state.fee)

  const onFinish = values => {
    dispatch(
      getFee(values)
    )
  }

  useEffect(() => {
    if(store.fee) {
      alert(store.fee)
    }
  }, [store.fee])

  return (
    <div class="erc">
      <Form
        name="form_fee"
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={onFinish}
      >
        <Form.Item
          name="amount"
          rules={[
            {
              required: true,
              message: "Please input your amount!"
            },
          ]}
        >
          <Input size={"large"} placeholder="Sending Amount" />
        </Form.Item>
        <Form.Item
          name="country"
          rules={[
            {
              required: true,
              message: "Please select your countries"
            },
          ]}
        >
          <Select
            showSearch
            size={"large"}
            className="erc-select"
            placeholder="Select a destination country"
            options={[
              {
                value: "china",
                label: "China"
              },
              {
                value: "japan",
                label: "Japan"
              }
            ]}
          />
        </Form.Item>
        <Form.Item
          wrapperCol={{ span: 24 }}
        >
          <Button type="primary" size={"large"} className="erc-btn" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default ExchangeRateCalculator