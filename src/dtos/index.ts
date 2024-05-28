import { customer as _customer } from './customer';
import { permissions as _permissions } from './permissions';
import { role_permissions as _role_permissions } from './role_permissions';
import { roles as _roles } from './roles';
import { user_permissions as _user_permissions } from './user_permissions';
import { user_roles as _user_roles } from './user_roles';
import { users as _users } from './users';

export namespace PrismaModel {
  export class customer extends _customer {}
  export class permissions extends _permissions {}
  export class role_permissions extends _role_permissions {}
  export class roles extends _roles {}
  export class user_permissions extends _user_permissions {}
  export class user_roles extends _user_roles {}
  export class users extends _users {}

  export const extraModels = [
    customer,
    permissions,
    role_permissions,
    roles,
    user_permissions,
    user_roles,
    users,
  ];
}
