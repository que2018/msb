//React Import
import React from "react"

//Antd Import
import { Form, Col, Row, Input, InputNumber, Collapse, Space, theme } from "antd"
import { DeleteOutlined, CaretRightOutlined } from "@ant-design/icons"
const { Panel } = Collapse

//MUI Import
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone"

//Component Import
import PackageType from "src/component/single/widget/PackageType"

//css Import
import "src/style/component/single/widget/package.css"

const Package = (props) => {
  //Antd
  const { token } = theme.useToken()

  const PanelHeader = () => (
    <Row>
      <Col span={20}>
        <Space
          size="small"
          style={{
            display: "flex"
          }}
        >
          <span style={{}}>包裹</span>
          <span style={{ color: "#faad14" }}>编辑中</span>
        </Space>
      </Col>
      <Col span={4}>
        <DeleteForeverTwoToneIcon
          color="error"
          onClick={props.deletePackage} className="pk-delete" />
      </Col>
    </Row>
  )

  return (
    <Collapse
      accordion
      defaultActiveKey={["pk"]}
      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      style={{
        background: token.colorBgContainer
      }}
      className="pk-container">
      <Panel
        key="pk"
        header={PanelHeader()}
      >
        <Row>
          <Col span={24} className="sd-col">
            <PackageType />
          </Col>
        </Row>
        <Row>
          <Col span={5} className="sd-col">
            <Form.Item
              name={["package", props.index, "same_pack"]}
              label="相同件"
              initialValue={1}
              rules={[
                {
                  required: true,
                  message: ""
                }
              ]}
            >
              <InputNumber placeholder="相同件" className="pk-input-num" />
            </Form.Item>
          </Col>
          <Col span={5} className="sd-col">
            <Form.Item
              name={["package", props.index, "weight"]}
              label="磅(lb)"
              initialValue={1}
              rules={[
                {
                  required: true,
                  message: ""
                }
              ]}
            >
              <InputNumber placeholder="重量" className="pk-input-num" />
            </Form.Item>
          </Col>
          <Col span={4} className="pk-col">
            <Form.Item
              name={["package", props.index, "length"]}
              label="长(in)"
              initialValue={1}
              rules={[
                {
                  required: true,
                  message: ""
                }
              ]}
            >
              <InputNumber placeholder="长度" className="pk-input-num" />
            </Form.Item>
          </Col>
          <Col span={4} className="pk-col">
            <Form.Item
              name={["package", props.index, "width"]}
              label="宽(in)"
              initialValue={1}
              rules={[
                {
                  required: true,
                  message: ""
                }
              ]}
            >
              <InputNumber placeholder="宽度" className="pk-input-num" />
            </Form.Item>
          </Col>
          <Col span={4} className="pk-col">
            <Form.Item
              name={["package", props.index, "height"]}
              label="高(in)"
              initialValue={1}
              rules={[
                {
                  required: true,
                  message: ""
                }
              ]}
            >
              <InputNumber placeholder="高度" className="pk-input-num" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={10} className="pk-col">
            <Form.Item
              name={["package", props.index, "order_id"]}
              label="订单号"
            >
              <Input placeholder="自定义订单号, 选填, 如不填写, 系统自动完成" />
            </Form.Item>
          </Col>
          <Col span={6} className="pk-col">
            <Form.Item
              name={["package", props.index, "reference_1"]}
              label="面单备注一"
            >
              <Input placeholder="运单自定义信息位置一, 选填" />
            </Form.Item>
          </Col>
          <Col span={6} className="pk-col">
            <Form.Item
              name={["package", props.index, "reference_2"]}
              label="面单备注二"
            >
              <Input placeholder="运单自定义信息位置二, 选填" />
            </Form.Item>
          </Col>
        </Row>
      </Panel>
    </Collapse>
  )
}

export default Package