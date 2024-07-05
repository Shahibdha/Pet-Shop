package com.shahibdha.studentsystem.service;

import com.shahibdha.studentsystem.model.User;
import com.shahibdha.studentsystem.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpli implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUSer() {
        return userRepository.findAll();
    }

    @Override
    public User user(String name, String password) {
        User user = userRepository.findByNameAndPassword(name, password);
        return user;
    }

}
