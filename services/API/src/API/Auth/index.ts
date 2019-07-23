import { Resolver, Query, Mutation, Arg, Authorized, Ctx, ObjectType, Field } from 'type-graphql';
import { ApolloError } from 'apollo-server-koa';
import { UserModel, User } from '../../Models/User';
import { Context } from '../Context';
import { MutationResponse } from '../Mutations';

@ObjectType({ implements: MutationResponse })
class LoginUserMutationResponse implements MutationResponse {
  success: boolean;

  @Field(type => String)
  token: Promise<string>;
}

@Resolver(of => User)
export default class AuthResolver {
  @Query(returns => Boolean)
  public async isAuthed(@Ctx() { user }: Context): Promise<boolean> {
    if (!user) return false;
    else return true;
  }

  @Query(returns => [User])
  public async users(@Arg('username', { nullable: true, defaultValue: '' }) username?: string) {
    const Users = await UserModel.find();
    return Users.filter(user => user.username.toLowerCase().includes(username.toLowerCase()));
  }

  @Mutation(returns => User)
  public async registerUser(@Arg('username') username: string, @Arg('password') password: string): Promise<User> {
    const User = await UserModel.create({ username, password });
    return User;
  }

  @Mutation(type => LoginUserMutationResponse, { description: 'Log User into API' })
  async loginUser(@Arg('username') username: string, @Arg('password') password: string): Promise<LoginUserMutationResponse> {
    const user = await UserModel.findOne({ username });
    if (!user) throw new ApolloError('User not found', 'INVALID_USER');
    return { success: true, token: user.generateToken(password) };
  }
}
