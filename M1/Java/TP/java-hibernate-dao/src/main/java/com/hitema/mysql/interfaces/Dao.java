package com.hitema.mysql.interfaces;

import java.util.List;
import java.util.Optional;

public interface Dao<T, id> {
    void save(T params);

    void save(String name, Integer id);

    void save(String params);

    T get(Integer id);

    List<T> getAll();

    void update(Integer id, String name);

    void delete(Integer t);
}
