package com.msb.api.model.mapper;

import java.util.List;

import com.msb.api.model.dto.CardDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CardMapper {
    List<CardDTO> getCards(Long clientId);
}
