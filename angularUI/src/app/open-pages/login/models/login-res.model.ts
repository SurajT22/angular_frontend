import { User } from '../../../shared/models/entities/user/user.model';
import { UserClientPermission } from '../../../shared/models/entities/user/user-client-permission.model';
import { LoginStatusEnum } from './enums/login-status.enum';

export class LoginResponse {
  loginStatus!: LoginStatusEnum;
  user!: User;
  permissions: UserClientPermission[] = [];
  token!: string;
  screenTimeOut!: number;
  message!: string;
}
