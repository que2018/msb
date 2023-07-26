//React Import
import React from "react"

//Antd Import
import { Layout, Row, Col, Space, Button } from "antd"
const { Footer } = Layout

//css Import
import "src/style/component/site/site_footer.css"

const SiteFooter = () => {
  return (
    <Space
      direction="vertical"
      className="ft-wrap"
      size="middle"
      style={{
        display: "flex"
      }}
    >
      <Row>
        <Col span={8}>
          <Space
            size="small"
            direction="vertical"
            className="ft-items"
          >
            <Button type="link" href="/policy">
              <span>Policy</span>
            </Button>
            <Button type="link" href="/terms">
              <span>Terms</span>
            </Button>
          </Space>
        </Col>
        <Col span={8}>
        
        </Col>
        <Col span={8}>
        
        </Col>
      </Row>
      <Footer
        style={{
          textAlign: "center"
        }}
      >
        <span>UCOLAB ©2023</span>
      </Footer>
    </Space>
  )
}

export default SiteFooter