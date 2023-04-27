package com.hitema.mysql.domains;

import com.hitema.mysql.entities.Actor;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ActorDaoTest {
    private ActorDao actorDao = new ActorDao();
    @Test
    void getActorsFilm() {
        Actor actor = actorDao.get(1l);
        assertEquals(false, actor.getFilms().isEmpty(), "Erreur lors de la récupération des films");
    }
}