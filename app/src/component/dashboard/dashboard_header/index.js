//React Import
import React from "react"

//Antd Import
import { Layout, Space, Row, Col, theme } from "antd"
const { Header } = Layout

//Component Import
import Balance from "src/component/header/balance"
import Identity from "src/component/header/identity"
import Notification from "src/component/header/notification"

//Css Import
import "src/style/component/dashboard/header.css"

const DashboardHeader = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
      }}
    >
      <Row span={24}>
        <Col span={12}>
          <span className="header-title">寄件单</span>
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          <Space align="baseline" size="small" className="header-captain">
            <Balance balance={10} />
            <Notification />
            <Identity />
          </Space>
        </Col>
      </Row>
    </Header>
  )
}

export default DashboardHeader

