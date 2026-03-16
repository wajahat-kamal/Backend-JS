import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductsService } from './products/products.service';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';

@Module({
  imports: [],
  controllers: [AppController, UserController, ProductController],
  providers: [AppService, ProductsService, ProductService],
})
export class AppModule {}
