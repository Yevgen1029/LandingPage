package com.yevgen.services.interfaces;

import com.yevgen.model.User;

public interface UserService {

//    List<User> getAll();
    User addUser(User user);
    User findByName(String name);
    User delete(User user);
    User update(User user);

}
