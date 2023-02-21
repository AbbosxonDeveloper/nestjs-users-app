import { Module } from '@nestjs/common';
import { UserModule } from './module/user/user.module';
import { AuthModule } from './module/auth/auth.module';

@Module({
  imports: [UserModule, AuthModule]
})
export class AppModule {}
