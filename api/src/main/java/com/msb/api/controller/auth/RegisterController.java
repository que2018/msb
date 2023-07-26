package com.msb.api.controller.auth;

import java.util.HashMap;
import java.util.ArrayList;

import com.msb.api.common.response.ResponseCode;
import com.msb.api.common.response.ResponseResult;
import com.msb.api.service.auth.CodeService;
import com.msb.api.service.auth.RegisterService;
import com.msb.api.service.until.SmsService;
import jakarta.validation.Valid;

import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

import com.msb.api.model.req.auth.RegisterReq;
import com.msb.api.model.req.auth.RegisterPhoneReq;

@RestController
@RequestMapping("/register")
public class RegisterController {
    @Autowired
    SmsService smsService;

    @Autowired
    CodeService codeService;

    @Autowired
    RegisterService registerService;

    @PostMapping(path="/get_verification_code")
    public ResponseResult submit(@Valid @RequestBody RegisterPhoneReq registerPhoneReq, BindingResult bindingResult) {
        if (!bindingResult.hasFieldErrors("phone")) {
            String verificationCode = codeService.updateRegisterAttempt(registerPhoneReq.getPhone());

            HashMap<String, String> filterMap = new HashMap<>();
            filterMap.put("verification_code", verificationCode);

            smsService.sendMessage(registerPhoneReq.getPhone(), "register_verification_code", filterMap);

            return ResponseResult.success(ResponseCode.SUCCESS_REGISTER_SMS);
        } else {
            ArrayList<String> errorCodes = new ArrayList();

            for (Object object : bindingResult.getAllErrors()) {
                if (object instanceof FieldError) {
                    FieldError fieldError = (FieldError) object;

                    errorCodes.add(fieldError.getCode());
                }
            }

            if(errorCodes.contains("NotEmpty")) {
                return ResponseResult.fail(ResponseCode.ERROR_REGISTRATION_PHONE_EMPTY);
            } else {
                return ResponseResult.fail(ResponseCode.ERROR_REGISTRATION_PHONE_REGISTERED);
            }
        }
    }

    @PostMapping(path="/submit")
    public ResponseResult submit(@Valid @RequestBody RegisterReq registerReq, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            ArrayList<String> errorCodes = new ArrayList();

            for (Object object : bindingResult.getAllErrors()) {
                if (object instanceof FieldError) {
                    FieldError fieldError = (FieldError) object;

                    errorCodes.add(fieldError.getCode());
                }

                if(object instanceof ObjectError) {
                    ObjectError objectError = (ObjectError) object;

                    errorCodes.add(objectError.getCode());
                }
            }

            if(errorCodes.contains("NotEmpty"))
            {
                return ResponseResult.fail(ResponseCode.ERROR_REGISTRATION_FILED_EMPTY);
            }
            else if(errorCodes.contains("RegisterEmail"))
            {
                return ResponseResult.fail(ResponseCode.ERROR_REGISTRATION_EMAIL_REGISTERED);
            }
            else
            {
                return ResponseResult.fail(ResponseCode.ERROR_REGISTRATION_CODE_INVALID);
            }
        } else {
            registerService.registerClient(registerReq);

            return ResponseResult.success(ResponseCode.SUCCESS_REGISTRATION);
        }
    }
}
