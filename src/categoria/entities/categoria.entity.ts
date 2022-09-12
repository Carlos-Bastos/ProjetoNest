import { IsNotEmpty, MaxLength } from "class-validator"
import { Tarefa } from "src/tarefa/entities/tarefa.entities"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Table } from "typeorm"

@Entity('tb_categoria')
export class Categoria {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @MaxLength(255)
    @Column({ nullable: false, length: 255 })
    descricao: string

    @OneToMany(() => Tarefa, (tarefa) => tarefa.categoria)
    tarefas: Tarefa[]

}