package com.msb.api.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.msb.api.model.dto.CardDTO;
import com.msb.api.model.mapper.CardMapper;

@Service
public class CardService {

    @Autowired
    CardMapper cardMapper;

    public List<CardDTO> getCards(Long clientId) {
        List<CardDTO> cards = cardMapper.getCards(clientId);

        if(cards != null) {
             return cards;
        } else {
            return List.of();
        }
    }
}
