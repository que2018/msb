package com.msb.api.model.dto;

import lombok.Data;

@Data
public class ClientDTO {
    private Long clientId;

    private String username;

    private String email;

    private String password;

    private String phone;

    private String verificationCode;

    private String expireTime;

    private Boolean status;
}
