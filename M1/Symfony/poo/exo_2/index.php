<!-- 
1- Créer une classe « Country » reprenant les membres de la classe « France »
2- Créer un héritage entre les classes « Country » et « France »
3- Ajouter la propriété « president » à la classe « France », ainsi que ses getters/setters
4- Créer une classe « UnitedKingdom » héritant de la classe « Country », puis instancier l'objet « unitedKingdom »
5- Ajouter la propriété « queen » à la classe « UnitedKingdom », ainsi que ses getters/setters
 -->
 <?php
    class Country{
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

    class UnitedKingdom extends Country{
        private string $queen = "";


        public function setQueen(string $queen){
            $this->queen = $queen;
        }

        public function getQueen(){
            return $this->queen;
        }
    }

    class France extends Country{
        private string $president = "";


        public function setPresident(string $president){
            $this->president = $president;
        }

        public function getPresident(){
            return $this->president;
        }
    }

    $france = new France();
    $france->setName('France');
    echo $france->getName() . "</br>";
    echo "----------------";
    $france->setPresident('Emmanuel Macron');
    echo $france->getPresident() . "</br>";
    $france->setCurrency('Euro');
    echo $france->getCurrency(). "</br>";
    $france->setPopulation('90 000 000');
    echo $france->getPopulation(). "</br>";
?>