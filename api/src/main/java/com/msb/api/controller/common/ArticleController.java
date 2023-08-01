package com.msb.api.controller.common;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import com.msb.api.model.dto.ArticleDTO;
import com.msb.api.service.ArticleService;
import com.msb.api.common.response.ResponseResult;

@RestController
@RequestMapping("/article")
public class ArticleController {
    @Autowired
    ArticleService articleService;

    @GetMapping(path="/get_article")
    public ResponseResult getArticle(@RequestParam("code") String code) {
        ArticleDTO articleDTO = articleService.getArticleByCode(code);

        return ResponseResult.success(articleDTO);
    }
}
