package com.msb.api.model.mapper;

import com.msb.api.model.dao.Client;
import com.msb.api.model.dto.ClientDTO;
import com.msb.api.model.req.auth.LoginAttemptReq;
import com.msb.api.model.req.auth.RegisterAttemptReq;
import com.msb.api.model.req.auth.ResetPasswordReq;
import org.apache.ibatis.annotations.Mapper;

import com.msb.api.model.req.auth.ResetPasswordAttemptReq;

@Mapper
public interface ClientMapper {
    Boolean addClient(Client client);

    Boolean updateClient(Client client);

    ClientDTO getClientByEmail(String email);

    ClientDTO getClientByPhone(String phone);

    Boolean updateRegisterAttempt(RegisterAttemptReq registerAttemptReq);

    Boolean updateLoginAttempt(LoginAttemptReq loginAttemptReq);

    Boolean updateResetPasswordAttempt(ResetPasswordAttemptReq resetPasswordAttemptReq);

    Boolean resetPassword(ResetPasswordReq forgetPasswordAttemptReq);
}
