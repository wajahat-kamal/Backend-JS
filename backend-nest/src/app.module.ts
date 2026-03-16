import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductsService } from './products/products.service';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
