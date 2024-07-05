package com.shahibdha.studentsystem.service;

import com.shahibdha.studentsystem.model.User;

import java.util.List;

public interface UserService {
    public User saveUser(User user);
    public List<User> getAllUSer();

    public User user(String name, String password);
}

