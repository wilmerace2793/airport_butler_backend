import { Module } from '@nestjs/common';
import { HelloWorldService } from './services/hello-world.service';
import { HelloWorldResolver } from './resolvers/hello-world.resolver';

@Module({
  providers: [HelloWorldService, HelloWorldResolver],
})
export class HelloWorldModule {}
