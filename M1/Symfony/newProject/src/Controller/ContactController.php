<?php

namespace App\Controller;

use App\Entity\Contact;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Form\ContactType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\Session;

class ContactController extends AbstractController
{
    #[Route('/contact', methods:['GET', 'POST'], name: 'app_contact')]
    public function index(Request $request): Response
    {
        $type = ContactType::class;
        $contact = new Contact();
        $form = $this->createForm($type , $contact);
        $form->handleRequest($request);
        $formIsValid = false;

        $session= $request->getSession();

        if($form->isSubmitted()){
            $formIsValid = $form->isValid() && $form->isSubmitted();

            if($formIsValid){
                $this->addFlash('error',"Le formulaire n'est pas valide");
            }else{
                $session = new Session(); 
                $session->getFlashBag()->add('success', 'You will be contacted soon');
                return $this->redirectToRoute('app_homepage');
            }
        }

        dump($form);


        return $this->render('contact/index.html.twig', [
            'form' => $form->createView(),
            'formIsValid' => $formIsValid ,
            'formIsSubmited' => $form->isSubmitted() ,
        ]);
    }

  
}
