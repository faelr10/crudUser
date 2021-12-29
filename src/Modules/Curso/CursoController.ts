import { Request, Response } from "express";
import { ICursoController, ICursoService } from "./structures";



export default class CursoController implements ICursoController{

    constructor (private cursoService:ICursoService){}


    async create (req:Request,res:Response):Promise<void>{

        const{name,language,createdUser_id} = req.body

        if(!name){
            res.status(422).json({message:"Campo name não pode ser vazio!"})
        }
         if(!language){
             res.status(422).json({message:"Campo language não pode ser vazio!"})
         }
         if(!createdUser_id){
             res.status(422).json({message:"Campo createdUser_id não pode ser vazio!"})
         }

         const user = await this.cursoService.create({
             name,
             language,
             createdUser_id
         })

        res.status(201).json(user)

    }

    async find(req:Request,res:Response):Promise<void>{

        const curso = await this.cursoService.find()

        res.json(curso)

    }

    async findById(req:Request,res:Response):Promise<void>{

        const {id} = req.params

        const curso = await this.cursoService.findById(id)

        res.json(curso)

    }

    async delete(req:Request,res:Response):Promise<void>{

        const {id} = req.params

        const curso = await this.cursoService.delete(id)

        res.status(204).json(curso)

    }

    async update(req:Request,res:Response):Promise<void>{
        
        const {id} = req.params
        const {name,language} = req.body

        const curso = await this.cursoService.update(id,name,language)

        res.json(curso)

    }

}