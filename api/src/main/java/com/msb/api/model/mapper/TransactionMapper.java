package com.msb.api.model.mapper;

import java.util.List;

import com.msb.api.model.dto.TransactionDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface TransactionMapper {
    List<TransactionDTO> getTransactionsByClient(long clientId);
}