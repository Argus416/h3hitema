package com.hitema.dao;

import com.hitema.entities.Actor;
import org.junit.jupiter.api.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import static org.junit.jupiter.api.Assertions.*;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class FilmDaoImplTest {

    private static final Logger log = LoggerFactory.getLogger(FilmDaoImplTest.class);
    static FilmDaoImpl dao ;
    static ActorDaoImpl actorDao;

    /**
     * L'annotation beforeAll permet d'instacier un objet qui sera utilisé par tous les tests
     * Exemple : une DAO
     */
    @BeforeAll
    static void beforeAll(){
        log.info("<<<<Instanciation DAO>>>>");
        dao = new FilmDaoImpl();
        actorDao = new ActorDaoImpl();
    }

    @Test
    void logdemo(){
        log.trace("<<<<<<<<<CECI EST UN MESSAGE TRACE>>>>>>>>>");
        log.info("<<<<<<<<<CECI EST UN MESSAGE INFO>>>>>>>>>");
        log.warn("<<<<<<<<<CECI EST UN MESSAGE WARNING>>>>>>>>>");
        log.error("<<<<<<<<<CECI EST UN MESSAGE ERROR GRAVE>>>>>>>>>");
    }
    @Test
        @Order(1)
            @Disabled("Le READ n'est encore implementé !!!!")
    void create() {
        System.out.println("<<<<<CREATE FILM    >>>>>");
        System.out.println("<<<<<END CREATE FILM>>>>>");
    }


    @Test
        @Order(1)
    void read() {
        System.out.println("<<<<<READ FILM    >>>>>");
        assertNotNull(dao,"DAO NOT INSTANCED !!!");
        var film = dao.read(1l);
        assertNotNull(film,"WARNING FILM 1 not Found !!!");
        System.out.println(film);
        System.out.println("<<<<<END READ FILM>>>>>");
    }

    @Test
        @Order(0)
    void searchByTitle() {
        assertNotNull(dao,"DAO NOT INSTANCED !!!");
        var films = dao.searchByTitle("PUNK") ;
        assertTrue(films.size()==4, "ERROR ON SearchByTitle ");
        System.out.println("Nbre de films :"+films.size());
        films.forEach(f-> System.out.println(f));
    }

    @Test
        @Order(2)
    void filmAndActors() {
        log.info("<<<<<START ActorByFilm TEST>>>>>");
        Long id = 33l;
        assertNotNull(dao, "DAO NOT INSTANCED !!!");
        var film = dao.read(id);
        var actors = film.getActors();
        assertNotNull(actors,"ERROR Retrieve Actor list");
        log.trace("Liste des {} acteurs pour le film Id : {} - {}",actors.size(), film.getId(), film.getTitle());
        actors.forEach(f->log.trace("{}", f));
        log.info("<<<<<END   ActorByFilm TEST>>>>>");
    }

    @Test
    @DisplayName("Test Actor by Film")
    void testActorByFilm() {
        log.info("<<<<<<<<<START testActorByFilm >>>>>>>>>");
        Long id = 102l ;
        var actor = actorDao.read(id);
        assertNotNull(actor, "ERROR ACTOR Access !!!");
        var films = actor.getFilms();
        log.trace("Liste des {} films pour l'acteur id({}) {} ",films.size(),actor);
        assertNotNull(films,"ERROR NO FILMS Found for this ACTOR");
        films.forEach(f->log.trace("{}",f));
        log.info("<<<<<<<<<END   testActorByFilm >>>>>>>>>");
    }
}