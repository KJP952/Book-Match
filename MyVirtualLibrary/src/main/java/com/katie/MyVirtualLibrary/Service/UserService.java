package com.katie.MyVirtualLibrary.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.katie.MyVirtualLibrary.Model.User;
import com.katie.MyVirtualLibrary.Repository.UserRepository;

@Service
public class UserService {
    
    @Autowired
    private UserRepository repo;

    public User register(User user){
        return repo.save(user);
    }

}
