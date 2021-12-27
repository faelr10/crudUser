import { Request, request, Response } from "express";
import { User } from "../../entities/User";



export interface IUser{
    id?: string,
    name: string,
    CPF: string,
    email:string
}

export interface IUserRepository{
    create(data:IUser):Promise<User>
    find():Promise<object>
    findById(id:string):Promise<User>
    delete(id:string):Promise<void>
    update(id:string, name?:string, CPF?:string,email?:string):Promise<object>
}

export interface IUserService{
    create({id,name,CPF,email}: IUser): Promise<object>
    find():Promise<object>
    findById(id:string, name?:string, CPF?:string,email?:string):Promise<User>
    delete(id:string, name?:string, CPF?:string,email?:string):Promise<void>
    update(id:string, name?:string, CPF?:string,email?:string):Promise<object>
}

export interface IUserController{
    create(req:Request,res:Response):Promise<void>
    find(req:Request,res:Response):Promise<void>
    findById(req:Request, res:Response):Promise<void>
    delete(req:Request, res:Response):Promise<void>
    update(req:Request, res:Response):Promise<void>
}