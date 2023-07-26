package com.msb.api.until;

import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import java.util.List;
import java.time.LocalDate;
import java.util.ArrayList;
import java.time.format.DateTimeFormatter;

public class Func {
    public static List<String> getDateRange(String dateFrom, String dateTo) {
        LocalDate start = LocalDate.parse(dateFrom);
        LocalDate end = LocalDate.parse(dateTo);

        List<String> totalDates = new ArrayList<>();

        while (!start.isAfter(end)) {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
            String formattedDate = start.format(formatter);
            totalDates.add(formattedDate);

            start = start.plusDays(1);
        }

        return totalDates;
    }

    public static List<String> getVerificationCodes(BindingResult bindingResult) {
        ArrayList<String> errorCodes = new ArrayList();

        for (Object object : bindingResult.getAllErrors()) {
            if (object instanceof FieldError) {
                FieldError fieldError = (FieldError) object;

                errorCodes.add(fieldError.getCode());
            }
        }

        return errorCodes;
    }
}
