package com.yevgen.dao.interfaces;

public interface GenericDao<T> {
    T getById(String id);
}
