package com.msb.api.model.req.auth;

import lombok.Data;

@Data
public class ResetPasswordAttemptReq {
    private String phone;

    private String verificationCode;

    private String expireTime;
}
