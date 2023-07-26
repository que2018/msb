package com.msb.api.until.validator.field;

import jakarta.validation.Payload;
import jakarta.validation.Constraint;

import java.lang.annotation.Target;
import java.lang.annotation.Retention;
import java.lang.annotation.Documented;

import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import com.msb.api.until.validator.RegisterPhoneValidator;

@Target({ FIELD })
@Retention(RUNTIME)
@Constraint(validatedBy = RegisterPhoneValidator.class)
@Documented
public @interface RegisterPhone {
    String message() default "Phone has been registered";

    Class<?>[] groups() default { };

    Class<? extends Payload>[] payload() default { };
}