import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Example {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
  @Field(() => Int, { nullable: true })
  number1?: number;
}
