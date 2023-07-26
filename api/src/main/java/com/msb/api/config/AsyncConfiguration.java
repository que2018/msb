package com.msb.api.config;

import java.util.concurrent.Executor;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.AsyncConfigurer;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

@EnableAsync
@Configuration
@ComponentScan("com.ucolab.api")
public class AsyncConfiguration implements AsyncConfigurer {

    @Override
    public Executor getAsyncExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();

        executor.setCorePoolSize(600);
        executor.setMaxPoolSize(1000);
        executor.setQueueCapacity(10000);
        executor.setThreadNamePrefix("ucolab");
        executor.initialize();

        return executor;
    }
}