//React Import
import React from "react"

//Antd Import
import { Layout, Space, Row, Col, Button, Image } from "antd"
const { Header } = Layout

//Component Import
import SiteMenu from "src/component/site/site_menu"

// Constant Import
import { LOGO } from "src/util/constant"

//css Import
import "src/style/component/site/site_header.css"

const SiteHeader = () => {
  return (
    <Header
      className="st-header-wrap"
    >
      <Row span={24}>
        <Col span={2}>
          <Image width={30} src={LOGO} />
        </Col>
        <Col span={4}>
          <SiteMenu />
        </Col>
        <Col span={16} style={{ textAlign: "right" }}>
          <Space align="baseline" size="small" className="header-captain">
            <Button type="link" href="/login">Login</Button>
            <Button type="link" href="/register">Register</Button>
          </Space>
        </Col>
      </Row>
    </Header>
  )
}

export default SiteHeader

