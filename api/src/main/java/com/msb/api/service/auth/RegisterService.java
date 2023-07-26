package com.msb.api.service.auth;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.msb.api.model.dao.Client;
import com.msb.api.model.dto.ClientDTO;
import com.msb.api.model.mapper.ClientMapper;
import com.msb.api.model.req.auth.RegisterReq;

@Service
public class RegisterService {

    @Autowired
    ClientMapper clientMapper;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;


    public void registerClient(RegisterReq registerReq) {
        ClientDTO clientDTO = clientMapper.getClientByPhone(registerReq.getPhone());

        String encodedPassword = bCryptPasswordEncoder.encode(registerReq.getPassword());

        Client client = new Client();
        client.setClientId(clientDTO.getClientId());
        client.setEmail(registerReq.getEmail());
        client.setPassword(encodedPassword);
        client.setPhone(registerReq.getPhone());
        client.setStatus(true);

        clientMapper.updateClient(client);
    }
}
