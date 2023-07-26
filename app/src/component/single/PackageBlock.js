//React Import
import React, { useState } from "react"

//Antd Import
import { Space, Button, Form, Radio } from "antd"
import { FileAddOutlined, FolderOutlined } from "@ant-design/icons"

//Component Import
import Package from "src/component/single/widget/Package"

//css Import
import "src/style/component/single/package_block.css"

const PackageBlock = (props) => {
  //Props
  const form = props.form

  // State
  const [packages, setPackages] = useState([{}])
  const [weightUnit, setWeightUnit] = useState("lb");
  const [lengthUnit, setLengthUnit] = useState("inch");

  const addPackage = (record) => {
    const newPackages = [...packages]
    newPackages.push({})
    setPackages(newPackages)
  }

  const deletePackage = (index) => {
    var newPackages = [...packages]
    newPackages.splice(index, 1)
    setPackages(newPackages)
  }

  const onWeightUnitChange = (e) => {
    setWeightUnit(e.target.value)

    dispatch(
      setWeightUnit(e.target.value)
    )
  }

  const onLengthUnitChange = (e) => {
    setLengthUnit(e.target.value)

    dispatch(
      setLengthUnit(e.target.value)
    )
  }

  return (
    <Form
      form={form}
      layout="vertical"
      autoComplete="off"
    >
      <div className="pb-wrap">
        <Space
          direction="vertical"
          size="middle"
          style={{
            display: "flex"
          }}
        >
          <Space
            direction="horizontal"
            className="pb-unit"
          >
            <span style={{marginLeft: "auto"}}>重量单位&nbsp;&nbsp;&nbsp;</span>
            <Radio.Group onChange={onWeightUnitChange} value={weightUnit}>
              <Radio value={"oz"}>OZ</Radio>
              <Radio value={"lb"}>LB</Radio>
              <Radio value={"kg"}>KG</Radio>
            </Radio.Group>
            <span>长度单位&nbsp;&nbsp;&nbsp;</span>
            <Radio.Group onChange={onLengthUnitChange} value={lengthUnit}>
              <Radio value={"inch"}>INCH</Radio>
              <Radio value={"cm"}>CM</Radio>
            </Radio.Group>
          </Space>
          <Space
            direction="vertical"
            size="middle"
            style={{
              display: "flex"
            }}
          >
            {packages.map(function (item, index) {
              return (
                <Package
                  key={index}
                  index={index}
                  name={item.name}
                  className="pk-container"
                  deletePackage={() => deletePackage(index)} />)
            })}
          </Space>
          <div className="pb-btns">
            <Space
              size="middle"
              style={{
                display: "flex"
              }}
            >
              <Button icon={<FolderOutlined />} onClick={addPackage}>收起面板</Button>
              <Button icon={<FileAddOutlined />} onClick={addPackage}>添加单个</Button>
            </Space>
          </div>
        </Space>
      </div>
    </Form>
  )
}

export default PackageBlock