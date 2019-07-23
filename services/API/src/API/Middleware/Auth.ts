import { MiddlewareFn, ForbiddenError } from 'type-graphql';
import { Context } from '../Context';

/**
 * Auth Middleware
 * Checks if vCSA or PS exists on Context
 */
export const AuthInterceptor: MiddlewareFn<Context> = async ({ args, context }, next) => {
  if (!context.user) throw new ForbiddenError();
  const result = await next();
  return result;
};