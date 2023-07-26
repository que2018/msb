package com.msb.api.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.msb.api.model.dto.SettingDTO;
import com.msb.api.model.mapper.SettingMapper;

@Service
public class ConfigService {
    @Autowired
    private SettingMapper settingMapper;

    public String getConfig(String key) {
        SettingDTO settingDTO = settingMapper.getSetting(key);

        return settingDTO.getValue();
    }
}
