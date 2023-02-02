<?php

namespace App\Controller\Admin;

use App\Entity\Products;
use App\Form\ProductType;
use App\Repository\ProductsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Session;
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


    #[Route('/admin/product/form/{product_id}', name: 'app_admin_product_form')]
    public function form(int|string $product_id , RequestStack $request): Response
    {
        $title = "";
        $btnText = "";

        $type = ProductType::class;
        if($product_id === 'null'){
            $title = "Ajouter un nouveau produit";
            $btnText = "Ajouter";

            $product = new Products();
        }else{
            $title = "Modifier le produit";
            $btnText = "Modifier";

            $product = $this->productsRepository->find($product_id);
        }

        $form = $this->createForm($type , $product);
        $form->handleRequest($request->getMainRequest());
        
        if($form->isSubmitted() && $form->isValid()){
            $session = new Session();
            $session->getFlashBag()->add('success', 'Product has been updated');
            
            if($product_id === 'null'){
                
                $this->productsRepository->save($form->getData(), true);
            }else{
                $this->productsRepository->flush();
            }
                
            return $this->redirectToRoute('app_admin_product');
        }

        return $this->render('admin/product/form.html.twig', [
            'form' => $form->createView(),
            'product' => $product,
            'title'=> $title,
            'btnText'=> $btnText
        ]);
    }

    // ,methods: ['delete']
    #[Route('/admin/product/delete/{product_id}', name: 'app_admin_product_delete')]
    public function delete(int $product_id):Response
    {

        $product = $this->productsRepository->findOneBy(["id" => $product_id]);
        $this->productsRepository->remove($product, true);

        $session = new Session();
        $session->getFlashBag()->add('success',"Produit a été supprimée");

        return $this->redirectToRoute('app_admin_product');
    }

}
