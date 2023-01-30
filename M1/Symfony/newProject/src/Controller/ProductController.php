<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;



class ProductController extends AbstractController
{
    private $products = [
        1 => [
            'name' => 'Pomme',
            'price' => 1.2,
            'photo' => 'https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        2 => [
            'name' => 'Orange',
            'price' => 3,
            'photo' => 'https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
        3 => [
            'name' => 'Pomme de terre',
            'price' => 5,
            'photo' => 'https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ],
    ];
    
    #[Route('/products', name: 'app_product')]
    public function index(): Response
    {
        return $this->render('product/index.html.twig', [
            'products' => $this->products,
        ]);
    }

    #[Route('/product/{id}', name: 'app_one_product')]
    public function product(string $id): Response
    {
        return $this->render('product/product.html.twig', [
            'product' => $this->products[$id],
        ]);
    }
}
