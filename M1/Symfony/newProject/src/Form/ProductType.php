<?php

namespace App\Form;

use App\Entity\Category;
use App\Entity\Products;
use App\Repository\CategoryRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;

class ProductType extends AbstractType
{
    public function __construct(private CategoryRepository $categoryRepository)
    {
        
    }
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $allCategories = $this->categoryRepository->getCategoriesBasic();
        $categories = array();
        foreach($allCategories as $key => $value){
            $categories[$value->getName()] = $value;
            // $allCategories= new Category($value);
        };

        
        $builder
            ->add('name', TextType::class, [
                'constraints' =>[
                    new NotBlank([
                        'message' => 'Veuillez remplir le champ'
                    ])
                ]
            ])
            ->add('description', TextType::class, [
            ])
            ->add('price', NumberType::class, [
                'constraints' =>[
                    new NotBlank([
                        'message' => 'Veuillez remplir le champ'
                    ])
                ]
            ])
            ->add('slug', TextType::class, [
                'constraints' =>[
                    new NotBlank([
                        'message' => 'Veuillez remplir le champ'
                    ])
                ]
            ])
            ->add('image', FileType::class)
            ->add('category', ChoiceType::class, [
                'choices'  => $categories,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Products::class,
            'required' => false
        ]);
    }
}
