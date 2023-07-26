package com.msb.api.model.req.auth;

import lombok.Data;

@Data
public class LoginAttemptReq {
    private long clientId;

    private String verificationCode;

    private String expireTime;
}
