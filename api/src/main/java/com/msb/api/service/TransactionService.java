package com.msb.api.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.msb.api.model.dto.TransactionDTO;
import com.msb.api.model.mapper.TransactionMapper;

@Service
public class TransactionService {

    @Autowired
    private TransactionMapper transactionMapper;

    public List<TransactionDTO> getTransactionByClient(Long zipcode) {
        List<TransactionDTO> transactions = transactionMapper.getTransactionsByClient(zipcode);

        if(transactions != null) {
            return transactions;
        } else {
            return List.of();
        }
    }
}
