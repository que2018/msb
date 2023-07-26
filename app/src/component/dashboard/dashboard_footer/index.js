//React Import
import React from "react"

//Antd Import
import { Layout } from "antd"
const { Footer } = Layout

const DashboardFooter = (props) => {
  return (
    <Footer
      style={{
        textAlign: "center",
      }}
      ref={props.footerRef}
    >
      SmartShip ©2023
    </Footer>
  )
}

export default DashboardFooter