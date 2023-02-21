import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {ValidationPipe} from '@nestjs/common'
import { AppModule } from './app.module';
import { Filter } from './filter/custom.exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalFilters(new Filter())

  const config = new DocumentBuilder()
    .setTitle('Auth App')
    .setDescription('Auth App for users NestJs')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();