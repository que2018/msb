//React Import
import React, { useState } from "react"

// Store & Actions Imports
import { useSelector } from "react-redux"

//Antd Import
import { Button, Row, Col, Space, Card, Image, Pagination } from "antd"
import { CopyOutlined } from "@ant-design/icons"

//Component Import
import LabelPrintButton from "src/component/shared/LabelPrintButton"
import LabelDownloadButton from "src/component/shared/LabelDownloadButton"

//css Import
import "src/style/component/single/shipment_detail.css"

const ShipmentDetail = () => {
  // Store
  const store = useSelector(state => state.single)

  if (store.shipmentDetail) {
    const shipmentDetail = store.shipmentDetail

    var senderInfo = shipmentDetail.sender.sender_name;
    senderInfo += " " + shipmentDetail.sender.add1;

    if (shipmentDetail.sender.add2) {
      senderInfo += " " + shipmentDetail.sender.add2;
    }

    senderInfo += " " + shipmentDetail.sender.city;
    senderInfo += " " + shipmentDetail.sender.state;
    senderInfo += " " + shipmentDetail.sender.zipcsde;

    var recipientInfo = shipmentDetail.recipient.recipient_name;
    recipientInfo += " " + shipmentDetail.recipient.add1;

    if (shipmentDetail.recipient.add2) {
      senderInfo += " " + shipmentDetail.recipient.add2;
    }

    recipientInfo += " " + shipmentDetail.recipient.city;
    recipientInfo += " " + shipmentDetail.recipient.state;
    recipientInfo += " " + shipmentDetail.recipient.zipcsde;

    const labels = []

    shipmentDetail.parcel.parcelList.map(function (parcel) {
      labels.push(parcel.label[0])
    })

    const status = shipmentDetail.status
    const weight = shipmentDetail.parcel.weight
    const logoUrl = shipmentDetail.service.asset.logo_url
    const carrierType = shipmentDetail.service.carrier_type
    const customerOrderId = shipmentDetail.customer_order_id
    const billing_amount = shipmentDetail.postage.billing_amount.total
    const original_charge = shipmentDetail.postage.billing_amount.original_charge

    // State
    const [label, setLabel] = useState(labels[0])

    const onPaginationChange = (page) => {
      setLabel(labels[page])
    }

    return (
      <Row>
        <Col span={10}>
          <Space
            size={16}
            direction="vertical"
            className="sd-left-section">
            <Space wrap>
              <LabelPrintButton
                labels={labels}
              />
              <LabelDownloadButton
                labels={labels}
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
              <table className="sd-table">
                <tbsdy>
                  <tr>
                    <th className="sd-bg" style={{ width: "16%" }}>重量</th>
                    <th style={{ width: "20%" }}>{shipmentDetail.weight}</th>
                    <th className="sd-bg" style={{ width: "16%" }}>尺寸</th>
                    <th style={{ width: "20%" }}>N/A</th>
                    <th className="sd-bg" style={{ width: "16%" }}>件数</th>
                    <th style={{ width: "16%" }}>1</th>
                  </tr>
                  <tr>
                    <td className="sd-bg" style={{ width: "16%" }}>寄件人</td>
                    <td colSpan={5}>
                      {senderInfo}
                    </td>
                  </tr>
                  <tr>
                    <td className="sd-bg" style={{ width: "16%" }}>收件人</td>
                    <td colSpan={5}>
                      {recipientInfo}
                    </td>
                  </tr>
                </tbsdy>
              </table>
            </Card>
            <Card
              title="订单信息"
            >
              <table className="sd-table">
                <tbsdy>
                  <tr>
                    <th className="sd-bg" style={{ width: "25%" }}>状态</th>
                    <th style={{ width: "25%" }}>完成</th>
                    <th className="sd-bg" style={{ width: "25%" }}>渠道</th>
                    <th style={{ width: "25%" }}></th>
                  </tr>
                  <tr>
                    <td className="sd-bg" style={{ width: "25%" }}>系统订单号</td>
                    <td colSpan={5}>
                      {customerOrderId}
                    </td>
                  </tr>
                  <tr>
                    <td className="sd-bg" style={{ width: "16%" }}>总费用</td>
                    <td colSpan={5}>
                      ${billing_amount}
                    </td>
                  </tr>
                </tbsdy>
              </table>
            </Card>
            <Card
              title="物流信息"
            >
              <table className="sd-table">
                <tbsdy>
                  <tr>
                    <th className="sd-bg" style={{ width: "25%" }}>预上网</th>
                    <th style={{ width: "25%" }}>N/A</th>
                    <th className="sd-bg" style={{ width: "25%" }}>scan_form</th>
                    <th style={{ width: "25%" }}>N/A</th>
                  </tr>
                  <tr>
                    <td className="sd-bg" style={{ width: "25%" }}>运单号</td>
                    <td colSpan={5}>
                      {customerOrderId}
                    </td>
                  </tr>
                  <tr>
                    <td className="sd-bg" style={{ width: "16%" }}>状态</td>
                    <td colSpan={5}>
                      {status}
                    </td>
                  </tr>
                </tbsdy>
              </table>
            </Card>
          </Space>
        </Col>
        <Col span={14}>
          <Space
            size={16}
            align="center"
            direction="vertical"
            className="sd-label-wrap"
          >
            <Image className="sd-label-img" src={label} />
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
                total={labels.length} />
            </Space>
          </Space>
        </Col>
      </Row>
    )
  } else {
    return <></>
  }
}

export default ShipmentDetail