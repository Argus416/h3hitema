import axios from "axios"
import { CommandeInterface } from "../interfaces/Commande"
const url = "http://localhost:3000/commandes";

class Commande {
    public async getCommandes(){
        try {
            const { data } = await axios.get<Array<CommandeInterface>>(url);
            return data
        }catch(err){
            console.error('Error fetching users',err)
        }
    }

    public async getCommande(id:String){
        try {
            const { data } = await axios.get<CommandeInterface>(`${url}/${id}`);
            return data
        }catch(err){
            console.error('Error fetching user',err)
        }
    }

    public async addCommande(body : CommandeInterface){
        try {
            const { data } = await axios.post(`${url}`, { ...body });
            return data
        }catch(err){
            console.error('Error adding user',err)
        }
    }

    public async updateCommande(id: String, body: CommandeInterface){
        try {
            const { data } = await axios.patch(`${url}/${id}`, { ...body });
            return data
        }catch(err){
            console.error('Error updating user',err)
        }
    }

    public async deleteCommande(id: String){
        try {
            const { data } = await axios.delete(`${url}/${id}`);
            return data
        }catch(err){
            console.error('Error deleting user',err)
        }
    }
}

const commande = new Commande()

export default commande

