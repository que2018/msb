package com.msb.api.until.validator;

import com.msb.api.model.dto.ClientDTO;
import com.msb.api.model.mapper.ClientMapper;
import com.msb.api.model.req.auth.RegisterReq;
import com.msb.api.until.Datetimer;
import com.msb.api.until.validator.field.LoginVerificationCode;
import com.msb.api.until.validator.field.RegisterVerificationCode;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import org.springframework.beans.factory.annotation.Autowired;

public class RegisterVerificationCodeValidator implements ConstraintValidator<RegisterVerificationCode, RegisterReq> {

    @Autowired
    ClientMapper clientMapper;

    public void initialize(LoginVerificationCode constraintAnnotation) {}

    @Override
    public boolean isValid(RegisterReq registerReq, ConstraintValidatorContext constraintValidatorContext) {
        String phone = registerReq.getPhone();
        String verificationCode = registerReq.getVerificationCode();

        ClientDTO clientDTO = clientMapper.getClientByPhone(phone);

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