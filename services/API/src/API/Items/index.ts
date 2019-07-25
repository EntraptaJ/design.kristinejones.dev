// API/src/API/Items/index.tsx
import { Resolver, ObjectType, Field, Mutation, Arg, InputType } from 'type-graphql'

@ObjectType()
class Item {
  @Field()
  name: string
}

@InputType()
class ItemInput {
  @Field()
  name: string
}

@Resolver()
export default class ItemsResolver {
  @Mutation(returns => [Item])
  public async createItems(@Arg('items', type => [ItemInput]) input: ItemInput[]) {
    return input;
  }
}