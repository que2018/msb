package com.msb.api.controller.common;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;
import org.springframework.validation.BindingResult;
import org.springframework.beans.factory.annotation.Autowired;

import com.msb.api.model.req.FeeReq;
import com.msb.api.service.FeeService;
import com.msb.api.common.response.ResponseResult;

@RestController
@RequestMapping("/fee")
public class FeeController {
    @Autowired
    FeeService feeService;

    @PostMapping(path="/get_fee")
    public ResponseResult getFee(@Valid @RequestBody FeeReq feeReq, BindingResult bindingResult) {
        int fee = feeService.getFee(feeReq.getAmount(), feeReq.getCountry());

        return ResponseResult.success(fee);
    }
}
