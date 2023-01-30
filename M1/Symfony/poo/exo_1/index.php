<!-- 
1- Créer une classe « France » 
2- Ajouter les propriétés privées « name », « currency » et « population »
3- Ajouter la constante « capital »
4- Ajouter des getters et setters pour les propriétés privées
5- Instancier l'objet « france »
6- Utiliser les setters pour définir une valeur aux propriétés privées et à la constante
7- Utiliser les getters pour afficher les valeurs
-->
<?php
    class France{
        private string $name = "";
        private string $currency = "";
        private string $population = "";

        public function setName(string $name){
            $this->name = $name;
        }

        public function getName(){
            return $this->name;
        }

        public function setCurrency(string $currency){
            $this->currency = $currency;
        }

        public function getCurrency(){
            return $this->currency;
        }

        public function setPopulation(string $population){
            $this->population = $population;
        }

        public function getPopulation(){
            return $this->population;
        }

    }

    $france = new France();
    $france->setName('France');
    echo $france->getName() . "</br>";
    $france->setCurrency('Euro');
    echo $france->getCurrency(). "</br>";
    $france->setPopulation('90 000 000');
    echo $france->getPopulation(). "</br>";
?>