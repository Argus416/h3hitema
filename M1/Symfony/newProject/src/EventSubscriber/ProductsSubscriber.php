<?php

namespace App\EventSubscriber;

use App\Entity\Products;
use Doctrine\ORM\Events;
use Doctrine\Persistence\Event\LifecycleEventArgs;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\ControllerEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\String\Slugger\SluggerInterface;

class ProductsSubscriber implements EventSubscriberInterface
{
    public function __construct(private SluggerInterface $sluggerInterface)
    {
        
    }


    public static function getSubscribedEvents(): array
    {
        return [
            Events::prePersist => 'prePersist',
            Events::postUpdate => 'postUpdate',
            KernelEvents::EXCEPTION => 'onKenralExeception'
        ];
    }

    public function onKenralExeception($event) {
        dd($event);
    }

    public function prePersist(LifecycleEventArgs $event): void
    {
        dd($event);
    }

    public function postUpdate(Products $products ,LifecycleEventArgs $args): void
    {
        $this->logActivity('update', $args);
        dd($args);
    }

    private function logActivity(string $action, LifecycleEventArgs $args): void
    {
        $entity = $args->getObject();

        // if this subscriber only applies to certain entity types,
        // add some code to check the entity type as early as possible
        if (!$entity instanceof Products) {
            echo "------------------------------------------------------------------------------------";
            return;
        }

        // ... get the entity information and log it somehow
    }

}
