<?php

namespace App\Controller\Admin;

use App\Entity\Products;
use App\Form\ProductType;
use App\Repository\ProductsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
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


    #[Route('/admin/product/add', name: 'app_admin_product_add')]
    public function add(Request $request): Response
    {
        $type = ProductType::class;
        $products = new Products();

        $form = $this->createForm($type , $products);

        $form->handleRequest($request);

        $formIsValid = false;
        if($form->isSubmitted()){
            $formIsValid = $form->isValid() && $form->isSubmitted();
            $session = new Session();
            // dd($form->getData());
            if(!$formIsValid){
                $session->getFlashBag()->add('error',"Le formulaire n'est pas valide");
        
            }else{
                $session->getFlashBag()->add('success', 'Product has been added');
                
                $this->productsRepository->save($form->getData(), true);
                
                return $this->redirectToRoute('app_admin_product');
            }
        }

        return $this->render('admin/product/add.html.twig', [
            'form' => $form->createView(),
            'formIsValid'=> $formIsValid
        ]);
    }

    #[Route('/admin/product/edit/{PRODUCT_ID}', name: 'app_admin_product_edit')]
    public function edit(int $PRODUCT_ID , Request $request): Response
    {
        $type = ProductType::class;
        $products = new Products();

        $form = $this->createForm($type , $products);

        $form->handleRequest($request);
        $product = $this->productsRepository->findOneBy(["id" => $PRODUCT_ID]);
        
        
        $formIsValid = false;
        if($form->isSubmitted()){
            $formIsValid = $form->isValid() && $form->isSubmitted();
            // dd($form->getData());
            if(!$formIsValid){
                $this->addFlash('error',"Le formulaire n'est pas valide");
            }else{
                $session = new Session();
                $session->getFlashBag()->add('success', 'Product has been updated');
                $product->setName($form->getData()->getName());
                $product->setDescription($form->getData()->getDescription());

                $this->productsRepository->flush();
                
                return $this->redirectToRoute('app_admin_product');
            }
        }

        return $this->render('admin/product/edit.html.twig', [
            'form' => $form->createView(),
            'product' => $product,
            // 'formIsValid'=> $formIsValid
        ]);
    }

    // ,methods: ['delete']
    #[Route('/admin/product/delete/{PRODUCT_ID}', name: 'app_admin_product_delete')]
    public function delete(int $PRODUCT_ID):Response
    {

        $product = $this->productsRepository->findOneBy(["id" => $PRODUCT_ID]);
        $this->productsRepository->remove($product, true);

        $session = new Session();
        $session->getFlashBag()->add('success',"Produit a été supprimée");

        return $this->redirectToRoute('app_admin_product');
    }

}
