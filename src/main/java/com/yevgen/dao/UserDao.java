package com.yevgen.dao;

import com.yevgen.model.User;
import com.yevgen.model.UserRole;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class UserDao extends AbstractDao<User> {


//    public List<User> getAll() {
//        Session session = sessionFactory.getCurrentSession();
//        Query query = session.createQuery("from users");
//        List<User> userList = query.list();
//        session.flush();
//        return userList;
//    }

    public User create(User user) {
        Session session = sessionFactory.getCurrentSession();
        session.save(user);
        return user;
    }

    public User findByName(String name) {
        Session session = sessionFactory.getCurrentSession();
        User user = (User) session.get(User.class, name);
        session.flush();
        return user;
    }

    public User delete(User user) {
        Session session = sessionFactory.getCurrentSession();
        session.delete(user);
        session.flush();
        return user;
    }

    public User update(User user) {
        Session session = sessionFactory.getCurrentSession();
        session.update(user);
        session.flush();
        return user;
    }

    public UserRole createStandardRole(User user) {
        UserRole userRole = new UserRole();
        userRole.setUser(user);
        userRole.setRole("ROLE_USER");
        Session session = sessionFactory.getCurrentSession();
        session.save(userRole);
        session.flush();
        return userRole;
    }

}
