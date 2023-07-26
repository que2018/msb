package com.msb.api.model.dao;

import lombok.Data;

import java.util.Set;
import java.util.HashSet;

@Data
public class User {
    private Long userId;

    private String username;

    private String email;

    private String password;

    private String phone;

    private Set<Role> roles = new HashSet<>();
}
