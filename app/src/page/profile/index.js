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

const Profile = () => {
  return (
    <>
      profile
    </>
  )
}

export default Profile