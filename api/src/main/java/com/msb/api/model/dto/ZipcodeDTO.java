package com.msb.api.model.dto;

import lombok.Data;

@Data
public class ZipcodeDTO {
    private int zipcodeId;

    private String name;

    private String region;

    private String zone;

    private String territory;

    private String zipcode;
}
