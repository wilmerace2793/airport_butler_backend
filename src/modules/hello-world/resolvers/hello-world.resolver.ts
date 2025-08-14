import { Query, Resolver } from '@nestjs/graphql';
import { HelloWorldService } from '../services/hello-world.service';

@Resolver()
export class HelloWorldResolver {
  constructor(private readonly helloWorldService: HelloWorldService) {}

  @Query(() => String)
  getHello(): string {
    return this.helloWorldService.getHello();
  }
}
