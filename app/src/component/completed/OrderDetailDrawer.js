//React Import
import React, { useState, useEffect } from "react"

//Antd Import
import { Button, Drawer, Row, Col, Space, Card, Image, Pagination } from "antd"
import { PrinterOutlined, CopyOutlined } from "@ant-design/icons"

//Component Import
import LabelPrintButton from "src/component/shared/LabelPrintButton"
import LabelDownloadButton from "src/component/shared/LabelDownloadButton"

//css Import
import "src/style/component/completed/order_detail_drawer.css"

const OrderDetailDrawer = (props) => {
  // State
  const [label, setLabel] = useState("")

  useEffect(() => {
    if(props.data) {
      setLabel(props.data.labels[0])
    }
  }, [props.data])

  const onPaginationChange = (page) => {
    setLabel(props.data.labels[page])
  }

  if(props.data) {
    return (
      <Drawer
        width={1200}
        placement="right"
        onClose={props.onClose}
        open={props.open}>
        <Row>
          <Col span={10}>
            <Space
              size={16}
              direction="vertical"
              className="od-left-section">
              <Space wrap>
                <LabelPrintButton 
                  labels={props.data.labels}
                />
                <LabelDownloadButton 
                  labels={props.data.labels}
                />
                <Button
                  type="primary"
                  icon={<CopyOutlined />}
                >
                  创建相同
                </Button>
              </Space>
              <Card
                title="包裹信息"
              >
                <table className="od-table">
                  <tbody>
                    <tr>
                      <th className="od-bg" style={{ width: "16%" }}>重量</th>
                      <th style={{ width: "20%" }}>{props.data.weight}</th>
                      <th className="od-bg" style={{ width: "16%" }}>尺寸</th>
                      <th style={{ width: "20%" }}>N/A</th>
                      <th className="od-bg" style={{ width: "16%" }}>件数</th>
                      <th style={{ width: "16%" }}>1</th>
                    </tr>
                    <tr>
                      <td className="od-bg" style={{ width: "16%" }}>寄件人</td>
                      <td colSpan={5}>
                        {props.data.senderInfo}
                      </td>
                    </tr>
                    <tr>
                      <td className="od-bg" style={{ width: "16%" }}>收件人</td>
                      <td colSpan={5}>
                        {props.data.recipientInfo}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Card>
              <Card
                title="订单信息"
              >
                <table className="od-table">
                  <tbody>
                    <tr>
                      <th className="od-bg" style={{ width: "25%" }}>状态</th>
                      <th style={{ width: "25%" }}>完成</th>
                      <th className="od-bg" style={{ width: "25%" }}>渠道</th>
                      <th style={{ width: "25%" }}></th>
                    </tr>
                    <tr>
                      <td className="od-bg" style={{ width: "25%" }}>系统订单号</td>
                      <td colSpan={5}>
                        {props.data.customerOrderId}
                      </td>
                    </tr>
                    <tr>
                      <td className="od-bg" style={{ width: "16%" }}>总费用</td>
                      <td colSpan={5}>
                        ${props.data.billing_amount}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Card>
              <Card
                title="物流信息"
              >
                <table className="od-table">
                  <tbody>
                    <tr>
                      <th className="od-bg" style={{ width: "25%" }}>预上网</th>
                      <th style={{ width: "25%" }}>N/A</th>
                      <th className="od-bg" style={{ width: "25%" }}>scan_form</th>
                      <th style={{ width: "25%" }}>N/A</th>
                    </tr>
                    <tr>
                      <td className="od-bg" style={{ width: "25%" }}>运单号</td>
                      <td colSpan={5}>
                        {props.data.customerOrderId}
                      </td>
                    </tr>
                    <tr>
                      <td className="od-bg" style={{ width: "16%" }}>状态</td>
                      <td colSpan={5}>
                        {props.data.status}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Card>
            </Space>
          </Col>
          <Col span={14}>
            <Space
              size={16}
              align="center"
              direction="vertical"
              className="od-label-wrap"
            >
              <Image className="od-label-img" src={label} />
              <Space 
                direction="horizontal" 
                style={{
                  width: "100%", 
                  justifyContent: "center"
                }}>
                <Pagination 
                  simple 
                  defaultCurrent={1} 
                  defaultPageSize={1} 
                  onChange={onPaginationChange}
                  total={props.data.labels.length} /> 
                </Space>
            </Space>
          </Col>
        </Row>
      </Drawer>
    )
  } else {
    return <></>
  }
}

export default OrderDetailDrawer