//React Import
import React, { useState, useEffect } from "react"

// Store & Actions Imports
import { useDispatch, useSelector } from "react-redux"
import { getSenderAddresses, setSenderAddress } from "src/store/app/single"

//Antd Import
import { Space, Col, Row, Form, Input, AutoComplete } from "antd"

//Component Import
import SenderAutocompleteInput from "src/component/single/widget/SenderAutocompleteInput"

//css Import
import "src/style/component/single/sender_block.css"

const SenderBlock = (props) => {
  //Props
  const form = props.form

  //Hooks
  const dispatch = useDispatch()
  const store = useSelector(state => state.single)

  useEffect(() => {
    dispatch(
      getSenderAddresses()
    )
  }, [dispatch])

  useEffect(() => {
    if (store.senderAddress) {
      const addr1 = store.senderAddress.street
      const city = store.senderAddress.city
      const state = store.senderAddress.state
      const zipcode = store.senderAddress.zipcode

      form.setFieldsValue({ "sender_addr1": addr1 })
      form.setFieldsValue({ "sender_city": city })
      form.setFieldsValue({ "sender_state": state })
      form.setFieldsValue({ "sender_zip_code": zipcode })
    } else {
      form.setFieldsValue({ "sender_addr1": "" })
      form.setFieldsValue({ "sender_city": "" })
      form.setFieldsValue({ "sender_state": "" })
      form.setFieldsValue({ "sender_zip_code": "" })
    }
  }, [dispatch, store.senderAddress])

  //Function
  const formatSenderAddresses = (senderAddresses) => {
    const formattedSenderAddresses = senderAddresses.map((address) => {
      return {
        value: address.nickname,
        label: (
          <>
            <strong>{address.nickname}</strong>
            <span>&nbsp;{address.address_one}</span>
          </>
        )
      }
    })

    return formattedSenderAddresses
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
              options={formatSenderAddresses(store.senderAddresses)}
            />
          </Col>
        </Row>
        <Row>
          <Col span={8} className="sd-col">
            <Form.Item
              name="sender_name"
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
              name="sender_phone_number"
              label="电话"
              rules={[
                {
                  required: true,
                  message: "请输入电话"
                }
              ]}
            >
              <Input placeholder="电话, 必填" allowClear={true} />
            </Form.Item>
          </Col>
          <Col span={8} className="sd-col">
            <Form.Item
              name="sender_company"
              label="公司名称"
            >
              <Input placeholder="公司名称, 选填" allowClear={true} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24} className="sd-col">
            <Form.Item
              name="sender_addr1"
              label="地址"
              rules={[
                {
                  required: true
                }
              ]}
            >
              <SenderAutocompleteInput placeholder="地址" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={6} className="sd-col">
            <Form.Item
              name="sender_addr2"
              label="门牌号码"
            >
              <Input placeholder="门牌号码, 选填" allowClear={true} />
            </Form.Item>
          </Col>
          <Col span={6} className="sd-col">
            <Form.Item
              name="sender_city"
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
              name="sender_state"
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
              name="sender_zip_code"
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

export default SenderBlock