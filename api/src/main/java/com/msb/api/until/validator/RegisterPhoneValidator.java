package com.msb.api.until.validator;

import com.msb.api.model.dao.Client;
import com.msb.api.model.dto.ClientDTO;
import com.msb.api.model.mapper.ClientMapper;
import com.msb.api.until.validator.field.RegisterPhone;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import org.springframework.beans.factory.annotation.Autowired;

public class RegisterPhoneValidator implements ConstraintValidator<RegisterPhone, String> {
    @Autowired
    ClientMapper clientMapper;

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if(value.isEmpty()) {
            return false;
        } else {
            ClientDTO userDTO = clientMapper.getClientByPhone(value);

            if(userDTO == null) {
                Client client = new Client();
                client.setPhone(value);
                client.setStatus(false);
                clientMapper.addClient(client);

                return true;
            } else {
                if (userDTO.getStatus()) {
                    return false;
                } else {
                    return true;
                }
            }
        }
    }
}
