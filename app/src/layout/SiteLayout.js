//React Import
import React from "react"

//Antd Import
import { Layout, theme } from "antd"
const { Content } = Layout

//Component Import
import SiteMenu from "src/component/site/site_menu"
import SiteHeader from "src/component/site/site_header"
import SiteFooter from "src/component/site/site_footer"

const SiteLayout = ({ children }) => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <Layout>
      <Layout>
        <SiteHeader />
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
        <SiteFooter />
      </Layout>
    </Layout>
  )
}
export default SiteLayout