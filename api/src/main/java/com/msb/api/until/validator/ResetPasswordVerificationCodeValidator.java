package com.msb.api.until.validator;

import com.msb.api.model.dto.ClientDTO;
import com.msb.api.model.mapper.ClientMapper;
import com.msb.api.model.req.auth.ResetPasswordReq;
import com.msb.api.until.Datetimer;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import org.springframework.beans.factory.annotation.Autowired;

import com.msb.api.until.validator.field.ResetPasswordVerificationCode;

public class ResetPasswordVerificationCodeValidator implements ConstraintValidator<ResetPasswordVerificationCode, ResetPasswordReq> {

    @Autowired
    ClientMapper clientMapper;

    public void initialize(ResetPasswordVerificationCode constraintAnnotation) {}

    @Override
    public boolean isValid(ResetPasswordReq resetPasswordReq, ConstraintValidatorContext constraintValidatorContext) {
        String email = resetPasswordReq.getEmail();
        String verificationCode = resetPasswordReq.getVerificationCode();

        ClientDTO clientDTO = clientMapper.getClientByEmail(email);

        if(clientDTO != null) {
            if(clientDTO.getVerificationCode().equals(verificationCode)) {
                String expireTime = clientDTO.getExpireTime();

                String currentTime = Datetimer.getCurrentDateTime();

                if(Datetimer.compare(expireTime, currentTime) > 0) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}