package com.katie.MyVirtualLibrary.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/")
@RequiredArgsConstructor
public class HelloWorldController {
    @GetMapping
    public String helloWorld() {
        return "Your First Sample Hello world API is UP and Running...";
    }
}
