<?php

// src/EventListener/DatabaseActivitySubscriber.php
namespace App\EventSubscriber;

use App\Entity\Products;
use App\Repository\ProductsRepository;
use Doctrine\Bundle\DoctrineBundle\EventSubscriber\EventSubscriberInterface;
use Doctrine\ORM\Events;
use Doctrine\Persistence\Event\LifecycleEventArgs;
use Exception;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Contracts\EventDispatcher\Event;

class DatabaseActivitySubscriber implements EventSubscriberInterface
{
    // this method can only return the event names; you cannot define a
    // custom method name to execute when each event triggers

    public function __construct(private ProductsRepository $productsRepository, private SluggerInterface $slugger)
    {
        
    }

    public function getSubscribedEvents(): array
    {
        return [
            // Events::postPersist,
            // Events::postRemove,
            Events::postUpdate,
        ];
    }

    // callback methods must be called exactly like the events they listen to;
    // they receive an argument of type LifecycleEventArgs, which gives you access
    // to both the entity object of the event and the entity manager itself
    // public function postPersist(LifecycleEventArgs $args): void
    // {
    //     $this->logActivity('persist', $args);
    // }
    
    // // public function postFlush(LifecycleEventArgs $event): void
    public function postUpdate(LifecycleEventArgs $event): void
    {
        // // $products = $products->setSlug('gggggg');
        try{
            if($event->getObject() instanceof Products){
                $product = $event->getObject()->setSlug(
                    $this->slugger->slug("Je suis En train de coder à l'école")->lower()
                );
                $this->productsRepository->updateById($product);
            }
        }catch(Exception $e){
            $this->logActivity("error_update" ,"Error update ".  $e->getMessage());
        }
        $this->logActivity('update', $event);
    }

    // public function postRemove(LifecycleEventArgs $args): void
    // {
    //     // dump($args);
    //     $this->logActivity('remove', $args);
    // }

  

    private function logActivity(string $action, LifecycleEventArgs|Exception|string $args): void
    {
        $entity = $args->getObject();

        // if this subscriber only applies to certain entity types,
        // add some code to check the entity type as early as possible
        if (!$entity instanceof Products) {
            return;
        }

        // ... get the entity information and log it somehow
    }
}