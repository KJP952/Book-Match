package com.katie.MyVirtualLibrary.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.katie.MyVirtualLibrary.Model.User;
import com.katie.MyVirtualLibrary.Service.UserService;

import org.springframework.web.bind.annotation.PostMapping;



@RestController
public class UserController {
    
    @Autowired
    private UserService service;

    @PostMapping("/signup")
    public User register(@RequestBody User user){
        return service.register(user);
    }
    
    
}
