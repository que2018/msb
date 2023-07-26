package com.msb.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.msb.api.model.dto.ZipcodeDTO;
import com.msb.api.model.mapper.ZipcodeMapper;

@Service
public class ZipcodeService {

    @Autowired
    private ZipcodeMapper zipcodeMapper;

    public ZipcodeDTO getZipcodeByZipcode(String zipcode) {
        ZipcodeDTO zipcodeDTO = zipcodeMapper.getZipcodeByZipcode(zipcode);

        return zipcodeDTO;
    }
}
