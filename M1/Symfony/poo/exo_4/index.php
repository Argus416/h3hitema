<!-- 
1- Créer l'interface « CountryInterface » et y créer la méthode « getLanguages() »
2- Implémenter l'interface « CountryInterface dans la classe « Country »
3- Créer la propriété « languages » dans la classe « Country »
4- Implémenter la méthode « getLanguages() » dans les classes  « France » et « UnitedKingdom »
 -->
 <?php
    interface CountryInterface{
        public function getLanguages(): string;
    }

    class Country implements CountryInterface{
        private string $name = "";
        private string $currency = "";
        private string $population = "";
        private string $leaderType = "";
        private string $language = "";


        public function setLanguage(string $language):void{
            $this->language = $language;
        }

        public function getLanguages():string {
            return $this->language;
        }

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
    $france->setLanguage('French');
    echo $france->getLanguages() . "</br>";
    $france->setPopulation('90 000 000');
    echo $france->getPopulation(). "</br>";

    echo "---------------- </br>";
    $uk = new UnitedKingdom();
    $uk->setName('United Kingdom'). ":";
    echo $uk->getName() . " :</br>";
    $uk->setLeaderType('Élisabeth II');
    echo $uk->getLeaderType() . "</br>";
    $uk->setLanguage('English');
    echo $uk->getLanguages() . "</br>";


?>