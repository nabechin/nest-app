import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TasksModule,
    MongooseModule.forRoot('mongodb://localhost/tasks', {
      user: 'taskuser',
      pass: 'taskpassword',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
