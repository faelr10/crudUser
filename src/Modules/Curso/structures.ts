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
}

export interface ICursoService{
    create({id,name,language,createdUser_id}:ICurso):Promise<object|Error>
    find():Promise<object|Error>
}

export interface ICursoController{
    create(req:Request,res:Response):Promise<void>   
}