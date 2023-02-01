<?php

namespace App\Controller\Admin;

use App\Entity\Products;
use App\Form\ProductType;
use App\Repository\ProductsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
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


    #[Route('/admin/product/add', name: 'app_admin_product_add')]
    public function add(Request $request): Response
    {
        $type = ProductType::class;
        $products = new Products();

        $form = $this->createForm($type , $products);

        $form->handleRequest($request);

        dump($form);

        return $this->render('admin/product/add.html.twig', [
            'form' => $form->createView(),
        ]);
    }

}
