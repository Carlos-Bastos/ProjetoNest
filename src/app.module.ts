import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { Categoria } from './categoria/entities/categoria.entity';
import { CategoriaModule } from './categoria/modules/categoria.module';
import { Tarefa } from './tarefa/entities/tarefa.entities';
import { TarefaModule } from './tarefa/modules/tarefa.module';

@Module({
  imports: [TypeOrmModule.forRoot({

    /*type: 'postgres',
    host: process.env.DATABASE_URL,
    logging: false,
    dropSchema: false,
    ssl: {
      rejectUnauthorized: false
    },
    autoLoadEntities: true,
    synchronize: true */

    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'db_todo',
    entities: [Tarefa, Categoria],
    synchronize: true
  }),
    TarefaModule,
    CategoriaModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
