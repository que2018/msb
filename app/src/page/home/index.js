
// React Import
import React from "react"

// Antd Import
import { Card, Col, Row, Carousel, Image, Space } from "antd"

// Layout Import
import SiteLayout from "src/layout/SiteLayout"

//Component Import
import ExchangeRateCalculator from "src/component/home/ExchangeRateCalculator"

// Constant Import
import { SLIDES } from "src/util/constant"

// css Import
import "src/style/home.css"

const Home = () => {
  return (
    <SiteLayout>
      <Space
        className="h"
        direction="vertical"
        size="middle"
        style={{
          display: "flex"
        }}
      >
        <Row gutter={24}>
          <Col span={10}>
            <ExchangeRateCalculator />
          </Col>
          <Col span={14}>
            <Carousel>
              {SLIDES.map(function (item, index) {
                return (
                  <div key={index} className="h-slide-wrap">
                    <Image preview={false} width={"100%"} src={item} className="h-slide" />
                  </div>
                )
              })}
            </Carousel>
          </Col>
        </Row>
        <div className="h-banner1">
          <div class="h-banner1-b"><strong>Beyond Boundaries: Making Money Transfer a Breeze</strong></div>
          <div class="h-banner1-s">Small Text</div>
        </div>
        <Row gutter={24}>
          <Col span={8}>
            <Card
              bordered={false}
              className="c"
              title={<div className="c-title">Card title</div>} >
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              bordered={false}
              className="c"
              title={<div className="c-title">Card title</div>} >
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              bordered={false}
              className="c"
              title={<div className="c-title">Card title</div>} >
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
        <div>
          <div class="h-banner-b">Big Text</div>
          <div class="h-banner-s">Small Text</div>
        </div>
      </Space>
    </SiteLayout>
  )
}

export default Home