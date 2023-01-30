<?php

namespace App\DataFixtures;

use App\Entity\Products;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

use Faker; 

class ProductsFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // $product = new Product();
        // $manager->persist($product);
        $faker = Faker\Factory::create('fr_FR');
        for ($i = 0; $i < 100; $i++) {
            $products[$i] = new Products();
            // $products[$i]->setName($faker->words(1)[0]);
            // $products[$i]->setDescription($faker->sentence(1)[0]);
            // $products[$i]->setImage($faker->imageUrl(1920, 1080, 'fruits'));
            // $products[$i]->setPrice($faker->randomNumber(2)[0]);
            $products[$i]->setName($faker->words(1, true));
            $products[$i]->setDescription($faker->words(10, true));
            $products[$i]->setImage("https://picsum.photos/id/$i/1920/1080");
            $products[$i]->setPrice($faker->randomNumber(2));
            $products[$i]->setSlug($faker->uuid());


            $manager->persist($products[$i]);
        }
        $manager->flush();
    }
}
