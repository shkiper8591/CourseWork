package ru.mirea.cursework.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import ru.mirea.cursework.entity.User;
import ru.mirea.cursework.repos.UserRepos;

@Controller
public class Log {
    @Autowired
    UserRepos Repos;
    @GetMapping("/login")
    public String logpage(){
        return ("login");
    }
    @PostMapping("/login")
    public String log(@RequestParam("usernamesignup") String Name,
                      @RequestParam("emailsignup") String Mail,
                      @RequestParam("passwordsignup") int Password,
                      @RequestParam("passwordsignup_confirm") int Confirm){
        User user = new User();
        user.setUsername(Name);
        user.setMail(Mail);
        user.setPassword(Password);
        user.setConfirm(Confirm);
        Repos.findByUsername(Name);
        return ("reg");
    }
}