<?php

namespace App\Controller;

use App\Repository\ProductsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;



class ProductController extends AbstractController
{    
    private ProductsRepository $productsRepository;
    
    public function __construct(private ProductsRepository $ProductsRepository)
    {
        $this->productsRepository = $ProductsRepository;
    }

    #[Route('/products', name: 'app_product')]
    public function index(): Response
    {
        $products = $this->productsRepository->findAll();
        return $this->render('product/index.html.twig', [
            'products' => $products,
        ]);
    }

    #[Route('/product/{slug}', name: 'app_one_product')]
    public function product(string $slug): Response
    {
        $product = $this->productsRepository->findBy(['slug' => $slug])[0];
        return $this->render('product/product.html.twig', [
            'product' => $product,
        ]);
    }
}
