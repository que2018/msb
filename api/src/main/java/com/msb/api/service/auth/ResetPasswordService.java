package com.msb.api.service.auth;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.msb.api.model.mapper.ClientMapper;
import com.msb.api.model.req.auth.ResetPasswordReq;

@Service
public class ResetPasswordService {

    @Autowired
    ClientMapper clientMapper;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public void resetPassword(ResetPasswordReq resetPasswordReq) {
        String passwordRaw = resetPasswordReq.getPasswordNew();
        resetPasswordReq.setPasswordNew(bCryptPasswordEncoder.encode(passwordRaw));
        clientMapper.resetPassword(resetPasswordReq);
    }
}
