import {Request, Response} from 'express';
import * as crypto from "crypto";
import { faker } from '@faker-js/faker';
import _ from "lodash"
import mongoose from 'mongoose';
import MChamber, {IChamber} from '../Model/MChamber';


class Chamber {

    chambers: Array<any> = []

    createChamber = async (req: Request, res: Response) => {
        try{
            const chamber = new MChamber({...req.body})
            await chamber.save()
            res.json({data: chamber});
        }catch(err){
            console.error(`Error creating chamber ${err}`)
            res.send(`Error creating chamber ${err}`)
        }
    }

    getAllChambers = async (req: Request, res: Response) => {
        try{
            const chambers = await MChamber.find()
            res.json({ data : chambers })
        }catch(err){
            console.error(`Error fetching chambers ${err}`)
            res.send(`Error fetching chambers ${err}`)
        }
    }

    /*
       On supprime un utilisateur de la liste des utilisateurs (this.chambers) en fonction de son id
     */
    deleteChamber = async (req: Request, res: Response) => {
        try{
            const { id } = req.params;
            const chamber = await MChamber.deleteOne({
                _id : id
            })
    
            res.json({chamber});
        }catch(err){
            console.error(`Error deleting chamber ${err}`)
            res.send(`Error deleting chamber ${err}`)
        }
    }

    /*
        On met à jour un utilisateur de la liste des utilisateurs (this.chambers) en fonction de son id
     */
    updateChamber = async (req: Request, res: Response) => {
        try{
            const { id } = req.params;
            const chamber = await MChamber.updateOne({_id: id}, {
                ...req.body
            })

            res.json(chamber)
        }catch(err){
            console.error(`Error updating chamber ${err}`)
            res.send(`Error updating chamber ${err}`)
        }

    }
}

const chamber = new Chamber();

export default chamber;
