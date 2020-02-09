package com.jee.coffeeserviceapp.services;

import com.jee.coffeeserviceapp.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    User saveUser(User user);
    User findByUsername(String username);
    List<User> findAllUsers();
    User findById(Long id);
    String deleteUserById(Long id);
    User updateUser(User user);
}
