package com.yevgen.services;

import com.yevgen.dao.UserDao;
import com.yevgen.model.User;
import com.yevgen.services.interfaces.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

//    public List<User> getAll() {
//        return userDao.getAll();
//    }

    public User addUser(User user) {
        User newUser = userDao.create(user);
        userDao.createStandardRole(user);
        return newUser;
    }

    public User findByName(String name) {
        return userDao.findByName(name);
    }

    public User delete(User user) {
        return userDao.delete(user);
    }

    public User update(User user) {
        return userDao.update(user);
    }
}
