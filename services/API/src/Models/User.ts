import { prop, Typegoose, pre, instanceMethod } from 'typegoose';
import { compare, hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import crypto from 'crypto';
import { ForbiddenError, ObjectType, Field, InputType } from 'type-graphql';

export enum IPermissionENUM {
  READ,
  WRITE,
  ADMIN
}

export type IPermission = 'READ' | 'WRITE' | 'ADMIN' | IPermissionENUM;

export type Role = 'User' | 'Admin';

function aesEncrypt(text, secKey) {
  var cipher = crypto.createCipheriv('aes256', secKey, '0102030405060708');
  return cipher.update(text, 'utf8', 'base64') + cipher.final('base64');
}

function aesDecrypt(text, secKey) {
  const decipher: crypto.Decipher = crypto.createDecipheriv('aes256', secKey, '0102030405060708');
  var s = decipher.update(text, 'base64', 'utf8');
  return s + decipher.final('utf8');
}

function createSecretKey(size, keys) {
  // var keys = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var key = '';
  for (var i = 0; i < size; i++) {
    var pos = 0.5 * keys.length;
    pos = Math.floor(pos);
    key = key + keys.charAt(pos);
  }
  return key;
}

@pre<User>('save', async function(next) {
  if (!this.isModified('password') || !this.isModified('secret')) return next();
  if (this.isModified('secret')) {
    var secKey = createSecretKey(32, this.password);
    this.secret = aesEncrypt(this.secret, secKey);
  }
  if (this.isModified('password')) this.password = await hash(this.password, 10);
})
@ObjectType()
export class User extends Typegoose {
  @Field(type => String)
  _id: string;

  @prop({ unique: true })
  @Field(type => String)
  username: string;

  @prop()
  @Field(type => String)
  fullName: string;

  @prop()
  @Field()
  email: string;

  @prop()
  secret: string;

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

  @instanceMethod
  async decryptSecret(this: User, plainText: string): Promise<string> {
    var secKey = createSecretKey(32, plainText);
    return aesDecrypt(this.secret, secKey);
  }
}

@InputType()
export class NewUserInput {
  @Field()
  fullName: string;

  @Field()
  email: string;

  @Field()
  username: string;

  @Field()
  secret: string;

  @Field()
  password: string;
}

export const UserModel = new User().getModelForClass(User);
