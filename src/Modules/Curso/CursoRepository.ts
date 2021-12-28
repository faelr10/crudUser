import { Repository } from "typeorm";
import { Curso } from "../../entities/Curso";
import { User } from "../../entities/User";
import BaseRepository from "../../utils/BaseRepository";
import { ICurso, ICursoRepository } from "./structures";



export default class CursoRepository 
extends BaseRepository<Curso>
implements ICursoRepository
{

    getRepo():Repository<Curso>{
        return super._getRepo(Curso)
    }

    async create({name,language,createdUser_id}:ICurso):Promise<Curso|Error>{

        const curso = this.getRepo().create({
            name,
            language,
            createdUser_id
        })

        await this.getRepo().save(curso)

        return curso

    }

    async find():Promise<object|Error>{

        const cursos = await this.getRepo().find({
            relations:["user"]
        })

        return cursos

    }

    async findById(id):Promise<Curso|Error>{

        const curso = await this.getRepo().findOne(id)

        return curso

    }

    async delete(id):Promise<void|Error>{
        
        await this.getRepo().delete(id)

    }


}