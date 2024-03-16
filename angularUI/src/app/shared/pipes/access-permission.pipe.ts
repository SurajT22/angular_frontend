import { Pipe, PipeTransform, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { UserServerPermissionEnum } from '../models/entities/user/enums/user-server-permission.enum';

@Pipe({
  name: 'accessPermission',
  standalone: true,
})
export class AccessPermissionPipe implements PipeTransform {
  authService = inject(AuthService);
  transform(permissionType: UserServerPermissionEnum): boolean {
    return this.authService.hasPermission(permissionType);
  }
}
