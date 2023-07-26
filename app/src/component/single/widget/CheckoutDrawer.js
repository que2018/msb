//React Import
import React from "react"

//Antd Import
import { Drawer, Button } from "antd"

//css Import
import "src/style/component/single/widget/checkout_drawer.css"

const CheckoutDrawer = (props) => {
  return (
    (props.price != null)
    ? (<Drawer
        placement={"bottom"}
        height={80}
        closable={false}
        open={props.open}
        onClose={props.closeCheckoutDrawer}
      >
        <div className="cd-content">
          <span className="cd-title">{"支付费用:"}&nbsp;${props.price}</span>
          <Button type="primary" className="cd-button" onClick={props.placeOrder}>购买</Button>
        </div>
      </Drawer>)
    : <></>
  )
}

export default CheckoutDrawer