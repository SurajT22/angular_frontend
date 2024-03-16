import { StatusEnum } from '../../common/enums/status.enum';
import { UserRoleTypeEnum } from './enums/user-role-type.enum';

export class User {
  UserName!:string;
  FullName!:string;
  UserType!:UserRoleTypeEnum;
  Department!:string;
  UserStatus!:StatusEnum;
  Password!:string;
  Remark!:string;
  EmailID!:string;
}
