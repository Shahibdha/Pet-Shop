package com.shahibdha.studentsystem.Controller;

import com.shahibdha.studentsystem.model.User;
import com.shahibdha.studentsystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public String add(@RequestBody User user){
        userService.saveUser(user);
        return "New user is added";
    }

    @GetMapping("/login")
    public ModelAndView user(){
        ModelAndView mav = new ModelAndView("user");
        mav.addObject("user",new User());
        return mav;
    }

    @PostMapping("/login")
    public ResponseEntity<String> user(@RequestBody User user) {
        User authenticatedUser = userService.user(user.getName(), user.getPassword());
        if (authenticatedUser != null) {
            // Log success
            System.out.println("Login successful for user: " + authenticatedUser.getName());
            return ResponseEntity.ok("Login successful");
        } else {
            // Log failure
            System.out.println("Login failed for user: " + user.getName());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login failed");
        }
    }

}

