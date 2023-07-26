package com.msb.api.service.until;

import java.util.Map;
import java.util.HashMap;

import com.msb.api.service.ConfigService;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.twilio.Twilio;
import com.twilio.type.PhoneNumber;

import com.msb.api.model.dto.SmsDTO;
import com.msb.api.model.mapper.SmsMapper;
import com.twilio.rest.api.v2010.account.Message;

@Service
public class SmsService {
    @Autowired
    SmsMapper smsMapper;

    @Autowired
    ConfigService configService;

    public void sendMessage(String phone, String smsCode, HashMap<String, String> filterMap) {
        String SID = configService.getConfig("twilio_sid");
        String TOKEN = configService.getConfig("twilio_token");
        String defaultFrom = configService.getConfig("twilio_default_from");

        Twilio.init(SID, TOKEN);

        SmsDTO smsDTO = smsMapper.getSmsByCode(smsCode);

        String body = smsDTO.getContent();

        for (Map.Entry<String, String> entry : filterMap.entrySet()) {
            String key = entry.getKey();
            String value = entry.getValue();

            body = body.replace("[" + key + "]", value);
        }

        Message message = Message.creator(new PhoneNumber(phone), new PhoneNumber(defaultFrom), body).create();
    }
}
