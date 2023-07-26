//React Import
import React, { useEffect } from "react"

// Store & Actions Imports
import { useDispatch, useSelector } from "react-redux"
import { getRecipientAddresses, setRecipientAddress } from "src/store/app/single"

//Antd Import
import { Form, Space, Col, Row, Input, AutoComplete } from "antd"

//Component Import
import RecipientAutocompleteInput from "src/component/single/widget/RecipientAutocompleteInput"

//css Import
import "src/style/component/single/recipient_block.css"

const RecipientBlock = (props) => {
  //Props
  const form = props.form

  // Hooks
  const dispatch = useDispatch()
  const store = useSelector(state => state.single)

  useEffect(() => {
    dispatch(
      getRecipientAddresses()
    )
  }, [dispatch])

  useEffect(() => {
    if (store.recipientAddress) {
      const addr1 = store.recipientAddress.street
      const city = store.recipientAddress.city
      const state = store.recipientAddress.state
      const zipcode = store.recipientAddress.zipcode

      form.setFieldsValue({ "recipient_addr1": addr1 })
      form.setFieldsValue({ "recipient_city": city })
      form.setFieldsValue({ "recipient_state": state })
      form.setFieldsValue({ "recipient_zip_code": zipcode })
    } else {
      form.setFieldsValue({ "recipient_addr1": "" })
      form.setFieldsValue({ "recipient_city": "" })
      form.setFieldsValue({ "recipient_state": "" })
      form.setFieldsValue({ "recipient_zip_code": "" })
    }
  }, [dispatch, store.recipientAddress])

  const formatRecipientAddresses = (recipientAddresses) => {
    const formattedRecipientAddresses = recipientAddresses.map((address) => {
      return {
        value: address.label,
        label: (
          <>
            <strong>{address.label}</strong>
            <span>&nbsp;{address.full_address}</span>
          </>
        )
      }
    })

    return formattedRecipientAddresses
  }

  return (
    <Form
      form={form}
      layout="vertical"
      autoComplete="off"
    >
      <Space
        size="small"
        className="sd-wrap"
        direction="vertical">
        <Row>
          <Col span={8} className="sd-col">
            <AutoComplete
              placeholder="选择或者搜索保存地址"
              className="sd-auto-search"
              options={formatRecipientAddresses(store.recipientAddresses)}
            />
          </Col>
        </Row>
        <Row>
          <Col span={8} className="sd-col">
            <Form.Item
              name="recipient_name"
              label="姓名"
              rules={[
                {
                  required: true,
                  message: "请输入姓名"
                }
              ]}
            >
              <Input placeholder="姓名, 必填" allowClear={true} />
            </Form.Item>
          </Col>
          <Col span={8} className="sd-col">
            <Form.Item
              name="recipient_phone_number"
              label="电话"
              rules={[
                {
                  required: true,
                  message: "请输入电话"
                }
              ]}
            >
              <Input plaåceholder="电话, 必填" allowClear={true} />
            </Form.Item>
          </Col>
          <Col span={8} className="sd-col">
            <Form.Item
              name="recipient_company"
              label="公司名称"
            >
              <Input placeholder="公司名称, 选填" allowClear={true} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24} className="sd-col">
            <Form.Item
              name="recipient_addr1"
              label="地址"
              rules={[
                {
                  required: true
                }
              ]}
            >
              <RecipientAutocompleteInput placeholder="地址, 必填" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={6} className="sd-col">
            <Form.Item
              name="recipient_addr2"
              label="门牌号码"
            >
              <Input placeholder="门牌号码, 选填" allowClear={true} />
            </Form.Item>
          </Col>
          <Col span={6} className="sd-col">
            <Form.Item
              name="recipient_city"
              label="城市"
              rules={[
                {
                  required: true,
                  message: "请输入城市"
                }
              ]}
            >
              <Input placeholder="城市, 必填" allowClear={true} />
            </Form.Item>
          </Col>
          <Col span={6} className="sd-col">
            <Form.Item
              name="recipient_state"
              label="州"
              rules={[
                {
                  required: true,
                  message: "请输入州"
                }
              ]}
            >
              <Input placeholder="州, 必填" allowClear={true} />
            </Form.Item>
          </Col>
          <Col span={6} className="sd-col">
            <Form.Item
              name="recipient_zip_code"
              label="邮编"
              rules={[
                {
                  required: true,
                  message: "请输入邮编"
                }
              ]}
            >
              <Input placeholder="邮编, 必填" allowClear={true} />
            </Form.Item>
          </Col>
        </Row>
      </Space>
    </Form>
  )
}

export default RecipientBlock