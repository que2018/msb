//React Import
import React from "react"
import { useState, useEffect } from "react"

// Store & Actions Imports
import { useDispatch, useSelector } from "react-redux"
import { getCompletedOrders } from "src/store/app/completed"

//Antd Import
import { Space, Table, Image, List, Typography, Pagination } from "antd"
const { Text } = Typography

//Layout Import
import DashboardLayout from "src/layout/DashboardLayout"

//Component Import
import OrderFilter from "src/component/completed/OrderFilter"
import OrderDetailDrawer from "src/component/completed/OrderDetailDrawer"

const Completed = () => {
  // State
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [dateTo, setDateTo] = useState("")
  const [dateFrom, setDateFrom] = useState("")
  const [rowData, setRowData] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const closeDrawer = () => {
    setDrawerOpen(false)
  }

  // Hooks
  const dispatch = useDispatch()
  const store = useSelector(state => state.completed)

  useEffect(() => {
    if (dateFrom && dateTo) {
      dispatch(
        getCompletedOrders({
          page: page,
          limit: pageSize,
          filter: {
            created_at: {
              "$gte": dateFrom,
              "$lte": dateTo
            }
          },
          status: "completed"
        })
      )
    } else {
      dispatch(
        getCompletedOrders({
          page: page,
          limit: pageSize,
          filter: {},
          status: "completed"
        })
      )
    }
  }, [page, pageSize, dateFrom, dateTo])

  // Column
  const columns = [
    {
      title: "运单号",
      key: "tracking",
      render: (_, record) => {
        const parcel = record.parcel.parcelList[0]
        const trackingNumber = parcel["tracking_numbers"][0]

        return (
          <a onClick={() => openDetailDrawer(record)}>{trackingNumber}</a>
        )
      }
    },
    {
      title: "服务",
      key: "service",
      render: (_, record) => (
        <Space size="small">
          <Image
            width={30}
            src={record.service.asset.logo_url}
          />
          <span>{record.service.mail_class}</span>
        </Space>
      )
    },
    {
      title: "运费金额",
      key: "amount",
      render: (_, record) => (
        <>${record.postage.billing_amount.total}</>
      )
    },
    {
      title: "重量(lb)",
      key: "weight",
      render: (_, record) => (
        <>{record.parcel.weight}</>
      )
    },
    {
      title: "收货州",
      key: "recipient",
      render: (_, record) => (
        <Space size="small">
          <span>{record.recipient.state}</span>
          <span>{record.recipient.zipcode}</span>
        </Space>
      )
    },
    {
      title: "创建时间",
      key: "created_at",
      dataIndex: "created_at"
    }
  ]

  const openDetailDrawer = (record) => {
    const rowData = rendorDrawData(record)

    setRowData(rowData)
    setDrawerOpen(true)
  }

  const onOrderFilterChange = (value, dateString) => {
    setDateFrom(dateString[0])
    setDateTo(dateString[1])
  }

  const rendorParcelList = (record) => {
    const parcelList = record.parcel.parcelList

    return (
      <List
        header={<Text strong>子运单</Text>}
        dataSource={parcelList}
        renderItem={(item) => (
          <List.Item>
            <>{item["tracking_numbers"][0]}</>
          </List.Item>
        )}
      />
    )
  }

  const rendorDrawData = (record) => {
    var senderInfo = record.sender.sender_name;
    senderInfo += " " + record.sender.add1;

    if (record.sender.add2) {
      senderInfo += " " + record.sender.add2;
    }

    senderInfo += " " + record.sender.city;
    senderInfo += " " + record.sender.state;
    senderInfo += " " + record.sender.zipcode;

    var recipientInfo = record.recipient.recipient_name;
    recipientInfo += " " + record.recipient.add1;

    if (record.recipient.add2) {
      senderInfo += " " + record.recipient.add2;
    }

    recipientInfo += " " + record.recipient.city;
    recipientInfo += " " + record.recipient.state;
    recipientInfo += " " + record.recipient.zipcode;

    const labels = []

    record.parcel.parcelList.map(function (parcel) {
      labels.push(parcel.label[0])
    })

    return {
      labels: labels,
      status: record.status,
      senderInfo: senderInfo,
      recipientInfo: recipientInfo,
      weight: record.parcel.weight,
      logoUrl: record.service.asset.logo_url,
      carrierType: record.service.carrier_type,
      customerOrderId: record.customer_order_id,
      billing_amount: record.postage.billing_amount.total,
      original_charge: record.postage.billing_amount.original_charge
    }
  }

  const onPageChange = (page) => {
    setPage(page)
  }

  const onPageSizeChange = (page, pageSize) => {
    setPage(page)
    setPageSize(pageSize)
  }

  return (
    <DashboardLayout>
      <OrderFilter
        onChange={onOrderFilterChange}>
      </OrderFilter>
      <Space
        direction="vertical"
        size="large"
        style={{
          display: "flex"
        }}
      >
        <Table
          columns={columns}
          rowKey={(record) => record._id}
          dataSource={store.completedOrders}
          pagination={false}
          expandable={{
            rowExpandable: (record) => {
              const parcelList = record.parcel.parcelList

              if (parcelList.length > 1) {
                return true;
              } else {
                return false;
              }
            },
            expandedRowRender: (record) => rendorParcelList(record),
          }}
        />
        <Space
          direction="horizontal"
          style={{
            width: "100%",
            justifyContent: "center"
          }}>
          <Pagination
            current={page}
            pageSize={pageSize}
            total={store.totalCompletedOrder}
            onChange={onPageChange}
            onShowSizeChange={onPageSizeChange}
          />
        </Space>
      </Space>
      <OrderDetailDrawer
        data={rowData}
        open={drawerOpen}
        onClose={closeDrawer}>
      </OrderDetailDrawer>
    </DashboardLayout>
  )
}

export default Completed