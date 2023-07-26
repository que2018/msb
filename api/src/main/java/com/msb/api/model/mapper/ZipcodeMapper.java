package com.msb.api.model.mapper;

import com.msb.api.model.dto.ZipcodeDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ZipcodeMapper {
    ZipcodeDTO getZipcodeByZipcode(String zipcode);
}