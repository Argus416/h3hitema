package com.hitema.dao;

import com.hitema.entities.Country;
import org.junit.jupiter.api.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.*;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class CountryDaoImplTest {

    private static final Logger log = LoggerFactory.getLogger(CountryDaoImplTest.class);

    static CountryDaoImpl dao;
    static CityDaoImpl cityDao;

    @BeforeAll
    static void beforeAll(){
        dao = new CountryDaoImpl();
        cityDao = new CityDaoImpl();
    }
    @Test
        @Disabled
    public void create() {
        Country country = new Country();
        country.setCountry("Kossovo");
        country.setLastUpdate(LocalDateTime.now());
        dao.create(country);
        assertTrue(country.getId()!=null, "ERROR While create COUNTRY");
    }

    @Test
    @DisplayName("Read City Test")
    public void read() {
        Long id = 6l;
        var country = dao.read( id);
        assertNotNull(country,"WARNING Country does not EXISTS !!!!");
        var cities = country.getCities();
        log.trace("Nombre de villes {} pour le pays {} ",cities.size(), country);
        country.getCities().forEach(cty->log.trace("{}",cty));
    }


}