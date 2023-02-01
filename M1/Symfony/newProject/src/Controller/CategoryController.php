<?php

namespace App\Controller;

use App\Repository\CategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CategoryController extends AbstractController
{
    public function __construct(private CategoryRepository $categoryRepository)
    {
    }

    #[Route('/categories', name: 'app_category')]
    public function index(): Response
    {

        $categories = $this->categoryRepository->getCategories();
        
        return $this->render('category/index.html.twig', [
            'categories' => $categories,
        ]);
    }

    #[Route('/categories/{slug}', name: 'app_view_category')]
    public function viewCategory(string $slug): Response
    {

        $category = $this->categoryRepository->getCategory($slug);
        
        return $this->render('category/product.html.twig', [
            'category' => $category,
        ]);
    }
}
