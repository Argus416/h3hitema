<?php

namespace App\Controller;

use App\Entity\Products;
use App\Form\ProductSearchType;
use App\Repository\ProductsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SearchController extends AbstractController
{
    public function __construct(private ProductsRepository $productsRepository)
    {
        
    }
    #[Route('/search', name: 'app_search')]
    public function index(RequestStack $request): Response
    {
        $type = ProductSearchType::class;
        $model = new Products();
        $form_search = $this->createForm($type, $model);

        $form_search->handleRequest($request->getMainRequest());

        $data = $form_search->getData();
        $products = array();

        if(!empty($data->getName())){
            $products = $this->productsRepository->search($data->getName());
        }else{
            return $this->redirectToRoute('app_product', ["page" => 0]);
        }

        return $this->render('search/index.html.twig', [
            'products' => $products,
            'form_search' => $form_search->createView()
            
        ]);
    }
}
