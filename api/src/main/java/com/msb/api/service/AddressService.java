package com.msb.api.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.msb.api.model.dto.AddressDTO;
import com.msb.api.model.req.AddressReq;
import com.msb.api.model.mapper.AddressMapper;

@Service
public class AddressService {
    @Autowired
    private AddressMapper addressMapper;

    public List<AddressDTO> getAddresses(AddressReq addressReq) {
        List<AddressDTO> addresses = addressMapper.getAddresses(addressReq);

        return addresses;
    }

    public Boolean updateAddress(AddressReq addressReq) {
        Boolean result = addressMapper.updateAddress(addressReq);

        return result;
    }
}
