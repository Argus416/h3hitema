<!-- 
1- Créer une classe « Language » et y créer la propriété « name », ainsi que les getters/setters
2- Créer la propriété « languages » de type « Array » dans la classe « Country », afin de définir les langues officielles d'un pays
3- Créer la méthode « addLanguage » acceptant un paramètre de type « Language », et permettant d'ajouter une nouvelle entrée dans la liste des langues
4- Créer une classe « Belgium » et instancier un objet « belgium »
5- Instancier les langues « french », « dutch » et « german »
6- Ajouter les trois langues à la Belgique puis les afficher
 -->
 <?php
    interface CountryInterface{
        public function getLanguages(): array;
    }

    class Language{
        private string $name;

        public function getName():string {
            return $this->name;
        }

        public function setName(string $name):void{
            $this->$name = $name;
        }
    }

    class Country implements CountryInterface{
        private string $name = "";
        private string $currency = "";
        private string $population = "";
        private string $leaderType = "";
        private array $languages = [];


        public function setLanguage(array $language):void{
            $this->language = $language;
        }

        public function getLanguages():array {
            return $this->languages;
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