package com.example.internshipchallenge.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.example.internshipchallenge.model.Users;
import com.example.internshipchallenge.security.JwtUtil;
import com.example.internshipchallenge.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    public Users registerUser(Users users) {
        users.setPassword(passwordEncoder.encode(users.getPassword()));
        users.setRole("USER");
        return userRepository.save(users);
    }

    public String login(String username, String password) {
        Users user = userRepository.findByUsername(username).orElseThrow(() -> new RuntimeException("Invalid username or password"));

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new RuntimeException("Invalid username or password");
        }
        return jwtUtil.generateToken(user.getUsername());
    }
}
