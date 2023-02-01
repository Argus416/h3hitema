<?php

namespace App\Controller\Admin;

use App\Repository\ProductsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProductController extends AbstractController
{
    public function __construct(private ProductsRepository $productsRepository)
    {
        
    }
    #[Route('/admin/product', name: 'app_admin_product')]
    public function index(): Response
    {
        $products = $this->productsRepository->getProducts();
        return $this->render('admin/product/index.html.twig', [
            'products' => $products,
        ]);
    }
}
