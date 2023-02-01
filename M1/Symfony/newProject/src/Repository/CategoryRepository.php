<?php

namespace App\Repository;

use App\Entity\Category;
use App\Entity\Products;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\Query\Expr\Join;

/**
 * @extends ServiceEntityRepository<Category>
 *
 * @method Category|null find($id, $lockMode = null, $lockVersion = null)
 * @method Category|null findOneBy(array $criteria, array $orderBy = null)
 * @method Category[]    findAll()
 * @method Category[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CategoryRepository extends ServiceEntityRepository
{
    public function __construct(
            ManagerRegistry $registry
        )
    {
        parent::__construct($registry, Category::class);
    }

    public function save(Category $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Category $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function getRandomCategory(): array
    {
        $category = 
            $this->createQueryBuilder('c')
            ->orderBy('RAND()')
            ->setMaxResults(1)
            ->getQuery()
            ->getResult();

        return $category;
    }

    // category name and nb products
    public function getCategories(): array
    {
        $category = 
            $this->createQueryBuilder('c')
            ->select('count(c.id) as nbProducts, c.name as name, c.slug as categorySlug')
            ->innerJoin(Products::class,'p',Join::WITH, 'p.category = c.id')
            ->groupBy('c.id')
            ->getQuery()
            ->getResult();

        return $category;
    }

    public function getCategory(string $slug): Category
    {
        $category = 
            $this->createQueryBuilder('c')
            ->innerJoin(Products::class,'p',Join::WITH, 'p.category = c.id')
            ->where('c.slug = :slug')
            ->setParameter('slug', $slug)
            ->getQuery()
            ->getResult();

    return $category[0];            
                
    }
    



//    /**
//     * @return Category[] Returns an array of Category objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('c.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Category
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
