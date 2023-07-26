package com.msb.api.until;

import java.util.Random;

public class RandomNumber {

    public static int getRandomNumber(int count) {
        int min = (int) Math.pow(10, count - 1);
        int max = (int) Math.pow(10, count) - 1;

        Random random = new Random();

        int randomNumber = random.nextInt(max - min + 1) + min;

        return randomNumber;
    }
}
