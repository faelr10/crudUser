import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Users1640279268037 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name:"name",
                        type:"varchar",
                    },
                    {
                        name:"CPF",
                        type:"varchar",
                        isUnique:true
                    },
                    {
                        name:"email",
                        type:"varchar",
                        isUnique:true
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                    }
                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
