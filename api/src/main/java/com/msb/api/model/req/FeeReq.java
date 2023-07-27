package com.msb.api.model.req;

import lombok.Data;

import jakarta.validation.constraints.NotEmpty;

@Data
public class FeeReq {
    private int amount;

    private String country;
}
