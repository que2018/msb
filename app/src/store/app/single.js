import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

//Axios Imports
import axios from "axios"

//Get Sender Addresses
export const getSenderAddresses = createAsyncThunk("single/getSenderAddresses", async () => {
  const response = await axios.post("/api/user/get_address", {
    type: "default"
  })
  return response.data
})

//Get Recipient Addresses
export const getRecipientAddresses = createAsyncThunk("single/getRecipientAddresses", async () => {
  const response = await axios.post("/api/user/get_address", {
    type: "recipient"
  })
  return response.data
})

//Get Rate
export const getRates = createAsyncThunk("single/getRates", async (args, { getState }) => {
  const state = getState()

  var parcelList = []

  for (const parcelData of state.single.parcelList) {
    const parcel = {
      "pack_info": {
        "pack_type": "FEDEX_ENVELOPE",
        "same_pack": parcelData.same_pack,
        "weight": parcelData.weight,
        "length": parcelData.length,
        "width": parcelData.width,
        "height": parcelData.height
      }
    }

    parcelList.push(parcel)
  }

  const params = {
    "sender_information": {
      "nickname": "TX-Smartship",
      "_id": "TX-SmartshipShipping  Manager, 2951 S Valley Pkwy, Lewisville, TX 75067",
      "sender_name": state.single.senderName,
      "sender_phone_number": state.single.senderPhoneNumber,
      "sender_company": state.single.senderCompany,
      "sender_add1": state.single.senderAddr1,
      "sender_add2": state.single.senderAddr2,
      "sender_zip_code": state.single.senderZipcode,
      "sender_city": state.single.senderCity,
      "sender_state": state.single.senderState
    },
    "receipant_information": {
      "font_type": "strong",
      "receipant_name": state.single.recipientName,
      "receipant_phone_number": state.single.recipientPhoneNumber,
      "receipant_company": state.single.recipientCompany,
      "receipant_add1": state.single.recipientAddr1,
      "receipant_add2": state.single.recipientAddr2,
      "receipant_zip_code": state.single.recipientZipcode,
      "receipant_city": state.single.recipientCity,
      "receipant_state": state.single.recipientState,
      "receipant_is_residential": false
    },
    "parcel_information": {
      "unit_length": state.lengthUnit,
      "unit_weight": state.weightUnit,
      "parcel_list": parcelList
    }
  }

  const response = await axios.post("/api/user/get_rate", params)
  return response.data
})

//Create Shipment
export const createShipment = createAsyncThunk("single/createShipment", async (args, { getState }) => {
  const state = getState()

  var parcelList = []

  for (const parcelData of state.single.parcelList) {
    const parcel = {
      "pack_info": {
        "pack_type": "FEDEX_ENVELOPE",
        "same_pack": parcelData.same_pack,
        "weight": parcelData.weight,
        "length": parcelData.length,
        "width": parcelData.width,
        "height": parcelData.height
      }
    }

    parcelList.push(parcel)
  }

  console.log(parcelList)
  console.log(state.single.rate)

  const params = {
    "sender_information": {
      "sender_name": state.single.senderName,
      "sender_phone_number": state.single.senderPhoneNumber,
      "sender_company": state.single.senderCompany,
      "sender_add1": state.single.senderAddr1,
      "sender_add2": state.single.senderAddr2,
      "sender_city": state.single.senderCity,
      "sender_state": state.single.senderState,
      "sender_zip_code": state.single.senderZipcode
    },
    "receipant_information": {
      "receipant_name": state.single.recipientName,
      "receipant_phone_number": state.single.recipientPhoneNumber,
      "receipant_company": state.single.recipientCompany,
      "receipant_add1": state.single.recipientAddr1,
      "receipant_add2": state.single.recipientAddr2,
      "receipant_city": state.single.recipientCity,
      "receipant_state": state.single.recipientState,
      "receipant_zip_code": state.single.recipientZipcode,
      "receipant_is_residential": false
    },
    "parcel_information": {
      "unit_length": state.single.lengthUnit,
      "unit_weight": state.single.weightUnit,
      "parcel_list": parcelList
    },
    "service_information": {
      "service_content": [
        {
          "carrier": state.single.rate.carrier,
          "service_name": state.single.rate.mail_class,
          "service_source": state.single.rate.asset.name,
          "agent": "default",
          "code": state.single.rate._id,
          "unit_weight": state.single.weightUnit,
          "RateType": "package",
          "packageList": parcelList
        }
      ]
    }
  }

  const response = await axios.post("/api/user/create_shipment", params)
  
  return response.data
})

