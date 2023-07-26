//React Import
import React, { useState, useEffect, useRef } from "react"

// Store & Actions Imports
import { useDispatch, useSelector } from "react-redux"
import { setSenderInfo, setRecipientInfo, setParcelList, setRateGenerated, createShipment } from "src/store/app/single"

//Antd Import
import { Collapse, Form, Col, Row, Space, message, theme } from "antd"
import { CaretRightOutlined } from "@ant-design/icons"
const { Panel } = Collapse

//MUI Import
import PersonTwoToneIcon from "@mui/icons-material/PersonTwoTone"
import ArchiveTwoToneIcon from "@mui/icons-material/ArchiveTwoTone";
import FlightTakeoffTwoToneIcon from "@mui/icons-material/FlightTakeoffTwoTone"

//Layout Import
import DashboardLayout from "src/layout/DashboardLayout"

//Component Import
import RateBlock from "src/component/single/RateBlock"
import SenderBlock from "src/component/single/SenderBlock"
import PackageBlock from "src/component/single/PackageBlock"
import RecipientBlock from "src/component/single/RecipientBlock"
import ShipmentDetail from "src/component/single/ShipmentDetail"
import CheckoutDrawer from "src/component/single/widget/CheckoutDrawer"

//css Import
import "src/style/single.css"

