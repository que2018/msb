package com.msb.api.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.msb.api.model.dto.ArticleDTO;
import com.msb.api.model.mapper.ArticleMapper;
import org.springframework.stereotype.Service;

@Service
public class ArticleService {
    @Autowired
    private ArticleMapper articleMapper;

    public ArticleDTO getArticleByCode(String code) {
        ArticleDTO result = articleMapper.getArticleByCode(code);

        if(result != null) {
            return result;
        } else {
            return null;
        }
    }

}
