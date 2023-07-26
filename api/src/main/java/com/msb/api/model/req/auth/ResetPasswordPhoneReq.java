package com.msb.api.model.req.auth;

import lombok.Data;

import jakarta.validation.constraints.NotEmpty;

import com.msb.api.until.validator.field.ResetPasswordPhone;

@Data
public class ResetPasswordPhoneReq {
    @NotEmpty
    @ResetPasswordPhone
    private String phone;
}
