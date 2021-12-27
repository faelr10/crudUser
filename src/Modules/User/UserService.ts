import { User } from "../../entities/User";
import { IUser, IUserRepository, IUserService } from "./structures";



export default class userService implements IUserService{

    constructor(
        private userRepository: IUserRepository
    ){}

    //_________________________________________________________________________
    async create({ name, CPF, email }: IUser): Promise<object> {

        const user = await this.userRepository.create({
            name,CPF,email
        })

        return user
        
    }
    //_________________________________________________________________________
    async find():Promise<object>{
        
        const users = await this.userRepository.find()

        return users
    }
    //_________________________________________________________________________
    async findById(id:string, name?:string, CPF?:string, email?:string):Promise<User|Error>{

        const user = await this.userRepository.findById(id)

        return user 

    }
    //_________________________________________________________________________
    async delete(id:string, name?:string, CPF?:string, email?:string):Promise<void|Error>{
        
        const user = await this.userRepository.delete(id)

        return user

    }
    //_________________________________________________________________________
    async update(id:string, name?:string, CPF?:string, email?:string):Promise<object>{

        const user = await this.userRepository.update(id, name, CPF, email)

        return user

    }


}