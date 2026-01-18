package com.example.internshipchallenge.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.http.ResponseEntity;
import com.example.internshipchallenge.service.UserService;
import com.example.internshipchallenge.model.Users;

@RestController
@RequestMapping("/api/auto")
@CrossOrigin(origins = "http://localhost:3000/")
public class AutoController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<Users> registerUser(@RequestBody Users users) {
        Users registeredUser = userService.registerUser(users);
        return ResponseEntity.ok(registeredUser);
    }
}
