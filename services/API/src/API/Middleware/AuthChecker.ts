// API/src/API/Middleware/AuthChecker.ts
import { AuthChecker } from 'type-graphql';
import { Context } from '../Context';

export const authChecker: AuthChecker<Context> = ({ root, args, context: { user }, info }, roles) => {
  if (roles.length === 0) return user !== undefined;

  if (!user) return false;
  if (user.role.some(role => roles.includes(role))) return true;

  // no roles matched, restrict access
  return false;
};
