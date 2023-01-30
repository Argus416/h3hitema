<?php

namespace App\Controller;

use App\Repository\ProductsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomepageController extends AbstractController
{
    private ProductsRepository $productsRepository;

    public function __construct(private ProductsRepository $ProductsRepository)
    {
        $this->productsRepository = $ProductsRepository;
    }

    #[Route('/', name: 'app_homepage')]
    public function index(): Response
    {

        $products = $this->productsRepository->getRandomProducts();

        dump($products);

        return $this->render('homepage/index.html.twig', [
            'controller_name' => 'HomepageController',
            'products' => $products
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
