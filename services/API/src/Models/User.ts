import { prop, Typegoose, pre, instanceMethod, arrayProp, Ref } from 'typegoose';
import { compare, hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { ForbiddenError, ObjectType, Field, createUnionType } from 'type-graphql';

export enum IPermissionENUM {
  READ,
  WRITE,
  ADMIN
}

export type IPermission = 'READ' | 'WRITE' | 'ADMIN' | IPermissionENUM;

export type Role = 'User' | 'Admin';

@pre<User>('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await hash(this.password, 10);
})
@ObjectType()
export class User extends Typegoose {
  @Field(type => String)
  _id: string;

  @prop({ unique: true })
  @Field(type => String)
  username: string;

  @prop()
  password: string;

  @prop({ default: ['User'] })
  role: Role[];

  @instanceMethod
  async generateToken(this: User, plainText: string): Promise<string> {
    const valid = await compare(plainText, this.password);
    if (!valid) throw new ForbiddenError();
    return sign({ id: this._id }, 'SECRET', {
      expiresIn: '60d'
    });
  }
}

export const UserModel = new User().getModelForClass(User);
