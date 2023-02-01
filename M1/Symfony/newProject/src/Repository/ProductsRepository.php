<?php

namespace App\Repository;

use App\Entity\Category;
use App\Entity\Products;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query\Expr\Join;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Products>
 *
 * @method Products|null find($id, $lockMode = null, $lockVersion = null)
 * @method Products|null findOneBy(array $criteria, array $orderBy = null)
 * @method Products[]    findAll()
 * @method Products[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProductsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Products::class);
    }

    public function save(Products $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
    
    public function remove(Products $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
   
    public function getRandomProducts(): array
    {
        $products = 
            $this->createQueryBuilder('p')
            ->orderBy('RAND()')
            ->setMaxResults(3)
            ->getQuery()
            ->getResult();

        return $products;
    }

      
    public function getCountProducts():int 
    {
        $products = 
            $this->createQueryBuilder('p')
            ->select('count(p.id)')
            ->getQuery()
            ->getResult();

        $products = $products[0][1];
        return $products;
    }

    public function getProductsByOffset(int $offset):array
    {
        $products = 
            $this->createQueryBuilder('p')
            ->setFirstResult($offset)
            ->setMaxResults(8)
            ->orderBy('p.id')
            ->getQuery()
            ->getResult();

        return $products;
    }

    public function getProducts():array
    {
        $products = 
            $this->createQueryBuilder('p')
            ->select('
                p.id as productId,
                p.name as productName,
                p.description as productDesc,
                p.image as productImage,
                c.name as categoryName
            ')
            ->innerJoin(Category::class,'c',Join::WITH, 'p.category = c.id')
            ->orderBy('p.id', 'asc')
            ->getQuery()
            ->getResult();

           
        return $products;
    }

//    /**
//     * @return Products[] Returns an array of Products objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('p.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Products
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
