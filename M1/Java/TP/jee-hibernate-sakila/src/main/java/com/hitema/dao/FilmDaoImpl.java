package com.hitema.dao;

import com.hitema.entities.Country;
import com.hitema.entities.Film;
import org.hibernate.query.Query;

import java.util.List;

public class FilmDaoImpl extends AbstractDao implements Dao<Film, Long>{

    @Override
    public Film create(Film entity) {
        var tx = getCurrentSession().getTransaction();
        tx.begin();
        getCurrentSession().persist(entity);
        tx.commit();
        return entity;
    }

    @Override
    public Film read(Long id) {
        return getCurrentSession().find(Film.class, id);
    }

    @Override
    public void update(Film entity) {

    }

    @Override
    public void delete(Film entity) {

    }

    @Override
    public List<Film> findAll() {
        return getCurrentSession().createQuery("from Film").getResultList();
    }

    public List<Film> searchByTitle(String str){
        Query query = getCurrentSession().createQuery("from Film f where f.title like :str");
        query.setParameter("str", "%"+str+"%");
        return query.getResultList();
    }

}
