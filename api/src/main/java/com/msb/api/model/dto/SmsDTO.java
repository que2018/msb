package com.msb.api.model.dto;

import lombok.Data;

@Data
public class SmsDTO {
    private Long smsId;

    private String code;

    private String content;
}
