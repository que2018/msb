package com.msb.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

import com.msb.api.model.dto.AddressDTO;
import com.msb.api.model.dto.ZipcodeDTO;
import com.msb.api.model.req.AddressReq;
import com.msb.api.model.mapper.AddressMapper;
import com.msb.api.model.mapper.ZipcodeMapper;

@Component
public class AsyncZoneService {
    @Autowired
    private ZipcodeMapper zipcodeMapper;

    @Autowired
    private AddressMapper addressMapper;

    @Async
    public void syncAddresses(AddressReq addressReq) {
        List<AddressDTO> addresses = addressMapper.getAddresses(addressReq);

        if (addresses != null) {
            for (int index = 0; index < addresses.size(); index++) {
                AddressDTO addressDTO = addresses.get(index);
                String zipcode = addressDTO.getZipcode();
                int addressId = addressDTO.getAddressId();

                ZipcodeDTO zipcodeDTO = zipcodeMapper.getZipcodeByZipcode(zipcode);

                if (zipcodeDTO != null) {
                    String region = zipcodeDTO.getRegion();

                    if (region != null) {
                        AddressReq addressReqUpdate = new AddressReq();
                        addressReqUpdate.setAddressId(addressId);
                        addressReqUpdate.setRegion(region);

                        addressMapper.updateAddress(addressReqUpdate);

                        System.out.println("Thread Position: " + addressReq.getStart() + " update region for address id: " + addressId + " region: " + region);
                    }
                }
            }
        }
    }
}
