package com.msb.api.model.mapper;

import com.msb.api.model.dto.SmsDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SmsMapper {
    SmsDTO getSmsByCode(String code);
}
