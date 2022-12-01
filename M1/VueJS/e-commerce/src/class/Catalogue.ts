import axios from "axios"
import { CatalogueInterface } from "../interfaces/Catalogue"
const url = "http://localhost:3000/catalogues";

class Catalogue {
    public async getCatalogues(): Promise<CatalogueInterface[] | undefined> {
        try {
            const { data } = await axios.get<Array<CatalogueInterface>>(url);
            return data
        }catch(err){
            console.error('Error fetching catalogues',err)
        }
    }

    public async getCatalogue(id:String | Number){
        try {
            const { data } = await axios.get<CatalogueInterface>(`${url}/${id}`);
            return data
        }catch(err){
            console.error('Error fetching catalogue',err)
        }
    }

    public async addCatalogue(body : CatalogueInterface){
        try {
            const { data } = await axios.post(`${url}`, { ...body });
            return data
        }catch(err){
            console.error('Error adding catalogue',err)
        }
    }

    public async updateCatalogue(id: String, body: CatalogueInterface){
        try {
            const { data } = await axios.patch(`${url}/${id}`, { ...body });
            return data
        }catch(err){
            console.error('Error updating catalogue',err)
        }
    }

    public async deleteCatalogue(id: String){
        try {
            const { data } = await axios.delete(`${url}/${id}`);
            return data
        }catch(err){
            console.error('Error deleting catalogue',err)
        }
    }
}

const catalogue = new Catalogue()

export default catalogue

