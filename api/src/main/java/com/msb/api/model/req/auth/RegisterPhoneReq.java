package com.msb.api.model.req.auth;

import com.msb.api.until.validator.field.RegisterPhone;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class RegisterPhoneReq {
    @NotEmpty
    @RegisterPhone
    private String phone;
}

