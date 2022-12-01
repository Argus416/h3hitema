import axios from "axios"
import { UserInterface } from "../interfaces/User"
const url = "http://localhost:3000/users";

class User {
    public async getUsers(){
        try {
            const { data } = await axios.get<Array<UserInterface>>(url);
            return data
        }catch(err){
            console.error('Error fetching users',err)
        }
    }

    public async getUser(id:String){
        try {
            const { data } = await axios.get<UserInterface>(`${url}/${id}`);
            return data
        }catch(err){
            console.error('Error fetching user',err)
        }
    }

    public async addUser(body : UserInterface){
        try {
            const { data } = await axios.post(`${url}`, { ...body });
            return data
        }catch(err){
            console.error('Error adding user',err)
        }
    }

    public async updateUser(id: String, body: UserInterface){
        try {
            const { data } = await axios.patch(`${url}/${id}`, { ...body });
            return data
        }catch(err){
            console.error('Error updating user',err)
        }
    }

    public async deleteUser(id: String){
        try {
            const { data } = await axios.delete(`${url}/${id}`);
            return data
        }catch(err){
            console.error('Error deleting user',err)
        }
    }
}

const user = new User()

export default user