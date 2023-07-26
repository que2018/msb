//React Import
import React, { useRef } from "react"

//Antd Import
import { Button, Image } from "antd"
import { PrinterOutlined } from "@ant-design/icons"

//Third Party Import
import ReactToPrint from "react-to-print"

//css Import
import "src/style/component/completed/label_print_button.css"

class ComponentToPrint extends React.PureComponent {
  render() {
    const { labels } = this.props

    return (
      <div className="lp-content">
        <>
        {labels.map(function(label) {
          return (
           <Image src={label}></Image>
          )
          })}
        </>
      </div>
    )
  }
}

const LabelPrintButton = (props) => {
  const componentRef = useRef()

  return (
    <>
      <ReactToPrint
        trigger={() => (
          <Button
            type="primary"
            icon={<PrinterOutlined />}
          >
            打印运单
          </Button>
        )}
        content={() => componentRef.current}
      />
      <ComponentToPrint labels={props.labels} ref={componentRef} />
    </>
  )
}

export default LabelPrintButton