const Single = () => {
  //Status
  const [price, setPrice] = useState(null)
  const [validatedBlock, setValidatedBlock] = useState([])
  const [activeBlock, setActiveBlock] = useState(["sender"])
  const [shipmentCreated, setShipmentCreated] = useState(true)
  const [creatingShipment, setCreatingShipment] = useState(true)
  const [checkoutDrawerOpen, setCheckoutDrawerOpen] = useState(false)

  //Reference
  const pageEndRef = useRef()

  //Antd
  const { token } = theme.useToken()
  const [messageApi, contextHolder] = message.useMessage();

  //Hooks
  const [formSender] = Form.useForm()
  const [formRecipient] = Form.useForm()
  const [formPackage] = Form.useForm()
  const [formCarrier] = Form.useForm()

  const blockInfo = {
    "sender": { form: formSender, prior: "carrier" },
    "recipient": { form: formRecipient, prior: "sender" },
    "package": { form: formPackage, prior: "recipient" },
    "carrier": { form: formCarrier, prior: "package" }
  }

  const dispatch = useDispatch()
  const store = useSelector(state => state.single)

  useEffect(() => {
    if ((store.rate != null) && (store.rate.price != null)) {
      const price = store.rate.price

      if (price.NegotiateTotal != null) {
        setPrice(price.pNegotiateTotal)
      } else {
        setPrice(price.total)
      }

      setCheckoutDrawerOpen(true)
    }
  }, [store.rate])

  useEffect(() => {
    if (store.rateGenerated) {
      dispatch(
        setRateGenerated(false)
      )
    }
  }, [store.rateGenerated])

  const onCollapseChange = (current) => {
    const prior = blockInfo[current].prior

    if (!validatedBlock.includes(prior)) {
      const form = blockInfo[prior].form

      form.submit()

      form.validateFields().then(
        () => {
          const formValues = form.getFieldsValue()

          if (prior == "sender") {
            dispatch(
              setSenderInfo(formValues)
            )
          } else if (prior == "recipient") {
            dispatch(
              setRecipientInfo(formValues)
            )
          } else if (prior == "package") {
            const packages = formValues.package

            dispatch(
              setParcelList(packages)
            )
          }

          setActiveBlock(current)

          var newValidateBlock = validatedBlock
          newValidateBlock.push(prior)
          setValidatedBlock(newValidateBlock)
        }
      )
    } else {
      setActiveBlock(current)
    }
  }

  const scrollToPageEnd = () => {
    pageEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const closeCheckoutDrawer = () => {
    setCheckoutDrawerOpen(false)
  }

  const placeOrder = () => {
    messageApi.open({
      duration: 0,
      key: "updatable",
      type: "loading",
      content: "创建面单",
    })

    dispatch(
      createShipment()
    )
  }

  const SenderBlockPanelHeader = () => (
    <Row>
      <Col span={20}>
        <Space
          size="small"
          style={{
            display: "flex"
          }}
        >
          <PersonTwoToneIcon color="primary" />
          <span className="sg-title">发件人信息</span>
          {(activeBlock == "sender")
            ? <span className="sg-edit">编辑中</span>
            : <span className="sg-panel-title">
              {(store.senderName && store.senderAddress) ? store.senderName + " " + store.senderAddress.formattedAddress : ""}
            </span>
          }
        </Space>
      </Col>
    </Row>
  )

  const RecipientBlockPanelHeader = () => (
    <Row>
      <Col span={20}>
        <Space
          size="small"
          style={{
            display: "flex"
          }}
        >
          <PersonTwoToneIcon color="primary" />
          <span className="sg-title">收件人信息</span>
          {(activeBlock == "recipient")
            ? <span className="sg-edit">编辑中</span>
            : <span className="sg-panel-title">
              {(store.recipientName && store.recipientAddress) ? store.recipientName + " " + store.recipientAddress.formattedAddress : ""}
            </span>
          }
        </Space>
      </Col>
    </Row>
  )

  const PackageBlockPanelHeader = () => (
    <Row>
      <Col span={20}>
        <Space
          size="small"
          style={{
            display: "flex"
          }}
        >
          <ArchiveTwoToneIcon color="primary" />
          <span className="sg-title">包裹信息</span>
          {(activeBlock == "package")
            ? <span className="sg-edit">编辑中</span>
            : <span className="sg-panel-title"></span>
          }
        </Space>
      </Col>
    </Row>
  )

  const RateBlockPanelHeader = () => (
    <Row>
      <Col span={20}>
        <Space
          size="small"
          style={{
            display: "flex"
          }}
        >
          <FlightTakeoffTwoToneIcon color="primary" />
          <span className="sg-title">渠道信息</span>
          {(activeBlock == "carrier")
            ? <span className="sg-edit">编辑中</span>
            : <span className="sg-panel-title"></span>
          }
        </Space>
      </Col>
    </Row>
  )

  const renderSteps = () => {
    return (
      <>
        {contextHolder}
        <Collapse
          accordion
          className="sg-c"
          onChange={onCollapseChange}
          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
          style={{
            background: token.colorBgContainer
          }}
          activeKey={activeBlock}>
          <Panel
            key="sender"
            header={SenderBlockPanelHeader()}>
            <SenderBlock form={formSender} />
          </Panel>
        </Collapse>
        <Collapse
          accordion
          className="sg-c"
          activeKey={activeBlock}
          onChange={onCollapseChange}
          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
          style={{
            background: token.colorBgContainer
          }}>
          <Panel
            key="recipient"
            header={RecipientBlockPanelHeader()}>
            <RecipientBlock form={formRecipient} />
          </Panel>
        </Collapse>
        <Collapse
          accordion
          className="sg-c"
          activeKey={activeBlock}
          onChange={onCollapseChange}
          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
          style={{
            background: token.colorBgContainer
          }}>
          <Panel
            key="package"
            header={PackageBlockPanelHeader()}>
            <PackageBlock form={formPackage} />
          </Panel>
        </Collapse>
        <Collapse
          accordion
          className="sg-c"
          activeKey={activeBlock}
          onChange={onCollapseChange}
          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
          style={{
            background: token.colorBgContainer
          }}>
          <Panel
            key="carrier"
            header={RateBlockPanelHeader()}>
            <RateBlock form={formCarrier} />
          </Panel>
        </Collapse>
        <CheckoutDrawer
          price={price}
          placeOrder={placeOrder}
          open={checkoutDrawerOpen}
          closeCheckoutDrawer={closeCheckoutDrawer}
        />
      </>
    )
  }

  const renderResult = () => {
    return <ShipmentDetail />
  }

  return (
    <>
      <DashboardLayout>
        {(!shipmentCreated) ? renderSteps() : renderResult()}
      </DashboardLayout>
      <div ref={pageEndRef} />
    </>
  )
}

export default Single