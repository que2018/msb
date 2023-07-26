package com.msb.api.until.validator.field;

import jakarta.validation.Payload;
import jakarta.validation.Constraint;

import java.lang.annotation.Target;
import java.lang.annotation.Retention;
import java.lang.annotation.Documented;

import static java.lang.annotation.ElementType.TYPE;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import com.msb.api.until.validator.LoginVerificationCodeValidator;

@Target({ TYPE })
@Retention(RUNTIME)
@Constraint(validatedBy = LoginVerificationCodeValidator.class)
@Documented
public @interface LoginVerificationCode {
    String message() default "verification code is not valid";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}