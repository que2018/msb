package com.msb.api.until.validator.field;

import jakarta.validation.Payload;
import jakarta.validation.Constraint;

import java.lang.annotation.Target;
import java.lang.annotation.Retention;
import java.lang.annotation.Documented;

import static java.lang.annotation.ElementType.TYPE;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import com.msb.api.until.validator.RegisterVerificationCodeValidator;

@Target({ TYPE })
@Retention(RUNTIME)
@Constraint(validatedBy = RegisterVerificationCodeValidator.class)
@Documented
public @interface RegisterVerificationCode {
    String message() default "verification code is not valid";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}