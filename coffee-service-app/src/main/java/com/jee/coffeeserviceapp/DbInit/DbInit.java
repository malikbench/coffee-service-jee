package com.jee.coffeeserviceapp.DbInit;

import com.jee.coffeeserviceapp.model.Role;
import com.jee.coffeeserviceapp.model.User;
import com.jee.coffeeserviceapp.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import java.util.Arrays;
import java.util.List;

@Service
public class DbInit implements CommandLineRunner {
    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    public DbInit(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) {
        // Delete all
        this.userRepository.deleteAll();

        // Create admin users
        User admin = new User();
        admin.setName("admin");
        admin.setUsername("admin");
        admin.setRole(Role.ADMIN);
        admin.setPassword(passwordEncoder.encode("admin"));
        this.userRepository.save(admin);

    }
}
