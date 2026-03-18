import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [ProductModule, StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
