package com.hitema.mysql.domains;

import com.hitema.mysql.abstracts.DaoSession;
import com.hitema.mysql.entities.City;
import com.hitema.mysql.interfaces.Dao;

import java.util.List;

public class CityDao extends DaoSession implements Dao<City, Long> {



    @Override
    public void save(String params) {
        try{
            City city = new City();
            city.setCity(name);
            city.setLastUpdate(java.time.LocalDateTime.now());
            getCurrentSession().save(city);
        }catch (Exception e){
            System.out.println("Erreur lors de l'insertion");
        }
    }

    @Override
    public City get(Integer id) {
        return null;
    }

    @Override
    public List<City> getAll() {
        return null;
    }

    @Override
    public void update(Integer id, String name) {

    }

    @Override
    public void delete(Integer t) {

    }

//    @Override
//    public Country get(Integer id) {
//        try{
//            return getCurrentSession().get(Country.class, id);
//        }
//        catch (Exception e){
//            System.out.println("Erreur lors de la récupération des données");
//            return null;
//        }
//    }
//
//    @Override
//    public List<Country> getAll() {
//        try{
//            return getCurrentSession().createQuery("from Country", Country.class).getResultList();
//        }catch (Exception e){
//            System.out.println("Erreur lors de la récupération des données");
//            return null;
//        }
//    }
//
//    @Override
//    public void update(Integer id, String name) {
//        try{
//            Session session = getCurrentSession();
//            Transaction transaction = (Transaction) session.beginTransaction();
//
//            Query query = session.createQuery("UPDATE Country SET country = :name WHERE id = :id");
//            query.setParameter("name", name);
//            query.setParameter("id", id);
//            query.executeUpdate();
//
//            transaction.commit();
//            System.out.println("Mise à jour réussie");
//        }
//        catch (Exception e){
//            System.out.println("Erreur lors de la mise à jour");
//        }
//    }
//
//    @Override
//    public void delete(Integer id) {
//        try{
//            Session session = getCurrentSession();
//            Transaction transaction = (Transaction) session.beginTransaction();
//
//            Query query = session.createQuery("DELETE FROM Country WHERE id = :id");
//            query.setParameter("id", id);
//            query.executeUpdate();
//
//            transaction.commit();
//            System.out.println("Suppression réussie");
//        }catch (Exception e){
//            System.out.println("Erreur lors de la suppression "+ e);
//        }
//    }
}
