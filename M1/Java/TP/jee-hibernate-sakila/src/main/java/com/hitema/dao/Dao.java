package com.hitema.dao;

import java.io.Serializable;
import java.util.List;

/**
 * Interface générique commune à toutes les Dao
 * @param <T> le type Entity bean
 * @param <Key> le type de clef utilisée pour accéder l'entité (Long, Integer, String ...)
 */
public interface Dao <T, Key>{
    public T create(T entity);

    public T read(Key id);

    public void update(T entity);

    public void delete(T entity);

    public List<T> findAll();

}
