import { Request, Response } from "express";
import { Curso } from "../../entities/Curso";


export interface ICurso{
    id?: string,
    name: string,
    language: string,
    createdUser_id:string
}

export interface ICursoRepository{
    create(data:ICurso):Promise<Curso|Error>
    find():Promise<object|Error>
    findById(id:string):Promise<Curso|Error>
    delete(id:string):Promise<void|Error>
    update(id:string,name?:string,language?:string):Promise<Curso|Error>
}

export interface ICursoService{
    create({id,name,language,createdUser_id}:ICurso):Promise<object|Error>
    find():Promise<object|Error>
    findById(id):Promise<Curso|Error>
    delete(id):Promise<void|Error>
    update(id:string,name?:string,language?:string):Promise<Curso|Error>
}

export interface ICursoController{
    create(req:Request,res:Response):Promise<void>
    find(req:Request,res:Response):Promise<void>
    findById(req:Request,res:Response):Promise<void>
    delete(req:Request,res:Response):Promise<void>
    update(req:Request,res:Response):Promise<void>
}