import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Cursos1640691578244 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name:"cursos",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true
                    },
                    {
                        name:"name",
                        type:"varchar"
                    },
                    {
                        name:"language",
                        type:"varchar"
                    },
                    {
                        name:"createdUser_id",
                        type: "uuid"
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                    }
                ],
                foreignKeys:[
                    {
                        name:"fk_cursos_user",
                        columnNames:["createdUser_id"],
                        referencedTableName:"users",
                        referencedColumnNames:["id"]
                    }
                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cursos")
    }

}
