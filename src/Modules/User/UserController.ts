import { Request, Response } from "express"
import { stringify } from "qs"
import { IUserController, IUserService } from "./structures"


export default class UserController implements IUserController{

    constructor(private userService:IUserService){}

    //_________________________________________________________________________

    async create(req:Request,res:Response):Promise<void>{

        const {name,CPF,email} = req.body

        const user = await this.userService.create({
            name,
            CPF,
            email
        })
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

        res.json(user)

    }
    //_________________________________________________________________________

    async delete(req:Request,res:Response):Promise<void>{
        const {id} = req.params

        const user = await this.userService.delete(id)

        res.status(204).json(user)
    }

    async update(req:Request,res:Response):Promise<void>{

        const {id} = req.params
        const{name,CPF,email} = req.body

        const user = await this.userService.findById(id)

        user.name = name ? name : user.name
        user.CPF = CPF ? CPF : user.CPF
        user.email = email ? email : email 

        res.json(user)

    }

}