<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomepageController extends AbstractController
{
    #[Route('/', name: 'app_homepage')]
    public function index(): Response
    {
        return $this->render('homepage/index.html.twig', [
            'controller_name' => 'HomepageController',
        ]);
    }

    #[Route('/welcome/{name}', name: 'app_homepage_welcome')]
    public function welcome(string $name): Response
    {
        return $this->render('homepage/welcome.html.twig', [
            'name'=> $name
        ]);
    }
}
