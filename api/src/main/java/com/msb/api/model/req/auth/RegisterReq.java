package com.msb.api.model.req.auth;

import com.msb.api.until.validator.field.RegisterVerificationCode;
import lombok.Data;

import jakarta.validation.constraints.NotEmpty;

import com.msb.api.until.validator.field.RegisterEmail;

@Data
@RegisterVerificationCode
public class RegisterReq {
    @NotEmpty
    @RegisterEmail
    private String email;

    @NotEmpty
    private String password;

    @NotEmpty
    private String phone;

    @NotEmpty
    private String verificationCode;
}
