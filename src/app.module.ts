import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { HelloWorldModule } from './modules/hello-world/hello-world.module';
import { ExampleModule } from './modules/example/example.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
      csrfPrevention: false,
    }),
    HelloWorldModule,
    ExampleModule,
  ],
  providers: [],
})
export class AppModule {}
