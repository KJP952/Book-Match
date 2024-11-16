// package com.katie.MyVirtualLibrary.Controller;
// import java.util.Map;

// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import com.katie.MyVirtualLibrary.Model.User;
// import com.katie.MyVirtualLibrary.Service.UserService;

// @RestController
// @RequestMapping("/login")
// public class LoginController {

//     private final UserService service;

//     public LoginController(UserService service) {
//         this.service = service;
//     }

//     @PostMapping
//     public ResponseEntity<?> login(@RequestBody User user) {
//         try {
//             String token = service.verify(user); // Generate the token if authentication succeeds
//             if (token.equals("Not A Registered User")) {
//                 // Return a proper response if the user is not registered
//                 return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("message", "Invalid username or password"));
//             }
//             return ResponseEntity.ok(Map.of("token", token)); // Return the token in the response
//         } catch (Exception e) {
//             // Handle invalid credentials or other errors
//             return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("message", e.getMessage()));
//         }
// }}