import { Curso } from "../../entities/Curso";
import { ICurso, ICursoRepository, ICursoService } from "./structures";




export default class CursoService implements ICursoService{

    constructor(
        private cursoRepository: ICursoRepository
    ){}


    async create({name,language,createdUser_id}:ICurso):Promise<Curso|Error>{

        const curso = await this.cursoRepository.create({
            name,
            language,
            createdUser_id
        })

        return curso
    }

    async find():Promise<object|Error>{

        const curso = await this.cursoRepository.find()

        return curso

    }

    async findById(id):Promise<Curso|Error>{

        const curso = await this.cursoRepository.findById(id)

        return curso

    }

    async delete(id):Promise<void|Error>{

        await this.cursoRepository.delete(id)

    }

    async update(id,name,language):Promise<Curso|Error>{

        const curso = await this.cursoRepository.update(id,name,language)

        return curso

    }


}