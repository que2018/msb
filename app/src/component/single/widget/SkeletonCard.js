//React Import
import React from "react"

//Antd Import
import { Card, Skeleton } from "antd"

const SkeletonCard = (props) => {
  return (
    <Card style={{ margin: 10 }}>
      <div style={{ width: 260 }}>
        <Skeleton active />
      </div>
    </Card>
  )
}

export default SkeletonCard