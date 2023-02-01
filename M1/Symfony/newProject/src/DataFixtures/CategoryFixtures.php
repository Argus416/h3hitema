<?php

namespace App\DataFixtures;

use App\Entity\Category;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker; 

class CategoryFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // $product = new Product();
        // $manager->persist($product);


        $faker = Faker\Factory::create('fr_FR');
        for ($i = 0; $i < 5; $i++) {
            $category[$i] = new Category();
            $category[$i]->setName($faker->words(1, true));
            $category[$i]->setSlug($faker->uuid());

            $manager->persist($category[$i]);
        }
        $manager->flush();   
    }


}
