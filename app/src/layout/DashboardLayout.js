//React Import
import React from "react"

//Antd Import
import { Layout, theme } from "antd"
const { Content, Sider } = Layout

//Component Import
import DashboardMenu from "src/component/dashboard/dashboard_menu"
import DashboardHeader from "src/component/dashboard/dashboard_header"
import DashboardFooter from "src/component/dashboard/dashboard_footer"

//Css Import
import "src/style/dashboard.css"

const DashboardLayout = ({ children }) => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          //console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          //console.log(collapsed, type)
        }}
      >
        <div className="block-logo" />
        <DashboardMenu />
      </Sider>
      <Layout>
        <DashboardHeader />
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer
            }}
          >
            {children}
          </div>
        </Content>
        <DashboardFooter />
      </Layout>
    </Layout>
  )
}
export default DashboardLayout