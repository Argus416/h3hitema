package com.hitema.dao;

import com.hitema.entities.Actor;
import com.hitema.entities.Country;

import java.util.List;

public class ActorDaoImpl extends AbstractDao implements Dao<Actor, Long> {

    @Override
    public Actor create(Actor entity) {
        return null;
    }

    @Override
    public Actor read(Long id) {
        return getCurrentSession().find(Actor.class, id);
    }

    @Override
    public void update(Actor entity) {

    }

    @Override
    public void delete(Actor entity) {

    }

    @Override
    public List<Actor> findAll() {
        return getCurrentSession().createQuery("from Actor").getResultList();
    }
}
