package com.msb.api.until.validator;

import com.msb.api.model.dto.ClientDTO;
import com.msb.api.model.mapper.ClientMapper;
import com.msb.api.model.req.auth.LoginReq;
import com.msb.api.until.Datetimer;
import com.msb.api.until.validator.field.LoginVerificationCode;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import org.springframework.beans.factory.annotation.Autowired;

public class LoginVerificationCodeValidator implements ConstraintValidator<LoginVerificationCode, LoginReq> {

    @Autowired
    ClientMapper clientMapper;

    public void initialize(LoginVerificationCode constraintAnnotation) {}

    @Override
    public boolean isValid(LoginReq loginReq, ConstraintValidatorContext constraintValidatorContext) {
       String email = loginReq.getUsername();
       String verificationCode = loginReq.getVerificationCode();

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