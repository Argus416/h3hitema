<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

use Faker;

class UserFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // $product = new Product();
        // $manager->persist($product);


        $faker = Faker\Factory::create('fr_FR');

        for ($i = 0; $i < 5; $i++) {
            $user[$i] = new User();

            $user[$i] = new User();
            $user[$i]->setEmail($faker->email());
            $user[$i]->setRoles(['ROLE_USER']);
            $user[$i]->setPassword('$2y$13$Pe3T/mYRFR1SdMHOfD90LO3OC8YkqsM80tlPlQ44D19hetxfjbWwK');

            $manager->persist($user[$i]);
        }
        $manager->flush();
    }
}
