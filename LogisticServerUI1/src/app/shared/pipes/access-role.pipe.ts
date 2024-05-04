import { Pipe, PipeTransform, inject } from '@angular/core';
import { UserRoleTypeEnum } from '../models/entities/user/enums/user-role-type.enum';
import { AuthService } from '../../core/services/auth.service';

@Pipe({
  name: 'accessRole',
  standalone: true,
})
export class AccessRolePipe implements PipeTransform {
  authService = inject(AuthService);

  transform(userRoleTypeEnum: UserRoleTypeEnum): boolean {
    return userRoleTypeEnum > this.authService.getUserRoleType();
  }
}
