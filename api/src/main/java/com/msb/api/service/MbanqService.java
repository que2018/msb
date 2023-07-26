package com.msb.api.service;

import java.util.Map;

import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.MultiValueMap;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.boot.json.JsonParser;
import org.springframework.boot.json.JsonParserFactory;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class MbanqService {

    @Autowired
    private ConfigService configService;

    public String getAccessToken() {
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

        JsonParser springParser = JsonParserFactory.getJsonParser();
        Map<String, Object> responseMap = springParser.parseMap(responseBody);

        String accessToken = (String)responseMap.get("access_token");

        return accessToken;
    }

}
