package com.msb.api.config.security.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.msb.api.model.dao.User;
import com.msb.api.model.dto.ClientDTO;
import com.msb.api.model.mapper.ClientMapper;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private ClientMapper clientMapper;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        ClientDTO clientDTO = clientMapper.getClientByEmail(email);

        if (clientDTO != null) {
            User user = new User();

            user.setUserId(clientDTO.getClientId());
            user.setUsername(clientDTO.getUsername());
            user.setPassword(clientDTO.getPassword());
            user.setEmail(clientDTO.getEmail());
            user.setPhone(clientDTO.getPhone());

            return UserDetailsImpl.build(user);
        } else {
            throw new UsernameNotFoundException("client not found");
        }
    }

    public ClientDTO getClientByEmail(String email) {
        return clientMapper.getClientByEmail(email);
    }
}