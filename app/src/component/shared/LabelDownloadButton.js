//React Import
import React from "react"

//Antd Import
import { Button } from "antd"
import { DownloadOutlined } from "@ant-design/icons"

//Third Party Import
import { PDFDownloadLink, Document, Page, View, Image } from "@react-pdf/renderer"

const LabelDownloadButton = (props) => {
  const LabelDoc = () => (
    <Document>
      <Page>
        <View>
        {props.labels.map(function(label) {
          return (
           <Image src={label}></Image>
          )
          })}
        </View>
      </Page>
    </Document>
  )

  return (
    <Button
      type="primary"
      icon={<DownloadOutlined />}
    >
      <PDFDownloadLink document={<LabelDoc />} fileName="label.pdf">
        {({ loading }) =>
          loading ? '准备中..' : 'PDF下载'
        }
      </PDFDownloadLink>
    </Button>
  )
}

export default LabelDownloadButton