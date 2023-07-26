package com.msb.api.until.validator;

import com.msb.api.model.dto.ClientDTO;
import com.msb.api.model.mapper.ClientMapper;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import org.springframework.beans.factory.annotation.Autowired;

import com.msb.api.until.validator.field.RegisterEmail;

public class RegisterEmailValidator implements ConstraintValidator<RegisterEmail, String> {
    @Autowired
    ClientMapper clientMapper;

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        ClientDTO userDTO = clientMapper.getClientByEmail(value);

        if(userDTO == null) {
            return true;
        } else {
            return false;
        }
    }
}
