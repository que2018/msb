//React Import
import React from "react"

//Antd Import
import { Card, Image } from "antd"

//css Import
import "src/style/component/single/widget/rate_card.css"

const RateCard = (props) => {
  const price = props.data.price
  const name = props.data.asset.name
  const mailClass = props.data.mail_class
  const logoUrl = props.data.asset.logo_url
  const description = props.data.description

  let actualPrice

  if(!!price) {
    if(!!price.NegotiateTotal) {
      actualPrice = "$" + price.NegotiateTotal
    } else {
      actualPrice = "$" + price.total
    }
  } else {
    actualPrice = ""
  }

  const getTitle = (description) => {
    return (
      <div className="rc-title">
        <span className="rc-desp">{description}</span>
        <span className="rc-price">{actualPrice}</span>
      </div>
    )
  }

  return (
    <Card 
      type="inner"
      className="rc-card"
      title={getTitle(description)}
      style={{ margin: 12 }}>
      <div className="rc-content">
        <Image width={40} src={logoUrl} />
        <span className="rc-carrier">&nbsp;&nbsp;{mailClass}</span>
      </div>
      <div className="rc-name">来源:{name}</div>
    </Card>
  )
}

export default RateCard