
//React Import
import React, { useState } from "react"

//Antd Import
import { AutoComplete } from "antd"

// Store & Actions Imports
import { useDispatch } from "react-redux"
import { setRecipientAddress } from "src/store/app/single"

//Third Party Import
import { useLoadScript } from "@react-google-maps/api"
import usePlacesAutocomplete, { getDetails } from "use-places-autocomplete";

//css Import
import "src/style/component/single/widget/autocomplete_input.css"

const libraries = ["places"]

export default function RecipientAutocompleteInput(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC2-08Fdw3A48w_wi3aophkyWDnyJ5kgXk",
    libraries: libraries
  })

  if (!isLoaded) return <></>

  return (
    <PlacesAutocomplete placeholder={props.placeholder} />
  )
}

const PlacesAutocomplete = (props) => {
  // States
  const [options, setOptions] = useState([])
  const [addressDictionary, setAddressDictionary] = useState([])

  // Hooks
  const dispatch = useDispatch()

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSearch = (value) => {
    if(value) {
      setValue(value)

      const options = data.map((address) => {
        const streetNumber = address.terms[0].value 
        const streetName = address.terms[1].value
        const value = streetNumber + " " + streetName

        return {
          value: value,
          key: address.place_id,
          placeId: address.place_id,
          label: address.description
        } 
      })

      const addressDictionary = Object.assign({}, ...data.map((address) => {
        const streetNumber = address.terms[0].value 
        const streetName = address.terms[1].value
        const key = streetNumber + " " + streetName

        return {
          [key]: address
        }
      }))

      setOptions(options)
      setAddressDictionary(addressDictionary)
    } else {
      setOptions([])
      setAddressDictionary([])

      dispatch(
        setRecipientAddress(null)
      )
    }
  }

  const handleSelect = (value) => {
    const address = addressDictionary[value]
    
    const parameter = {
      placeId: address.place_id
    }

    getDetails(parameter).then((detail) => {
      var address = {}

      address.formattedAddress = detail.formatted_address

      detail.address_components.forEach(function (item, index) {
        if(item.types[0] == "street_number") {
          address.street = item.short_name
        } else if(item.types[0] == "route") {
          address.street += " " + item.short_name
        } else if(item.types[0] == "locality") {
          address.city = item.short_name
        } else if(item.types[0] == "administrative_area_level_1") {
          address.state = item.short_name
        } else if(item.types[0] == "country") {
          address.country = item.short_name
        } else if(item.types[0] == "postal_code") {
          address.zipcode = item.short_name
        }         
      })

      dispatch(
        setRecipientAddress(address)
      )
    })
  }

  return (
    <AutoComplete
      className="apto-input"
      onSearch={handleSearch}
      onSelect={handleSelect}
      placeholder={props.placeholder}
      options={options}
    />
  )
}
