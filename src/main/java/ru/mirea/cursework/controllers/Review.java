package ru.mirea.cursework.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Review {
    @GetMapping("/reviews")
    public String revpage() {
        return ("reviews");
    }
}
