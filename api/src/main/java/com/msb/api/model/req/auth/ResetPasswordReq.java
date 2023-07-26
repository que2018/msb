package com.msb.api.model.req.auth;

import lombok.Data;

import jakarta.validation.constraints.NotEmpty;

import com.msb.api.until.validator.field.ResetPasswordVerificationCode;

@Data
@ResetPasswordVerificationCode
public class ResetPasswordReq {
    @NotEmpty
    private String email;

    @NotEmpty
    private String passwordNew;

    @NotEmpty
    private String verificationCode;
}
