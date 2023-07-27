
//React Import
import React, { useState, useEffect } from "react"

// Store & Actions Imports
import { useDispatch, useSelector } from "react-redux"
import { getFee, setFee } from "src/store/app/fee"

//Antd Import
import { Button, Form, Select, InputNumber, Card } from "antd"

// css Import
import "src/style/component/home/exchange_rate_calculator.css"

const ExchangeRateCalculator = (props) => {
  //State
  const [loading, setLoading] = useState(false)
  const [feeLabel, setFeeLabel] = useState("")

  //Hooks
  const dispatch = useDispatch()
  const store = useSelector(state => state.fee)

  const onFinish = values => {
    setLoading(true)

    dispatch(
      setFee(null)
    )

    dispatch(
      getFee(values)
    )
  }

  useEffect(() => {
    console.log("useEffect")
    console.log(store.fee)


    if (store.fee) {
      setLoading(false)
      setFeeLabel("$" + store.fee)
    }
  }, [store.fee])

  return (
    <div className="erc">
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
          <InputNumber
            size={"large"}
            className="erc-input"
            placeholder="Sending Amount"
            formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
          />
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
          <Button
            type="primary"
            size={"large"}
            className="erc-btn"
            htmlType="submit"
            loading={loading} >
            Submit
          </Button>
        </Form.Item>
      </Form>
      {(feeLabel) &&
        <Card
          title={"Fee: " + feeLabel}
          bordered={false}
        >
          <p>Card content</p>
        </Card>
      }
    </div>
  )
}

export default ExchangeRateCalculator