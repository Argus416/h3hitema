package com.hitema.mysql.domains;

import com.hitema.mysql.abstracts.DaoSession;
import com.hitema.mysql.entities.Actor;
import com.hitema.mysql.entities.Film;
import com.hitema.mysql.interfaces.Dao;
import jakarta.persistence.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.Date;
import java.util.List;

public class ActorDao extends DaoSession implements Dao<Actor, Long> {

    @Override
    public void save(Actor entity) {
    }

    @Override
    public Actor get(Long id) {
        try{
            return getCurrentSession().get(Actor.class, id);
        }catch (Exception e) {
            System.out.println("Erreur lors de la récupération des données");
            return null;
        }
    }

    @Override
    public List<Actor> getAll() {
        try{
            return getCurrentSession().createQuery("FROM Actor ", Actor.class).getResultList();
        }catch (Exception e){
            System.out.println("Erreur lors de la récupération des données");
            return null;
        }
    }

    @Override
    public void update(Actor entity) {

    }

    @Override
    public void delete(Long t) {

    }
}
