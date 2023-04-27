package com.hitema.mysql.domains;
import com.hitema.mysql.abstracts.DaoSession;
import com.hitema.mysql.entities.Country;
import com.hitema.mysql.interfaces.Dao;
import jakarta.persistence.Query;
import org.hibernate.Transaction;
import org.hibernate.Session;

import java.util.List;
import java.util.Optional;

public class CountryDao extends DaoSession implements Dao<Country, Long> {


    @Override
    public void save(Country entity) {
        try{
            Country country = new Country();
            country.setCountry(entity.getCountry());
            country.setLastUpdate(java.time.LocalDateTime.now());
            getCurrentSession().save(country);
        }catch (Exception e){
            System.out.println("Erreur lors de l'insertion");
        }
    }

    @Override
    public Country get(Long id) {
        try{
            return getCurrentSession().get(Country.class, id);
        }
        catch (Exception e){
            System.out.println("Erreur lors de la récupération des données");
            return null;
        }
    }

    @Override
    public List<Country> getAll() {
        try{
            return getCurrentSession().createQuery("from Country", Country.class).getResultList();
        }catch (Exception e){
            System.out.println("Erreur lors de la récupération des données");
            return null;
        }
    }

    @Override
    public void update(Country entity) {
        try{
            Session session = getCurrentSession();
            Transaction transaction = (Transaction) session.beginTransaction();

            session.merge(entity);

            transaction.commit();
            System.out.println("Mise à jour réussie");
        }
        catch (Exception e){
            System.out.println("Erreur lors de la mise à jour");
        }
    }

    @Override
    public void delete(Long id) {
        try{
            Session session = getCurrentSession();
            Transaction transaction = (Transaction) session.beginTransaction();

            Query query = session.createQuery("DELETE FROM Country WHERE id = :id");
            query.setParameter("id", id);
            query.executeUpdate();

            transaction.commit();
            System.out.println("Suppression réussie");
        }catch (Exception e){
            System.out.println("Erreur lors de la suppression "+ e);
        }
    }
}
