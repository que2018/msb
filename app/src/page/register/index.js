
//React Import
import React from "react"

//Hooks Import
import { useAuth } from "src/hook/useAuth"

//Antd Import
import { Form, Input, Button, Checkbox, message } from "antd"
import { LockOutlined, UserOutlined } from "@ant-design/icons"

//css Import
import "src/style/login.css"

const Register = () => {
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
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a className="forgot" href="">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="btn-login">
            Log in
          </Button>
          Or <a href="">register now</a>
        </Form.Item>
      </Form >
    </>
  )
}

export default Register