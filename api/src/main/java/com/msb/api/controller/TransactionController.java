package com.msb.api.controller;

import java.util.List;

import com.msb.api.common.response.ResponseResult;
import com.msb.api.config.security.service.UserDetailsImpl;
import com.msb.api.service.TransactionService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.web.bind.annotation.AuthenticationPrincipal;

import com.msb.api.model.dto.TransactionDTO;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/transaction")
public class TransactionController {
    @Autowired
    TransactionService transactionService;

    @GetMapping(path="/get_transactions")
    public ResponseResult getTransactions(@AuthenticationPrincipal UserDetailsImpl user) {
        Long clientId = user.getUserId();

        List<TransactionDTO> transactions = transactionService.getTransactionByClient(clientId);

        return ResponseResult.success(transactions);
    }
}
