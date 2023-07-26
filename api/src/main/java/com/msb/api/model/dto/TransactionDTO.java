package com.msb.api.model.dto;

import lombok.Data;

import java.sql.Date;

@Data
public class TransactionDTO {
    private Long transactionId;

    private Long ClientId;

    private String type;

    private Float amount;

    private Date dateAdded;
}
