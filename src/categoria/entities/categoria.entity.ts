import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, MaxLength } from "class-validator"
import { Tarefa } from "src/tarefa/entities/tarefa.entities"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity('tb_categoria')
export class Categoria {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(255)
    @Column({ nullable: false, length: 255 })
    descricao: string

    @OneToMany(() => Tarefa, (tarefa) => tarefa.categoria)
    @ApiProperty({type: () => Tarefa})
    tarefas: Tarefa[]

}