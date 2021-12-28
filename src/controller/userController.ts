import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from '../entity/user';
import httpStatus from "http-status";

export class UserController {
    static createUser = async (req: Request, res: Response) => {
        try{
            const data = req.body;
            const user = getRepository(User).create(data);
            const result = await getRepository(User).save(user);
            res.status(httpStatus.CREATED).json(result)

        }catch(err){
            res.status(httpStatus.NOT_FOUND).json(err)
        }
    }

    static getUser = async (req:Request, res:Response)=>{
        try{
            const userId = Number(req.query.id) ;
            const phoneNumber = req.query.phoneNumber;
            if(userId && phoneNumber){
                const user = await getRepository(User).findOne(userId);
                res.status(httpStatus.OK).json(user)
            }else{
                const user = await getRepository(User).find();
                res.status(httpStatus.OK).json(user)
            }
        }catch(err){
            res.status(httpStatus.NOT_FOUND).json(err);
        }
    }

    static deleteUser = async (req:Request, res:Response)=>{
        try{
            const userId = Number(req.query.id) ;
            const phoneNumber = req.query.phoneNumber;
            const user = await getRepository(User).delete(userId);
            res.status(httpStatus.OK).json(user)
        }catch(err){
            res.status(httpStatus.NOT_FOUND).json(err)
        }
    }

    static updateUser = async (req:Request, res:Response)=>{
        try{
            const userId = Number(req.query.id) ;
            const phoneNumber = req.query.phoneNumber;
            const data = req.body;
            const user = await getRepository(User).findOne(userId);
            if(user){
                getRepository(User).merge(user,data);
                const result = await getRepository(User).save(user);
                return res.status(httpStatus.NO_CONTENT).json();
            }
        }catch(err){
            res.status(httpStatus.NOT_FOUND).json(err)
        }
    }
}

