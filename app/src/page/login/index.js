
//React Import
import React from "react"

//Hooks Import
import { useAuth } from "src/hook/useAuth"

//Antd Import
import { Form, Input, Button, message } from "antd"
import { LockOutlined, UserOutlined } from "@ant-design/icons"

//css Import
import "src/style/login.css"

const Login = () => {
  //Hooks
  const auth = useAuth()

  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = values => {
    auth.login(values, () => {
    })
  }

  return (
    <>
      {contextHolder}
      <Form
        name="login_form"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            size="large"
            placeholder="Email"
            prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input
            size="large"
            type="password"
            placeholder="Password"
            prefix={<LockOutlined />} />
        </Form.Item>
        <Form.Item>
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            className="btn-login">
            Log in
          </Button>
        </Form.Item>
      </Form >
    </>
  )
}

export default Login