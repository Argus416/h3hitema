import { NextFunction, Request, Response } from "express"
import Auth from "../Controller/Auth"
import { Role } from "../Model/MUser"
import _ from "lodash"

export const isConnected = (req: Request,res: Response,next: NextFunction) =>{
    const connected = _.isEmpty(Auth.currentUser)    
    if(!connected){
        res.status(402).json({message : 'You need to connect first'})
    }
}

export const isAdmin = (req: Request,res: Response,next: NextFunction) =>{
    const result =Auth.currentUser?.role === Role.admin 
    next()
    return result
}


export const isEmployee = (req: Request,res: Response,next: NextFunction) =>{
    const result =Auth.currentUser?.role === Role.employee
    next()
    return result
}


export const isClient = (req: Request,res: Response,next: NextFunction) =>{
    const result =Auth.currentUser?.role === Role.client
    next()
    return result
}
