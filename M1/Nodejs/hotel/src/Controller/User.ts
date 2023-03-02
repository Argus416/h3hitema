import { createUsername } from '../helpers/formater';
import {Request, Response} from 'express';
import MUser, {IUser, Role} from "../Model/MUser";
import * as crypto from "crypto";
import { faker } from '@faker-js/faker';
import _ from "lodash"
import mongoose from 'mongoose';

// const muser = mongoose.model('user', );

class User {

    users: Array<any> = []

    constructor(){
        // this.users = _.range(10).map((e, index:number)=>{
        //     const firstname = faker.name.firstName()
        //     const lastname = faker.name.lastName()
        //     const result = {
        //         id: `${index}`,
        //         firstname, 
        //         lastname, 
        //         username : createUsername([firstname, lastname]),
        //         password: `${index}`,
        //         role : faker.helpers.arrayElement([Role.admin, Role.employee, Role.client])
        //     }
        //     return result
        // })
    }
    /*
        On crée un utilisateur avec les données du body de la requête HTTP
        (POST) et on l'ajoute à la liste des utilisateurs (this.users)
     */
    createUser = async (req: Request, res: Response) => {
        try{

            const user = new MUser({...req.body})
            await user.save()
            
            res.json({data: user});
        }catch(err){
            console.error(`Error creating user ${err}`)
        }
    }

    /*
        On retourne la liste des utilisateurs (this.users)
     */
    getAllUsers = async (req: Request, res: Response) => {
        try{
            const users = await MUser.find()
            res.json({ data : users })
        }catch(err){
            console.error(`Error fetching users ${err}`)
        }
    }

    /*
       On supprime un utilisateur de la liste des utilisateurs (this.users) en fonction de son id
     */
    deleteUser = async (req: Request, res: Response) => {
        try{
            const { id } = req.params;
            const user = await MUser.deleteOne({
                _id : id
            })
    
            res.json({user});
        }catch(err){
            console.error(`Error deleting user ${err}`)
        }
    }

    /*
        On met à jour un utilisateur de la liste des utilisateurs (this.users) en fonction de son id
     */
    updateUser = async (req: Request, res: Response) => {
        try{
            const { id } = req.params;
            const user = await MUser.updateOne({_id: id}, {
                ...req.body
            })

            res.json(user)
        }catch(err){
            console.error(`Error updating user ${err}`)
            res.status(404).json({text: "User not found"});
        }

    }
}

const user = new User();

export default user;
