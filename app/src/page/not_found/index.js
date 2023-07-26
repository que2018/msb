//React Import
import React from "react"

//Antd Import
import { Button, Result } from "antd"

const Create = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="link" href="/">Back Home</Button>}
    />
  )
}
export default Create