import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [PrismaModule, OrdersModule,],
  controllers: [AppController],
  providers: [AppService,PrismaService],
})
export class AppModule {}
