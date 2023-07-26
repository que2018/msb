package com.msb.api.until.validator;

import com.msb.api.model.dto.ClientDTO;
import com.msb.api.model.mapper.ClientMapper;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import org.springframework.beans.factory.annotation.Autowired;

import com.msb.api.until.validator.field.ResetPasswordPhone;

public class ResetPasswordPhoneValidator implements ConstraintValidator<ResetPasswordPhone, String> {
    @Autowired
    ClientMapper clientMapper;

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if(value.isEmpty()) {
            return false;
        } else {
            ClientDTO clientDTO = clientMapper.getClientByPhone(value);

            if((clientDTO != null) && (clientDTO.getStatus())) {
                return true;
            } else {
                return false;
            }
        }
    }
}