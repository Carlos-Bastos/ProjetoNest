import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity({ name: 'tb_tarefa' })
export class Tarefa {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(50)
    @Column({ nullable: false, length: 50 })
    nome: string

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(500)
    @Column({ nullable: false, length: 500 })
    descricao: string

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(50)
    @Column({ nullable: false, length: 50 })
    responsavel: string

    @ApiProperty()
    @Column()
    data: Date

    @ApiProperty()
    @Column()
    status: boolean

    @ApiProperty({type: () => Tarefa})
    @ManyToOne(() => Categoria, (categoria) => categoria.tarefas, {
        onDelete: "CASCADE"
    })
    categoria: Categoria
}