export const singleSlice = createSlice({
  name: "single",
  initialState: {
    rate: null,
    weightUnit: "lb",
    lengthUnit: "inch",
    senderName: "",
    senderCompany: "",
    senderPhoneNumber: "",
    senderAddr1: "",
    senderAddr2: "",
    senderCity: "",
    senderState: "",
    senderZipcode: "",
    recipientName: "",
    recipientCompany: "",
    recipientPhoneNumber: "",
    recipientAddr1: "",
    recipientAddr2: "",
    recipientCity: "",
    recipientState: "",
    recipientZipcode: "",
    parcelList: [],
    rates: [],
    rateGenerated: false,
    lengthUnit: "inch",
    weightUnit: "lb",
    senderAddress: null,
    recipientAddress: null,
    senderAddresses: [],
    recipientAddresses: [],
    senderAddressDictionary: {},
    recipientAddressDictionary: {},


    shipmentDetail: {
      "service": {
        "asset": {
          "logo_url": "https://ship-service.s3.us-west-2.amazonaws.com/logo/fedex-square.png",
          "description": "1-3 days",
          "code": "639eafad8a2de90ea55ae8b9"
        },
        "_id": "639eafad8a2de90ea55ae8b9",
        "carrier": "639eafad8a2de90ea55ae8b4",
        "carrier_type": "FEDEX",
        "mail_class": "Express Saver"
      },
      "type": "Domestic_ship",
      "status": "completed",
      "server_status": "default",
      "ledger": [],
      "_id": "64aeca208bf536d95386fd44",
      "customer_order_id": "D202307121507CAp-GxMfU",
      "order_id": "D202307121507CAp-GxMfU",
      "sender": {
        "Company": "",
        "sender_name": "Sam",
        "add1": "12012 Lambert Ave",
        "add2": "",
        "state": "CA",
        "city": "El Monte",
        "zipcode": "91732",
        "phone_number": "111111"
      },
      "recipient": {
        "Company": "",
        "recipient_name": "Lucy",
        "add1": "18065 Gale Ave",
        "add2": "",
        "state": "CA",
        "city": "City of Industry",
        "zipcode": "91748",
        "phone_number": "88888888",
        "is_res": false
      },
      "parcel": {
        "weight": 1,
        "billing_weight": 0.5,
        "parcelList": [
          {
            "label": [
              "https://ship-service.s3.us-west-2.amazonaws.com/labels/2023-07-12/781033244477.png"
            ],
            "tracking_numbers": [
              "781033244477"
            ],
            "_id": "64aeca208bf536d95386fd45",
            "weight": 1,
            "postage": {
              "billing_amount": {
                "baseCharges": 16.23,
                "surCharges": [
                  {
                    "SurchargeType": "FUEL",
                    "Description": "Fuel",
                    "Amount": {
                      "Currency": "USD",
                      "Amount": 2.27
                    }
                  }
                ]
              }
            },
            "length": 1,
            "height": 1,
            "width": 1,
            "pack_type": "FEDEX_ENVELOPE"
          }
        ]
      },
      "postage": {
        "billing_amount": {
          "total": 18.5,
          "original_charge": 18.5
        }
      },
      "user": "5efbd6006347475f2802a725",
      "created_at": "2023-07-12 15:43:28"
    }
    
  },
  reducers: {
    setSenderInfo: (state, action) => {
      const senderInfo = action.payload

      state.senderName = senderInfo.sender_name
      state.senderPhoneNumber = senderInfo.sender_phone_number

      if (senderInfo.sender_company) {
        state.senderCompany = senderInfo.sender_company
      }

      state.senderAddr1 = senderInfo.sender_addr1
      state.senderCity = senderInfo.sender_city
      state.senderState = senderInfo.sender_state
      state.senderZipcode = senderInfo.sender_zip_code
    },
    setRecipientInfo: (state, action) => {
      const recipientInfo = action.payload

      state.recipientName = recipientInfo.recipient_name
      state.recipientPhoneNumber = recipientInfo.recipient_phone_number

      if (recipientInfo.recipient_company) {
        state.recipientCompany = recipientInfo.recipient_company
      }

      state.recipientAddr1 = recipientInfo.recipient_addr1
      state.recipientCity = recipientInfo.recipient_city
      state.recipientState = recipientInfo.recipient_state
      state.recipientZipcode = recipientInfo.recipient_zip_code
    },
    setParcelList: (state, action) => {
      state.parcelList = action.payload
    },
    setSenderAddress: (state, action) => {
      state.senderAddress = action.payload
    },
    setRecipientAddress: (state, action) => {
      state.recipientAddress = action.payload
    },
    setWeightUnit: (state, action) => {
      state.weightUnit = action.payload
    },
    setLengthUnit: (state, action) => {
      state.lengthUnit = action.payload
    },
    setRate: (state, action) => {
      state.rate = action.payload
    },
    setRateGenerated: (state, action) => {
      state.rateGenerated = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(getSenderAddresses.fulfilled, (state, action) => {
      state.senderAddresses = action.payload.data.docs

      state.senderAddressDictionary = Object.assign({}, ...action.payload.data.docs.map((address) => ({
        [address.nickname]: address
      })))
    }),
    builder.addCase(getRecipientAddresses.fulfilled, (state, action) => {
      state.recipientAddresses = action.payload.data.FBAlocation

      state.recipientAddressDictionary = Object.assign({}, ...action.payload.data.FBAlocation.map((address) => ({
        [address.label]: address
      })))
    }),
    builder.addCase(getRates.fulfilled, (state, action) => {
      state.rateGenerated = true
      state.rates = action.payload.data

      console.log(action.payload.data)

    }),
    builder.addCase(createShipment.fulfilled, (state, action) => {
      console.log(action.payload)
    })
  }
})

export const {
  setSenderInfo,
  setRecipientInfo,
  setParcelList,
  setRate,
  setRateGenerated,
  setSenderAddress,
  setRecipientAddress
} = singleSlice.actions

export default singleSlice.reducer
