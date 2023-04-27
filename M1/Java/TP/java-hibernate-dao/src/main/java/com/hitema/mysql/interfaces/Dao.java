package com.hitema.mysql.interfaces;

import java.util.List;
import java.util.Optional;

public interface Dao<T, id> {
    void save(T entity);


    T get(Long id);

    List<T> getAll();

    void update(Long id, String name);

    void delete(Long t);
}
