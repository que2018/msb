//React Import
import React, { useEffect } from "react"

// Store & Actions Imports
import { useDispatch, useSelector } from "react-redux"
import { getRates, setRate } from "src/store/app/single"

//Antd Import
import { Space, Form, Row, Col } from "antd"

//Component Import
import RateCard from "src/component/single/widget/RateCard"
import SkeletonCard from "src/component/single/widget/SkeletonCard"

//css Import
import "src/style/component/single/recipient_block.css"

const RateBlock = (props) => {
  //Props
  const form = props.form

  //Hooks
  const dispatch = useDispatch()
  const store = useSelector(state => state.single)
  useEffect(() => {
    dispatch(
      getRates()
    )
  }, [dispatch])

  const cardClick = (index) => {
    const rate = store.rates[index].data

    dispatch(
      setRate(rate)
    )
  }

  return (
    <Form
      form={form}
      layout="vertical"
      autoComplete="off"
    >
      <Space
        size="small"
        className="sd-wrap"
        direction="vertical">
        {(store.rates.length > 0)
          ?
          <Row>
            {store.rates.map(function (item, index) {
              return (
                <Col
                  span={8}
                  key={index} >
                  <div onClick={() => cardClick(index)}>
                    <RateCard
                      key={index}
                      data={item.data}
                      className="ca-container" />
                  </div>
                </Col>
              )
            })}
          </Row>
          : (
            <Row>
              <Col span={8}>
                <SkeletonCard />
              </Col>
              <Col span={8}>
                <SkeletonCard />
              </Col>
              <Col span={8}>
                <SkeletonCard />
              </Col>
              <Col span={8}>
                <SkeletonCard />
              </Col>
            </Row>
          )
        }
      </Space>
    </Form>
  )
}

export default RateBlock