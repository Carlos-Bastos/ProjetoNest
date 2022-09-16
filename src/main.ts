import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  process.env.TZ = '-03:00'
  const config = new DocumentBuilder()
    .setTitle('To-Do List')
    .setDescription('Projeto simulando lista de tarefas em Nest.js com TypeORM')
    .setContact('To-Do List',
      'https://github.com/Carlos-Bastos',
      'carlos.rbastoss@gmail.com')

    .setVersion('v1.0.0')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/swagger', app, document)
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors()
  await app.listen(process.env.PORT || 3000);
}
bootstrap()