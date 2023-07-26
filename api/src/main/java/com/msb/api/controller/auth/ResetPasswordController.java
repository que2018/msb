package com.msb.api.controller.auth;

import java.util.HashMap;
import java.util.List;

import com.msb.api.common.response.ResponseCode;
import com.msb.api.common.response.ResponseResult;
import com.msb.api.service.auth.CodeService;
import com.msb.api.service.auth.ResetPasswordService;
import com.msb.api.service.until.SmsService;
import com.msb.api.until.Func;
import jakarta.validation.Valid;

import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

import com.msb.api.model.req.auth.ResetPasswordReq;
import com.msb.api.model.req.auth.ResetPasswordPhoneReq;

@RestController
@RequestMapping("/reset_password")
public class ResetPasswordController {
    @Autowired
    SmsService smsService;

    @Autowired
    CodeService codeService;

    @Autowired
    ResetPasswordService resetPasswordService;

    @PostMapping(path="/get_verification_code")
    public ResponseResult getVerificationCode(@Valid @RequestBody ResetPasswordPhoneReq resetPasswordPhoneReq, BindingResult bindingResult) {
        if (!bindingResult.hasFieldErrors()) {
            String verificationCode = codeService.updateResetPasswordAttempt(resetPasswordPhoneReq.getPhone());

            HashMap<String, String> filterMap = new HashMap();
            filterMap.put("verification_code", verificationCode);

            smsService.sendMessage(resetPasswordPhoneReq.getPhone(), "reset_password_verification_code", filterMap);

            return ResponseResult.success(ResponseCode.SUCCESS_RESET_PASSWORD_SMS);
        } else {
            List<String> errorCodes = Func.getVerificationCodes(bindingResult);

            if(errorCodes.contains("NotEmpty")) {
                return ResponseResult.fail(ResponseCode.ERROR_RESET_PASSWORD_PHONE_EMPTY);
            } else {
                return ResponseResult.fail(ResponseCode.ERROR_RESET_PASSWORD_PHONE_INVALID);
            }
        }
    }

    @PostMapping(path="/submit")
    public ResponseResult submit(@Valid @RequestBody ResetPasswordReq resetPasswordReq, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            List<String> errorCodes = Func.getVerificationCodes(bindingResult);

            if(errorCodes.contains("NotEmpty"))
            {
                return ResponseResult.fail(ResponseCode.ERROR_RESET_PASSWORD_FIELD_EMPTY);
            }
            else
            {
                return ResponseResult.fail(ResponseCode.ERROR_RESET_PASSWORD_CODE_INVALID);
            }
        } else {
            resetPasswordService.resetPassword(resetPasswordReq);

            return ResponseResult.success(ResponseCode.SUCCESS_RESET_PASSWORD);
        }
    }
}