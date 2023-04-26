package com.hitema.mysql;

import com.hitema.mysql.entities.Country;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import java.util.List;

public class ConsoleMysql {

    static Session currentSession;
    public static void main(String[] args) {
        System.out.println("<<<<<Start Console MySql>>>>>");
        try (var session = openCurrentSession()) {
            if (session == null) {
                System.err.println("Erreur ouverture de Session");
                System.exit((-1));
            }
        }

        findAllCountries().forEach(System.out::println);

        System.out.println("<<<<<End   Console MySql>>>>>");
    }

    public static Session getCurrentSession() {
        if ( ! ( currentSession != null && currentSession.isOpen()))
            currentSession=openCurrentSession();
        return currentSession;
    }

    public static Session openCurrentSession() {
        currentSession = getSessionFactory().openSession();
        return currentSession;
    }
    private static SessionFactory getSessionFactory() {
        Configuration cfg = new Configuration().configure();
        return cfg.buildSessionFactory();
    }

    public static List<Country> findAllCountries() {
        return getCurrentSession().createQuery("from Country", Country.class).getResultList();
    }
}