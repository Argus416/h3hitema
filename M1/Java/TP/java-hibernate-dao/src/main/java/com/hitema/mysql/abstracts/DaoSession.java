package com.hitema.mysql.abstracts;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public abstract class DaoSession {
    static Session currentSession;
    public static void Start() {
        System.out.println("<<<<<Check Connection to database>>>>>");
        try (var session = openCurrentSession()) {
            if (session == null) {
                System.err.println("Erreur ouverture de Session");
                System.exit((-1));
            }
        }
        System.out.println("<<<<<Java is connected to database>>>>>");

    }

    public static Session getCurrentSession() {
        if ( ! ( currentSession != null && currentSession.isOpen()))
            currentSession=openCurrentSession();
        return currentSession;
    }

    private static Session openCurrentSession() {
        currentSession = getSessionFactory().openSession();
        return currentSession;
    }
    private static SessionFactory getSessionFactory() {
        Configuration cfg = new Configuration().configure();
        return cfg.buildSessionFactory();
    }

//    public static List<Country> findAllCountries() {
//        return getCurrentSession().createQuery("from Country", Country.class).getResultList();
//    }
}
