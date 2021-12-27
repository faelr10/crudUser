import { Repository } from "typeorm";
import { User } from "../../entities/User";
import { IUser, IUserRepository } from "./structures";
import BaseRepository from "../../utils/BaseRepository";


export default class UserRepository
extends BaseRepository<User>
implements IUserRepository
{

    getRepo():Repository<User>{
        return super._getRepo(User)
    }

    //_________________________________________________________________________

    async create({name,CPF,email}:IUser):Promise<User>{

        const user = this.getRepo().create({
            name,
            CPF,
            email
        })

        await this.getRepo().save(user)

        return user
    }

    //_________________________________________________________________________

    async find():Promise<object>{

        const users = await this.getRepo().find()

        return users

    }
    //_________________________________________________________________________

    async findById(id):Promise<User>{

        const user = await this.getRepo().findOne(id)

        return user

    }

    //_________________________________________________________________________

    async delete(id):Promise<void>{
        
        const user = await this.getRepo().delete(id)

    }

    //_________________________________________________________________________

    async update(id:string, name?:string, CPF?:string, email?:string):Promise<object>{


        const user = await this.getRepo().findOne(id)

        if(!user){
            return new Error ("User does not exists!")
        }


        user.name = name ? name : user.name
        user.CPF = CPF ? CPF : user.CPF
        user.email = email ? email : email 

        await this.getRepo().save(user)

        return user

    }


}