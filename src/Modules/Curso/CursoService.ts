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



}