package com.msb.api.service.auth;

import com.msb.api.service.ConfigService;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.msb.api.until.Datetimer;
import com.msb.api.until.RandomNumber;
import com.msb.api.model.mapper.ClientMapper;
import com.msb.api.model.req.auth.LoginAttemptReq;
import com.msb.api.model.req.auth.RegisterAttemptReq;
import com.msb.api.model.req.auth.ResetPasswordAttemptReq;

@Service
public class CodeService {

    @Autowired
    ClientMapper clientMapper;

    @Autowired
    ConfigService configService;

    public String updateRegisterAttempt(String phone) {
        String currentDateTime = Datetimer.getCurrentDateTime();
        int verificationCodeInt = RandomNumber.getRandomNumber(6);
        String verificationCode = String.valueOf(verificationCodeInt);

        String configVerificationValidMinStr = configService.getConfig("config_verification_valid_min");
        int configVerificationValidMin = Integer.parseInt(configVerificationValidMinStr);

        String expireTime = Datetimer.addMinutes(currentDateTime, configVerificationValidMin);

        RegisterAttemptReq registerAttemptReq = new RegisterAttemptReq();

        registerAttemptReq.setPhone(phone);
        registerAttemptReq.setExpireTime(expireTime);
        registerAttemptReq.setVerificationCode(verificationCode);

        clientMapper.updateRegisterAttempt(registerAttemptReq);

        return verificationCode;
    }

    public String updateLoginAttempt(long clientId) {
        String currentDateTime = Datetimer.getCurrentDateTime();
        int verificationCodeInt = RandomNumber.getRandomNumber(6);
        String verificationCode = String.valueOf(verificationCodeInt);

        String configVerificationValidMinStr = configService.getConfig("config_verification_valid_min");
        int configVerificationValidMin = Integer.parseInt(configVerificationValidMinStr);

        String expireTime = Datetimer.addMinutes(currentDateTime, configVerificationValidMin);

        LoginAttemptReq loginAttemptReq = new LoginAttemptReq();

        loginAttemptReq.setClientId(clientId);
        loginAttemptReq.setExpireTime(expireTime);

        loginAttemptReq.setVerificationCode(verificationCode);

        clientMapper.updateLoginAttempt(loginAttemptReq);

        return verificationCode;
    }

    public String updateResetPasswordAttempt(String phone) {
        String currentDateTime = Datetimer.getCurrentDateTime();
        int verificationCodeInt = RandomNumber.getRandomNumber(6);
        String verificationCode = String.valueOf(verificationCodeInt);

        String configVerificationValidMinStr = configService.getConfig("config_verification_valid_min");
        int configVerificationValidMin = Integer.parseInt(configVerificationValidMinStr);

        String expireTime = Datetimer.addMinutes(currentDateTime, configVerificationValidMin);

        ResetPasswordAttemptReq resetPasswordAttemptReq = new ResetPasswordAttemptReq();

        resetPasswordAttemptReq.setPhone(phone);
        resetPasswordAttemptReq.setExpireTime(expireTime);
        resetPasswordAttemptReq.setVerificationCode(verificationCode);

        clientMapper.updateResetPasswordAttempt(resetPasswordAttemptReq);

        return verificationCode;
    }
}
