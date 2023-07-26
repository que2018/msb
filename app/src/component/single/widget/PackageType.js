//React Import
import React from "react"

//Antd Import
import { Select, Space, Button, Divider, Image } from "antd"
const { Option, OptGroup } = Select

import { PlusOutlined } from '@ant-design/icons';

//css Import
import "src/style/component/single/widget/package_type.css"

const PackageType = () => {

  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }

  const renderGroupLabel = (carrier) => {
    let imgSrc

    if (carrier == "ups") {
      imgSrc = "https://ship-service.s3-us-west-2.amazonaws.com/logo/ups.jpeg"
    } else {
      imgSrc = "https://ship-service.s3.us-west-2.amazonaws.com/logo/fedex-square.png"
    }

    return (
      <Image width={25} src={imgSrc} />
    )
  }

  return (
    <Select
      className="pt-wrap"
      onChange={handleChange}
      dropdownRender={(menu) => (
        <>
          {menu}
          <Divider style={{ margin: '8px 0' }} />
          <Space style={{ padding: '0 8px 4px' }}>
            <Button type="text" icon={<PlusOutlined />}>
              自定义包裹
            </Button>
          </Space>
        </>
      )}
    >
      <OptGroup label={renderGroupLabel("fedex")} >
        <Option value="FEDEX_ENVELOPE">
          <Space>
            <span class="pt-option-name">FedEx Envelope</span>
            <span class="pt-option-size">9-1/2" x 12-1/2'</span>
          </Space>
        </Option>
        <Option value="FEDEX_PAK">
          <Space>
            <span class="pt-option-name">FedEx Pak</span>
            <span class="pt-option-size">12" x 15-1/2"</span>
          </Space>
        </Option>
      </OptGroup>
      <OptGroup label={renderGroupLabel("ups")} >
        <Option value="UPS_LETTER">
          <Space>
            <span class="pt-option-name">UPS Letter</span>
            <span class="pt-option-size">9-1/2" x 12-1/2"</span>
          </Space>
        </Option>
        <Option value="UPS_PAK">
          <Space>
            <span class="pt-option-name">UPS Pak</span>
            <span class="pt-option-size">12.75" x 16"</span>
          </Space>
        </Option>
      </OptGroup>
    </Select>
  )
}

export default PackageType