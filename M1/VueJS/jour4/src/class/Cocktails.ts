import axios from "axios";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php"

class Cocktails{
    public async getCocktails(){
        try{
            const { data } = await axios.get(`${url}?f=a`);
            const { drinks } = data
            return drinks
        }catch(err){
            console.error('Error in searchCocktails',err)
        }
    }
    
    public async searchCocktails( search : String){
        try{
            const { data } = await axios.get(`${url}?s=${search}`);
            const { drinks } = data
            return drinks
        }catch(err){
            console.error('Error in searchCocktails',err)
        }

    }
}

const cocktails = new Cocktails;

export default cocktails