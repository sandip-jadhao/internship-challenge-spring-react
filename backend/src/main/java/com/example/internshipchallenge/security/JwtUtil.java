package com.example.internshipchallenge.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;
import java.util.Date;
public class JwtUtil {

    private final String secret_key="internship_secret_key";

    public String generateToken(String username) {
        // Token generation logic using the secret_key
        return Jwts.builder()
            .setSubject(username)
            .setIssuedAt(new Date(System.currentTimeMillis()+1000*60*60*10)) //1 hour
            .signWith(SignatureAlgorithm.HS512, secret_key)
            .compact();
    }
    
}
