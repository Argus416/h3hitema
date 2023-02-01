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

    #[Route('/products/page/{page}', name: 'app_product')]
    public function index(string $page): Response
    {
        $products = $this->productsRepository->getProductsByOffset($page);
        $nbProducts = $this->productsRepository->getCountProducts();
        $nbPages = intval(ceil($nbProducts/10));
        $page=intval($page);
        return $this->render('product/index.html.twig', [
            'products' => $products,
            'nbPages' => $nbPages,
            'currentPage' => $page
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
