package com.msb.api.until;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Datetimer {
    public static String getCurrentDateTime() {
        DateTimeFormatter dateTimerFormatter = DateTimeFormatter.ofPattern("uuuu-MM-dd HH:mm:ss");
        LocalDateTime localDateTime = LocalDateTime.now();

        return dateTimerFormatter.format(localDateTime);
    }

    public static String addMinutes(String inputDateTime, int minutes) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("uuuu-MM-dd HH:mm:ss");
        LocalDateTime dateTime = LocalDateTime.parse(inputDateTime, formatter);
        LocalDateTime updatedDateTime = dateTime.plusMinutes(minutes);

        return updatedDateTime.format(formatter);
    }

    public static int compare(String dateTimeStrOne, String dateTimeStrTwo) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("uuuu-MM-dd HH:mm:ss");

        LocalDateTime dateTimeOne = LocalDateTime.parse(dateTimeStrOne, formatter);
        LocalDateTime dateTimeTwo = LocalDateTime.parse(dateTimeStrTwo, formatter);

        return dateTimeOne.compareTo(dateTimeTwo);
    }

}
