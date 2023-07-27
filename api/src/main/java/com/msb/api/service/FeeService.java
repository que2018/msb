package com.msb.api.service;

import org.springframework.stereotype.Service;

@Service
public class FeeService {
    public int getFee(int amount, String country) {
        return (int)(amount * 0.02);
    }
}
