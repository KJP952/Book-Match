package com.katie.MyVirtualLibrary.Controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.katie.MyVirtualLibrary.Model.User;
import com.katie.MyVirtualLibrary.Service.UserService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;



@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class UserController {
    
    @Autowired
    private UserService service;

    @PostMapping("/signup")
    public User register(@RequestBody User user){
        return service.register(user);
    }

    private List<User> users = new ArrayList<>(
        List.of(
            new User(4, "John", "Doe", "john.doe@example.com", "securepassword"),
            new User(5, "John", "Doe", "john.doe@example.com", "securepassword")
        )
    );

    @GetMapping("/users")
    public List<User> getUsers() {
        return users;
    }


    // Username:Joe
    // Password:password


    // @PostMapping("/login")
    // public String login(@RequestBody User user){
    //     return service.verify(user);
    // }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        try {
            String token = service.verify(user); // Assuming service.verify() generates a JWT
            return ResponseEntity.ok(Map.of("token", token));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("message", e.getMessage()));
        }
    }
    
    
    
}
