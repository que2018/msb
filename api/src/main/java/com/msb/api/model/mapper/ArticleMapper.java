package com.msb.api.model.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.msb.api.model.dto.ArticleDTO;

@Mapper
public interface ArticleMapper {
    ArticleDTO getArticleByCode(String code);
}
