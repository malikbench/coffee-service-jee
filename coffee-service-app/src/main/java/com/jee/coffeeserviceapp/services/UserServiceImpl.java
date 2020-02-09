package com.jee.coffeeserviceapp.services;

import com.jee.coffeeserviceapp.model.User;
import com.jee.coffeeserviceapp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // saves user (encodes his password beforehand)
    @Override
    public User saveUser(User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    // updates an existing user's details (password stays intact)
    @Override
    public User updateUser(User user){
        return userRepository.save(user);
    }

    // gets an existing user using his username
    @Override
    public User findByUsername(String username){
        return userRepository.findByUsername(username).orElse(null);
    }

    public User findById(Long id){
        return userRepository.findById(id).orElse(null);
    }

    // gets all users
    @Override
    public List<User> findAllUsers(){
        return userRepository.findAll();
    }

    /*
    @Override
    public String deleteUser(String username){
        User user = this.findByUsername(username);
        userRepository.delete(user);
        return "success";
    }
    */

    // deletes user from db using his id
    @Override
    public String deleteUserById(Long id){
        userRepository.deleteById(id);
        return "success";
    }
}