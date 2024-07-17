import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');

  // setup swagger
  const config = new DocumentBuilder()
    .setTitle('Order service  API')
    .setDescription('API documentation for Order service app')
    .setVersion('1.0')
    .addTag('Order service')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // handle all user input validation globally
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  const port = Number(process.env.PORT);
  console.log('Application started at port' + port);

  await app.listen(port);
}
bootstrap();
