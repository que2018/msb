package com.msb.api.model.req;

import java.sql.Date;

import lombok.Data;

@Data
public class AddressReq {
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

    private String dateFrom;

    private String dateTo;

    private int start;

    private int limit;

    private Date dateIndex;
}
