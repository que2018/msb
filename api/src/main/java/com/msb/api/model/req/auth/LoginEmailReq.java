package com.msb.api.model.req.auth;

import lombok.Data;

import com.msb.api.until.validator.field.LoginEmail;

@Data
public class LoginEmailReq {

    @LoginEmail
    private String email;
}
