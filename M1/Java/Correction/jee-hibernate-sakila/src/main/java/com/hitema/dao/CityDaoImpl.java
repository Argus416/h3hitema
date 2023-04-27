package com.hitema.dao;

import com.hitema.entities.City;

import java.util.List;

public class CityDaoImpl extends AbstractDao implements Dao<City, Long> {

    @Override
    public City create(City entity) {
        return null;
    }

    @Override
    public City read(Long id) {
        return getCurrentSession().find(City.class, id);
    }

    @Override
    public void update(City entity) {
    }

    @Override
    public void delete(City entity) {

    }

    @Override
    public List<City> findAll() {
        return getCurrentSession().createQuery("from City").getResultList();
    }
}
