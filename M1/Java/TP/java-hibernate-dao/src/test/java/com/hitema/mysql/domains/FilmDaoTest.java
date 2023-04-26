package com.hitema.mysql.domains;

import com.hitema.mysql.entities.Film;
import org.hibernate.Session;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class FilmDaoTest {

    public final String FILM_TITLE_TEST = "FILM_TITLE_TEST";
    public FilmDao filmDao = new FilmDao();


    @Order(1)
    @Test
    void save() {
        filmDao.save(FILM_TITLE_TEST);

        List<Film> film =  filmDao.searchByFilm(FILM_TITLE_TEST);
        assertEquals(FILM_TITLE_TEST, film.get(0).getTitle(), "Erreur lors de l'insertion");
    }

    @Order(2)
    @Test
    void get() {
        List<Film> film =  filmDao.searchByFilm(FILM_TITLE_TEST);
        assertEquals(FILM_TITLE_TEST, film.get(0).getTitle(), "Film non trouvé");
    }

    @Order(3)
    @Test
    void getAll() {
        List<Film> film =  filmDao.getAll();
        assertEquals(false, film.isEmpty(), "Erreur à la récupération des films");
    }

    @Order(4)
    @Test
    void update() {
        Film film =  filmDao.searchByFilm(FILM_TITLE_TEST).get(0);
        String newTitle = FILM_TITLE_TEST+"_UPDATED";
        filmDao.update(film.getId(),newTitle);
        film =  filmDao.searchByFilm(FILM_TITLE_TEST).get(0);


        assertEquals(newTitle, film.getTitle(), "Erreur lors de la mise à jour");

    }

    @Order(5)
    @Test
    void delete() {
        List<Film> films =  filmDao.searchByFilm(FILM_TITLE_TEST);
        films.forEach(film -> {
            filmDao.delete(film.getId());
        });
        Integer nbLength =  filmDao.searchByFilm(FILM_TITLE_TEST).size();
        assertEquals(0, nbLength, "Erreur lors de la mise à jour");
    }

    @Order(6)
    @Test
    void searchByFilm() {
        Integer films =  filmDao.searchByFilm("PUNK").size();
        assertEquals(4, films, "Erreur lors de la mise à jour");
    }
}