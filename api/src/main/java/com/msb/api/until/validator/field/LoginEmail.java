package com.msb.api.until.validator.field;

import com.msb.api.until.validator.LoginEmailValidator;
import jakarta.validation.Payload;
import jakarta.validation.Constraint;

import java.lang.annotation.Target;
import java.lang.annotation.Retention;
import java.lang.annotation.Documented;

import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

@Target({ FIELD })
@Retention(RUNTIME)
@Constraint(validatedBy = LoginEmailValidator.class)
@Documented
public @interface LoginEmail {
    String message() default "Email not found or invalid";

    Class<?>[] groups() default { };

    Class<? extends Payload>[] payload() default { };
}