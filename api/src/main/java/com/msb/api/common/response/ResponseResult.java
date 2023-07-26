package com.msb.api.common.response;

public class ResponseResult<T> {
    private Boolean success;

    private Integer code;

    private String message;

    private T data;

    protected ResponseResult(Boolean success, Integer code, String message, T data) {
        this.success = success;
        this.code = code;
        this.message = message;
        this.data = data;
    }

    public static <T> ResponseResult<T> success(T data) {
        return new ResponseResult(true, 200, "", data);
    }

    public static <T> ResponseResult<T> success(ResponseCode responseCode) {
        return new ResponseResult(true, responseCode.getCode(), responseCode.getMessage(), null);
    }

    public static <T> ResponseResult<T> success(ResponseCode responseCode, T data) {
        return new ResponseResult(true, responseCode.getCode(), responseCode.getMessage(), data);
    }

    public static <T> ResponseResult<T> fail(ResponseCode responseCode) {
        return new ResponseResult(false, responseCode.getCode(), responseCode.getMessage(), null);
    }

    public static <T> ResponseResult<T> fail(int code, String message) {
        return new ResponseResult(false, code, message, null);
    }

    public Boolean getSuccess() {
        return success;
    }

    public long getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }

    public T getData() {
        return data;
    }

    public void setSuccess(Boolean success) {
        this.success = success;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}

