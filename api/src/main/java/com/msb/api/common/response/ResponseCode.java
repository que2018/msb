package com.msb.api.common.response;

public enum ResponseCode {
    SUCCESS_REGISTRATION(200, "register success"),
    SUCCESS_REGISTER_SMS(200, "register verification code sent success"),
    SUCCESS_LOGIN(200, "login success"),
    SUCCESS_LOGIN_SMS(200, "login verification code sent success"),
    SUCCESS_RESET_PASSWORD_SMS(200, "forget password code sent success"),
    SUCCESS_RESET_PASSWORD(200, "reset password success"),
    ERROR_REGISTRATION_PHONE_EMPTY(2001, "phone is empty"),
    ERROR_REGISTRATION_FILED_EMPTY(2002, "some fields are empty"),
    ERROR_REGISTRATION_PHONE_REGISTERED(2003, "phone number is registered"),
    ERROR_REGISTRATION_EMAIL_REGISTERED(2004, "email is registered"),
    ERROR_REGISTRATION_CODE_INVALID(2005, "register validation code is invalid"),
    ERROR_REGISTRATION_SYSTEM(2003, "system error"),
    ERROR_LOGIN_EMAIL_PASSWORD_EMPTY(3001, "email or password is empty"),
    ERROR_LOGIN_VERIFICATION_CLIENT_INVALID(3002, "client is invalid"),
    ERROR_LOGIN_VERIFICATION_SMS(3003, "sms send fail"),
    ERROR_LOGIN_VERIFICATION_CODE(3004, "login validation code is invalid"),
    ERROR_LOGIN_EMAIL_PASSWORD_COMBINATION(3005, "email and password combination is invalid"),
    ERROR_RESET_PASSWORD_PHONE_EMPTY(4001, "reset password phone is empty"),
    ERROR_RESET_PASSWORD_PHONE_INVALID(4002, "reset password phone is invalid"),
    ERROR_RESET_PASSWORD_FIELD_EMPTY(4003, "reset password phone fields empty"),
    ERROR_RESET_PASSWORD_CODE_INVALID(4004, "reset password validation code is invalid");

    private int code;
    private String message;

    private ResponseCode(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public int getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }
}