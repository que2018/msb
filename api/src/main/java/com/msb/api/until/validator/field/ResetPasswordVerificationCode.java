package com.msb.api.until.validator.field;

import com.msb.api.until.validator.ResetPasswordVerificationCodeValidator;
import jakarta.validation.Payload;
import jakarta.validation.Constraint;

import java.lang.annotation.Target;
import java.lang.annotation.Retention;
import java.lang.annotation.Documented;

import static java.lang.annotation.ElementType.TYPE;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

@Target({ TYPE })
@Retention(RUNTIME)
@Constraint(validatedBy = ResetPasswordVerificationCodeValidator.class)
@Documented
public @interface ResetPasswordVerificationCode {
    String message() default "verification code is not valid";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}