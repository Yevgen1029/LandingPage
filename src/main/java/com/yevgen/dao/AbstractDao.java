package com.yevgen.dao;

import com.yevgen.dao.interfaces.GenericDao;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class AbstractDao<T> implements GenericDao<T>{
    @Autowired
    SessionFactory sessionFactory;


    public T getById(String id) {
        return null;
    }

}
