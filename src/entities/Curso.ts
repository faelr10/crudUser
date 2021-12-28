import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";



@Entity("cursos")
export class Curso{

    @PrimaryColumn()
    id:string

    @Column()
    name:string

    @Column()
    language:string

    @ManyToOne(()=>User)
    @JoinColumn({name:"createdUser_id"})
    user:User

    @CreateDateColumn()
    created_at:Date

    constructor(){
        if(!this.id){
            this.id=uuid()
        }
    }
}