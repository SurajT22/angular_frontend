import { UserServerPermissionEnum } from '../../shared/models/entities/user/enums/user-server-permission.enum';
import { NavbarItem } from '../../shared/models/view/navbar-item.model';

export const LAYOUT_NAVBAR = [
  new NavbarItem({
    routerLink: [],
    label: 'Client Registration',
    iconClass: 'lni lni-customer',
    children: [
      new NavbarItem({
        routerLink: ['/registrationaccess'],
        label: 'Registration Access',
        iconClass: '',
        isFirstLevel: false,
        children: [],
        permission: UserServerPermissionEnum.NONE,
      }),
      new NavbarItem({
        routerLink: ['/registrationdetails'],
        label: 'Registration Details',
        iconClass: '',
        isFirstLevel: false,
        children: [],
        permission: UserServerPermissionEnum.NONE,
      })
    ],
    permission: UserServerPermissionEnum.NONE,
  }),
  new NavbarItem({
    routerLink: [],
    label: 'User Management',
    iconClass: 'lni lni-users',
    children: [
      new NavbarItem({
        routerLink: ['/useraccount'],
        label: 'User Account',
        iconClass: '',
        isFirstLevel: false,
        children: [],
        permission: UserServerPermissionEnum.NONE,
      }),
      new NavbarItem({
        routerLink: ['/userserverrights'],
        label: 'User Server Rights',
        iconClass: '',
        isFirstLevel: false,
        children: [],
        permission: UserServerPermissionEnum.NONE,
      }),
      new NavbarItem({
        routerLink: ['/userclientrights'],
        label: 'User Client Rights',
        iconClass: '',
        isFirstLevel: false,
        children: [],
        permission: UserServerPermissionEnum.NONE,
      }),
      new NavbarItem({
        routerLink: ['/securitypolicy'],
        label: 'Security Policy',
        iconClass: '',
        isFirstLevel: false,
        children: [],
        permission: UserServerPermissionEnum.NONE,
      }),    
    ],
  }),
  new NavbarItem({
    routerLink: [],
    label: 'Settings',
    iconClass: 'lni lni-cogs',
    children: [
      new NavbarItem({
        routerLink: ['/serversettings'],
        label: 'Server Settings',
        iconClass: '',
        isFirstLevel: false,
        children: [],
        permission: UserServerPermissionEnum.NONE,
      }),
      new NavbarItem({
        routerLink: ['/systemsettings'],
        label: 'System Settings',
        iconClass: '',
        isFirstLevel: false,
        children: [],
        permission: UserServerPermissionEnum.NONE,
      })
    ]
  }),
  new NavbarItem({
    routerLink: [],
    label: 'Report',
    iconClass: 'lni lni-postcard',
    children: [
      new NavbarItem({
        routerLink: ['/auditreport'],
        label: 'Audit Report',
        iconClass: '',
        isFirstLevel: false,
        children: [],
        permission: UserServerPermissionEnum.NONE,
      }),
      new NavbarItem({
        routerLink: ['/productionreport'],
        label: 'Production Report',
        iconClass: '',
        isFirstLevel: false,
        children: [],
        permission: UserServerPermissionEnum.NONE,
      }),
    ]
  }),
  new NavbarItem({
    routerLink: ['/help'],
    label: 'Help',
    iconClass: 'mdi mdi-help-circle-outline',
    children: [],
    permission: UserServerPermissionEnum.NONE,
  })
];