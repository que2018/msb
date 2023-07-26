package com.msb.api.model.dao;

import lombok.Data;

import java.util.Date;

@Data
public class Client {

    private Long clientId;

    private String email;

    private String password;

    private String phone;

    private String verificationCode;

    private Date expireTime;

    private Boolean status;
}
