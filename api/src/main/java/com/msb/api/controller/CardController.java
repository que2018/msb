package com.msb.api.controller;

import java.util.List;

import com.msb.api.common.response.ResponseResult;
import com.msb.api.config.security.service.UserDetailsImpl;
import com.msb.api.service.CardService;
import com.msb.api.service.auth.ResetPasswordService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.web.bind.annotation.AuthenticationPrincipal;

import com.msb.api.model.dto.CardDTO;

@RestController
@RequestMapping("/card")
public class CardController {
    @Autowired
    CardService cardService;

    @Autowired
    ResetPasswordService resetPasswordService;

    @GetMapping(path="/get_cards")
    public ResponseResult getCards(@AuthenticationPrincipal UserDetailsImpl user) {
        Long clientId = user.getUserId();

        List<CardDTO> cards = cardService.getCards(clientId);

        return ResponseResult.success(cards);
    }
}
