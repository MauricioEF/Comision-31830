import { Module, MiddlewareConsumer, RequestMethod} from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/users.schema';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { InfoMiddleware } from './middlewares/infoMiddleware';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: User.name,
      schema: UserSchema
    }
  ]), ConfigModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {
  configure(consumer: MiddlewareConsumer){
    consumer.apply(InfoMiddleware).forRoutes(UsersController)
  }
}
