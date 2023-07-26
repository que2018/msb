package com.msb.api.model.dto;

import java.io.Serializable;

import lombok.Data;

@Data
public class SettingDTO implements Serializable {

    private int settingId;

    private String code;

    private String key;

    private String value;

    private int serialized;

}
