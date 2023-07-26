package com.msb.api.model.mapper;

import java.util.List;

import com.msb.api.model.dto.AddressDTO;
import com.msb.api.model.req.AddressReq;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AddressMapper {
    List<AddressDTO> getAddresses(AddressReq addressReq);

    int getTotalAddress(AddressReq addressReq);

    int getMinAddressId(AddressReq addressReq);

    int getMaxAddressId(AddressReq addressReq);

    Boolean updateAddress(AddressReq addressReq);
}
