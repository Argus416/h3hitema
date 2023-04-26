package com.hitema.mysql.domains;

import com.hitema.mysql.abstracts.DaoSession;
import com.hitema.mysql.entities.Film;
import com.hitema.mysql.interfaces.Dao;
import jakarta.persistence.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

public class FilmDao extends DaoSession implements Dao<Film, Long> {

    @Override
    public void save(String name) {
        try{
            Film film = new Film();
            film.setTitle(name);
            film.setLanguageId(1L);
            film.setOriginalLanguageId(1L);
            film.setLastUpdate(java.time.LocalDateTime.now());
            getCurrentSession().save(film);
        }catch (Exception e){
            System.out.println("Erreur lors de l'insertion");
        }
    }

    @Override
    public Film get(Long id) {
        try{
            return getCurrentSession().get(Film.class, id);
        }catch (Exception e) {
            System.out.println("Erreur lors de la récupération des données");
            return null;
        }
    }

    @Override
    public List<Film> getAll() {
        try{
            return getCurrentSession().createQuery("FROM Film", Film.class).getResultList();
        }catch (Exception e){
            System.out.println("Erreur lors de la récupération des données");
            return null;
        }
    }

    @Override
    public void update(Long id, String name) {
        try{
            Session session = getCurrentSession();
            Transaction transaction = (Transaction) session.beginTransaction();

            Query query = session.createQuery("UPDATE Film SET title = :title WHERE id = :id");
            query.setParameter("name", name);
            query.setParameter("id", id);
            query.executeUpdate();

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

            Query query = session.createQuery("DELETE FROM Film WHERE id = :id");
            query.setParameter("id", id);
            query.executeUpdate();

            transaction.commit();
            System.out.println("Suppression réussie");
        }catch (Exception e){
            System.out.println("Erreur lors de la suppression "+ e);
        }
    }

    public List<Film> searchByFilm(String title){
        try{
            return getCurrentSession()
                    .createQuery("FROM Film WHERE title LIKE :title", Film.class)
                    .setParameter("title", "%"+title+"%")
                    .getResultList();
        }catch (Exception e){
            System.out.println("Erreur lors de la récupération des données");
            return null;
        }
    }
}
