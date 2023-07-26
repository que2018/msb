package com.msb.api.model.dto;

import java.io.Serializable;
import java.sql.Date;

import lombok.Data;

@Data
public class AddressDTO implements Serializable {
    private int addressId;

    private String Tracking;

    private String Reference;

    private String Street;

    private String Street2;

    private String City;

    private String State;

    private String zipcode;

    private String region;

    private String zone;

    private String territory;

    private Date dateIndex;

}
