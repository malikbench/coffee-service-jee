package com.jee.coffeeserviceapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
public class CoffeeServiceAppApplication extends SpringBootServletInitializer {
    @GetMapping("/test")
    public String test() {
        return "Application est deployé";
    }

    public static void main(String[] args) {
        SpringApplication.run(CoffeeServiceAppApplication.class, args);
    }

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(CoffeeServiceAppApplication.class);
    }



}