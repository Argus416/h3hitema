package com.hitema.mysql;

import com.hitema.mysql.abstracts.DaoSession;
import com.hitema.mysql.domains.CityDao;
import com.hitema.mysql.domains.CountryDao;
import com.hitema.mysql.entities.City;
import com.hitema.mysql.entities.Country;

import java.util.List;

public class ConsoleMysql {

    public static void main(String[] args) {
        DaoSession.Start();
        CountryDao CountryDao = new CountryDao();
        CityDao CityDao = new CityDao();
        City city = new City();
        city.setCity("papariis");
//        List<Country> countries = CountryDao.getAll();
//        CountryDao.update(111,"updated");
////        CountryDao.delete(110);
//        CountryDao.save("gg");

        CityDao.save(city);
    }
}