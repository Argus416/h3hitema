<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;



class ProductController extends AbstractController
{
    private $products = [
        1 => 'Pomme',
        2 => 'Orange',
        1 => 'Pomme de terre',
    ];
    
    #[Route('/product/{id}', name: 'app_product')]
    public function index(string $id): Response
    {
        return $this->render('product/index.html.twig', [
            'product' => $this->products[$id],
        ]);
    }
}
