import { User } from '../../../shared/models/entities/user/user.model';
import { LoginStatusEnum } from './enums/login-status.enum';
import { UserServerPermission } from '../../../shared/models/entities/user/user-server-permission.model';

export class LoginResponse {
  loginStatus!: LoginStatusEnum;
  UserDetails!: User;
  ServerRights!: UserServerPermission;
  TokenID!: string;
  TokenExpiry!: string;
  AutoLogoutDuration!: string;
  AutoLogout!: boolean;
  Master!: boolean;
  FirstLogin!: boolean;
  message!: string;
}
