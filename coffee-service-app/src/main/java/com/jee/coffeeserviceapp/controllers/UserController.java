package com.jee.coffeeserviceapp.controllers;

import com.jee.coffeeserviceapp.jwt.JwtTokenProvider;
import com.jee.coffeeserviceapp.model.Role;
import com.jee.coffeeserviceapp.model.User;
import com.jee.coffeeserviceapp.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class UserController {

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Autowired
    private UserService userService;

    @PostMapping("/coffee-service/user/registration")
    public ResponseEntity<?> register(@RequestBody User user){
        if(userService.findByUsername(user.getUsername()) != null){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        user.setRole(Role.USER);
        return new ResponseEntity<>(userService.saveUser(user), HttpStatus.CREATED);
    }

    @GetMapping("/coffee-service/user/login")
    public ResponseEntity<?> login(Principal principal){
        if(principal == null){
            //This should be ok http status because this will be used for logout path.
            return ResponseEntity.ok(principal);
        }

        UsernamePasswordAuthenticationToken authenticationToken = (UsernamePasswordAuthenticationToken) principal;

        User user = userService.findByUsername(authenticationToken.getName());
        user.setToken(jwtTokenProvider.generateToken(authenticationToken));
        return new ResponseEntity<>(user, HttpStatus.OK);
    }


    @PutMapping("/coffee-service/user/edit")
    public ResponseEntity<?> update(@RequestBody User userUpdates){

        User user = userService.findById(userUpdates.getId());

        user.setName(userUpdates.getName());
        user.setUsername(userUpdates.getUsername());
        return ResponseEntity.ok(userService.updateUser(user));
    }

    @PutMapping("/coffee-service/user/edit-password")
    public ResponseEntity<?> updatePassword(@RequestBody User userUpdates){
        User user = userService.findById(userUpdates.getId());
        user.setPassword(userUpdates.getPassword());
        //encodes password and saves
        return ResponseEntity.ok(userService.saveUser(user));
    }
}