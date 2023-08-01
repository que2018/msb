
// React Import
import React, { useEffect } from "react"

// Store & Actions Imports
import { useDispatch, useSelector } from "react-redux"
import { getArticle } from "src/store/app/article"

// Antd Import
import { Card, Space } from "antd"

// Layout Import
import SiteLayout from "src/layout/SiteLayout"

// css Import
import "src/style/common.css"

const About = () => {

  // Hooks
  const dispatch = useDispatch()
  const store = useSelector(state => state.article)

  useEffect(() => {
    dispatch(
      getArticle("about")
    )
  }, [])

  return (
    <SiteLayout>
      <Space
        direction="vertical"
        size="middle"
        style={{
          display: "flex"
        }}
      >
        <Card title={store.title} bordered={false}>
          {store.content}
        </Card>
      </Space>
    </SiteLayout>
  )
}

export default About