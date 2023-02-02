<?php

namespace App\Controller;

use App\Entity\Products;
use App\Form\ProductSearchType;
use App\Repository\ProductsRepository;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
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
    public function index(string $page, Request $request): Response | Exception
    {
        $products = $this->productsRepository->getProductsByOffset($page);
        $nbProducts = $this->productsRepository->getCountProducts();
        $nbPages = intval(ceil($nbProducts/10));
        $page=intval($page);


        $type = ProductSearchType::class;
        $model = new Products();
        $form_search = $this->createForm($type, $model);

        $form_search->handleRequest($request);

        $data = $form_search->getData();

        $searchMode = ( $form_search->isSubmitted() &&  !empty($data->getName()) );

        if($searchMode){
            $products = $this->productsRepository->search($data->getName());
            $nbProducts = $this->productsRepository->getCountProducts();
            $nbPages = intval(ceil($nbProducts/10));

            return $this->render('product/index.html.twig', [
                'products' => $products,
                'nbPages' => $nbPages,
                'currentPage' => $page,
                'form_search' => $form_search
            ]);
            
        }else{
            return $this->render('product/index.html.twig', [
                'products' => $products,
                'nbPages' => $nbPages,
                'currentPage' => $page,
                'form_search' => $form_search
            ]);
        }
    }

    #[Route('/product/{slug}', name: 'app_one_product')]
    public function product(string $slug): Response
    {
        $product = $this->productsRepository->findBy(['slug' => $slug])[0];
        return $this->render('product/product.html.twig', [
            'product' => $product,
        ]);
    }

    // #[Route('/product/search', name: 'app_one_product')]
    // public function searchProduct(string $slug): Response
    // {
        // $type = ProductSearchType::class;
        // $model = new Products();
        // $form = $this->createForm($type, $model);

        // $data = $form->getData();
    //     $product = $this->productsRepository->findBy(['slug' => $slug])[0];
    //     return $this->render('product/product.html.twig', [
    //         'product' => $product,
    //     ]);
    // }
}
