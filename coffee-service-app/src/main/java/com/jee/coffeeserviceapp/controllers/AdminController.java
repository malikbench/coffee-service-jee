package com.jee.coffeeserviceapp.controllers;

import com.jee.coffeeserviceapp.model.Role;
import com.jee.coffeeserviceapp.model.User;
import com.jee.coffeeserviceapp.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class AdminController {

    @Autowired
    private UserService userService;

    @GetMapping("/coffee-service/admin/all")
    public ResponseEntity<?> findAllUsers(){
        return ResponseEntity.ok(userService.findAllUsers());
    }

    /*
    @GetMapping("/api/admin/user/{id}")
    public ResponseEntity<?> getUser(@PathVariable Long id){
        return ResponseEntity.ok(userService.findById(id));
    }
     */

    @DeleteMapping("/coffee-service/admin/delete/{id}")
    public ResponseEntity<?> deleteUserById(@PathVariable Long id){
        return ResponseEntity.ok(userService.deleteUserById(id));
    }

    @PutMapping("/coffee-service/admin/update/{username}")
    public ResponseEntity<?> updateUser(@PathVariable String username, @RequestBody User userUpdates){
        if(userService.findByUsername(userUpdates.getUsername()) != null){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        User user = this.userService.findByUsername(username);
        user.setName(userUpdates.getName());
        user.setUsername(userUpdates.getUsername());

        return ResponseEntity.ok(userService.updateUser(user));
    }

    @PostMapping("/coffee-service/admin/add")
    public ResponseEntity<?> addUser(@RequestBody User user){
        if(userService.findByUsername(user.getUsername()) != null){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        User newUser = new User();
        newUser.setUsername(user.getUsername());
        newUser.setName(user.getName());
        newUser.setRole(Role.USER);
        return new ResponseEntity<>(userService.saveUser(user), HttpStatus.CREATED);
    }
}