package com.msb.api.model.mapper;

import com.msb.api.model.dto.SettingDTO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.cache.annotation.Cacheable;

@Mapper
public interface SettingMapper {

    @Cacheable(value = "config", key = "#key")
    SettingDTO getSetting(String key);
}
