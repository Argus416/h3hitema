import { createUsername } from '../helpers/formater';
import {Request, Response} from 'express';
import {Iusers, Role} from "../Model/Iusers";
import * as crypto from "crypto";
import { faker } from '@faker-js/faker';
import _ from "lodash"

class User {

    users: Array<Iusers> = []

    constructor(){
        this.users = _.range(10).map((e, index:number)=>{
            const firstname = faker.name.firstName()
            const lastname = faker.name.lastName()
            const result: Iusers = {
                id: `${index}`,
                firstname, 
                lastname, 
                username : createUsername([firstname, lastname]),
                password: `${index}`,
                role : faker.helpers.arrayElement([Role.admin, Role.employee, Role.client])
            }
            return result
        })
    }
    /*
        On crée un utilisateur avec les données du body de la requête HTTP
        (POST) et on l'ajoute à la liste des utilisateurs (this.users)
     */
    createUser = (req: Request, res: Response) => {

        const user: Iusers = {

            id: crypto.randomUUID(),
            ...req.body

        };

        this.users.push(user);

        res.json({text: "User created"});

    }

    /*
        On retourne la liste des utilisateurs (this.users)
     */
    getAllUsers = (req: Request, res: Response) => {
        res.json(this.users);
    }

    /*
       On supprime un utilisateur de la liste des utilisateurs (this.users) en fonction de son id
     */
    deleteUser = (req: Request, res: Response) => {
        const id = req.params.id;
        const user = this.users.find(user => user.id === id);
        if (user) {
            this.users = this.users.filter(user => user.id !== id);
            res.json({text: "User deleted"});
        } else {
            res.status(404).json({text: "User not found"});
        }
    }

    /*
        On met à jour un utilisateur de la liste des utilisateurs (this.users) en fonction de son id
     */
    updateUser = (req: Request, res: Response) => {
        const id = req.params.id;
        const user = this.users.find(user => user.id === id);
        if (user) {
            this.users = this.users.map(u => u.id === id ? {...u, ...req.body} : u)
            res.json({text: "User updated"});
        } else {
            res.status(404).json({text: "User not found"});
        }
    }

}

const user = new User();

export default user;
