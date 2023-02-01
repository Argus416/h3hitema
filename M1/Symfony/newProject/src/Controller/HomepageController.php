<?php

namespace App\Controller;

use App\Repository\CategoryRepository;
use App\Repository\ProductsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Category;

class HomepageController extends AbstractController
{

    public function __construct(private ProductsRepository $productsRepository, private CategoryRepository $categoryRepository)
    {
    }

    #[Route('/', name: 'app_homepage')]
    public function index(): Response
    {

        $products = $this->productsRepository->getRandomProducts();
        $nbProducts = $this->productsRepository->getCountProducts();
        $productsByOffset = $this->productsRepository->getProductsByOffset(0);

      
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
