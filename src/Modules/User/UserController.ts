import { Request, Response } from "express"
import { IUserController, IUserService } from "./structures"


export default class UserController implements IUserController{

    constructor(private userService:IUserService){}

    //_________________________________________________________________________

    async create(req:Request,res:Response):Promise<void>{

        const {name,CPF,email} = req.body

        if(!name){
            res.status(422).json({message:"Campo name não pode ser vazio!"})
        }

        if(!CPF){
            res.status(422).json({message:"Campo CPF não pode ser vazio!"})
        }

        if(!email){
            res.status(422).json({message:"Campo email não pode ser vazio!"})
        }

        const user = await this.userService.create({
            name,
            CPF,
            email
        })

        if(user instanceof Error){
            res.json(user.message)
        }
        
        res.json(user)
    }

    //_________________________________________________________________________

    async find(req:Request,res:Response):Promise<void>{
        
        const users = await this.userService.find()

        res.json(users)

    }

    //_________________________________________________________________________

    async findById(req:Request,res:Response):Promise<void>{

        const {id} = req.params

        const user = await this.userService.findById(id)

        if(user instanceof Error){
            res.json(user.message)
        }

        res.json(user)

    }
    //_________________________________________________________________________

    async delete(req:Request,res:Response):Promise<void>{
        const {id} = req.params

        const user = await this.userService.delete(id)

        if(user instanceof Error){
            res.json(user.message)
        }

        res.status(204).json(user)
    }

    async update(req:Request,res:Response):Promise<void>{

        const {id} = req.params
        const{name,CPF,email} = req.body

        const user = await this.userService.update(id,name,CPF,email)

        if(user instanceof Error){
            res.json(user.message)
        }

        res.json(user)

    }

}