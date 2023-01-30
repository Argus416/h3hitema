<!-- 
1- Supprimer les propriétés « president » et « queen » aux classes « France » et « UnitedKingdom »
2- Créer la propriété « leaderType » ainsi que ses getters/setters dans la classe « Country »
3- Dans les classes « France » et « UnitedKingdom », redéfinir le getter de la propriété « leaderType »
 -->
 <?php
    class Country{
        private string $name = "";
        private string $currency = "";
        private string $population = "";
        private string $leaderType = "";

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


        public function setLeaderType(string $leaderType){
            $this->leaderType = $leaderType;
        }

        public function getLeaderType(){
            return $this->leaderType;
        }
    }

    class UnitedKingdom extends Country{


      
    }

    class France extends Country{
       
    }

    $france = new France();
    $france->setName('France'). ":";
    echo $france->getName() . " :</br>";
    echo "---------------- </br>";
    $france->setLeaderType('Emmanuel Macron');
    echo $france->getLeaderType() . "</br>";
    $france->setCurrency('Euro');
    echo $france->getCurrency(). "</br>";
    $france->setPopulation('90 000 000');
    echo $france->getPopulation(). "</br>";

    echo "---------------- </br>";
    $uk = new UnitedKingdom();
    $uk->setName('United Kingdom'). ":";
    echo $uk->getName() . " :</br>";
    echo $uk->setLeaderType('Élisabeth II');
    echo $uk->getLeaderType() . "</br>";

?>