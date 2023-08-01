package com.msb.api.model.req.auth;

import com.msb.api.until.validator.field.LoginVerificationCode;
import jakarta.validation.constraints.NotEmpty;

import lombok.Data;

@Data
public class LoginReq {
    @NotEmpty
    private String username;

    @NotEmpty
    private String password;

    private String verificationCode;
}
