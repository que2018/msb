package com.msb.api.controller;

import com.msb.api.common.response.ResponseResult;
import com.msb.api.service.ConfigService;
import org.springframework.http.*;
import org.springframework.util.MultiValueMap;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping(path="/mbanq")
public class MbanqController {

    @Autowired
    private ConfigService configService;

    @GetMapping(path="/access_token")
    public ResponseResult accessToken() {
        String url = configService.getConfig("mbanq_url");
        String username = configService.getConfig("mbanq_username");
        String password = configService.getConfig("mbanq_password");
        String tenantId = configService.getConfig("mbanq_tenant_id");

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.set("tenantId", tenantId);
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        MultiValueMap<String, String> map= new LinkedMultiValueMap<String, String>();
        map.add("username", username);
        map.add("password", password);
        map.add("grant_type", "password");
        map.add("client_id", "api");
        map.add("client_secret", "secret");

        HttpEntity<MultiValueMap<String, String>> requestEntity = new HttpEntity<MultiValueMap<String, String>>(map, headers);

        ResponseEntity<String> responseEntity = restTemplate.exchange(url, HttpMethod.POST, requestEntity, String.class);

        String responseBody = responseEntity.getBody();

        System.out.println("Response Body: " + responseBody);

        return ResponseResult.success(null);
    }
}
