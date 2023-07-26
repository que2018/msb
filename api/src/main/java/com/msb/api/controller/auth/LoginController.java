package com.msb.api.controller.auth;

import java.util.HashMap;

import com.msb.api.common.response.ResponseCode;
import com.msb.api.common.response.ResponseResult;
import com.msb.api.config.security.jwt.JwtUtils;
import com.msb.api.config.security.service.UserDetailsImpl;
import com.msb.api.config.security.service.UserDetailsServiceImpl;
import com.msb.api.service.auth.CodeService;
import com.msb.api.service.until.SmsService;
import jakarta.validation.Valid;

import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import com.msb.api.model.dto.ClientDTO;
import com.msb.api.model.req.auth.LoginReq;
import com.msb.api.model.req.auth.LoginEmailReq;

@RestController
@RequestMapping("/login")
public class LoginController {
    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    SmsService smsService;

    @Autowired
    CodeService codeService;

    @Autowired
    UserDetailsServiceImpl userDetailsService;

    @Autowired
    AuthenticationManager authenticationManager;

    @PostMapping(path="/get_verification_code")
    public ResponseResult getVerificationCode(@Valid @RequestBody LoginEmailReq loginEmailReq, BindingResult bindingResult) {
        if (!bindingResult.hasFieldErrors("email")) {
            ClientDTO clientDTO = userDetailsService.getClientByEmail(loginEmailReq.getEmail());

            String verificationCode = codeService.updateLoginAttempt(clientDTO.getClientId());

            HashMap<String, String> filterMap = new HashMap<>();
            filterMap.put("verification_code", verificationCode);

            smsService.sendMessage(clientDTO.getPhone(), "login_verification_code", filterMap);

            return ResponseResult.success(ResponseCode.SUCCESS_LOGIN_SMS);
        } else {
            return ResponseResult.fail(ResponseCode.ERROR_LOGIN_VERIFICATION_CLIENT_INVALID);
        }
    }

    @PostMapping(path="/submit")
    public ResponseResult submit(@Valid @RequestBody LoginReq loginReq, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            if(bindingResult.hasFieldErrors("username") || bindingResult.hasFieldErrors("password")) {
                return ResponseResult.fail(ResponseCode.ERROR_LOGIN_EMAIL_PASSWORD_EMPTY);
            } else {
                return ResponseResult.fail(ResponseCode.ERROR_LOGIN_VERIFICATION_CODE);
            }
        } else {
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginReq.getUsername(), loginReq.getPassword()));
            SecurityContextHolder.getContext().setAuthentication(authentication);

            UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

            String token = jwtUtils.generateJwtCookie(userDetails).toString();

            return ResponseResult.success(ResponseCode.SUCCESS_LOGIN, token);
        }
    }
}
