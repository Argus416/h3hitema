package com.hitema.dao;

import com.hitema.entities.Country;
import org.hibernate.Session;

import java.util.List;

public class CountryDaoImpl extends AbstractDao implements Dao<Country, Long> {

    public CountryDaoImpl() {
    }

    @Override
    public Country create(Country entity) {
        var tx = getCurrentSession().getTransaction();
        tx.begin();
        getCurrentSession().persist(entity);
        tx.commit();
        return entity;
    }

    @Override
    public Country read(Long id) {
        return getCurrentSession().find(Country.class, id);
    }

    @Override
    public void update(Country entity) {
        var tx = getCurrentSession().getTransaction();
        tx.begin();
        getCurrentSession().merge(entity);
        tx.commit();
    }

    @Override
    public void delete(Country entity) {
        var tx = getCurrentSession().getTransaction();
        tx.begin();
        getCurrentSession().delete(entity);
        tx.commit();
    }

    @Override
    public List<Country> findAll() {
        return getCurrentSession().createQuery("from Country").getResultList();
    }
}
