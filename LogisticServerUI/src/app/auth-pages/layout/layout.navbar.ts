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
        permission: UserServerPermissionEnum.CLIENT_REGISTRATION,
      }),
      new NavbarItem({
        routerLink: ['/registrationdetails'],
        label: 'Registration Details',
        iconClass: '',
        isFirstLevel: false,
        children: [],
        permission: UserServerPermissionEnum.CLIENT_REGISTRATION,
      })
    ]
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
        permission: UserServerPermissionEnum.USER_MANAGEMENT,
      }),
      new NavbarItem({
        routerLink: ['/userserverrights'],
        label: 'User Server Rights',
        iconClass: '',
        isFirstLevel: false,
        children: [],
        permission: UserServerPermissionEnum.USER_MANAGEMENT,
      }),
      new NavbarItem({
        routerLink: ['/userclientrights'],
        label: 'User Client Rights',
        iconClass: '',
        isFirstLevel: false,
        children: [],
        permission: UserServerPermissionEnum.USER_MANAGEMENT,
      }),
      new NavbarItem({
        routerLink: ['/securitypolicy'],
        label: 'Security Policy',
        iconClass: '',
        isFirstLevel: false,
        children: [],
        permission: UserServerPermissionEnum.USER_MANAGEMENT,
      }),
    ]
  }),
  new NavbarItem({
    routerLink: ['/productdetials'],
    label: 'Product Details',
    iconClass: 'mdi mdi-clipboard-text-play-outline',
    children: [],
    permission: UserServerPermissionEnum.SERVER_SETTINGS,
  }),
  new NavbarItem({
    routerLink: ['/batchdetails'],
    label: 'Batch Details',
    iconClass: 'lni lni-package',
    children: [],
    permission: UserServerPermissionEnum.BATCH_DETAILS,
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
        permission: UserServerPermissionEnum.SERVER_SETTINGS,
      }),
      new NavbarItem({
        routerLink: ['/systemsettings'],
        label: 'System Settings',
        iconClass: '',
        isFirstLevel: false,
        level: 2,
        children: [
          new NavbarItem({
            routerLink: ['/systemsettings'],
            label: 'System Settings',
            iconClass: '',
            level: 3,
            isFirstLevel: false,
            children: [],
            permission: UserServerPermissionEnum.SYSTEM_SETTINGS
          }),
          new NavbarItem({
            routerLink: ['/systemsettings/moresettings'],
            label: 'More Settings',
            iconClass: '',
            level: 3,
            isFirstLevel: false,
            children: [
              new NavbarItem({
                routerLink: ['/moresettings/mastersettings'],
                label: 'Master Settings',
                iconClass: '',
                level: 4,
                isFirstLevel: false,
                children: [],
                permission: UserServerPermissionEnum.CLIENT_REGISTRATION
              }),
              new NavbarItem({
                routerLink: ['/moresettings/emailconfiguration'],
                label: 'Email Configuration',
                iconClass: '',
                level: 4,
                isFirstLevel: false,
                children: [],
                permission: UserServerPermissionEnum.SYSTEM_SETTINGS
              }),
              new NavbarItem({
                routerLink: ['/moresettings/composeemail'],
                label: 'Compose Email',
                iconClass: '',
                level: 4,
                isFirstLevel: false,
                children: [],
                permission: UserServerPermissionEnum.SYSTEM_SETTINGS
              }),
            ],
            permission: UserServerPermissionEnum.SYSTEM_SETTINGS
          }),
        ],
        permission: UserServerPermissionEnum.SYSTEM_SETTINGS,
      }),

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
        permission: UserServerPermissionEnum.AUDIT_REPORT,
      }),
      new NavbarItem({
        routerLink: [],
        label: 'Production',
        iconClass: '',
        isFirstLevel: false,
        level: 2,
        children: [
          new NavbarItem({
            routerLink: ['/production/productionreport'],
            label: 'Production Report',
            iconClass: '',
            level: 3,
            isFirstLevel: false,
            children: [],
            permission: UserServerPermissionEnum.PRODUCTION_REPORT
          }),
          new NavbarItem({
            routerLink: ['/production/batchinfo'],
            label: 'Batch Info',
            iconClass: '',
            level: 3,
            isFirstLevel: false,
            children: [],
            permission: UserServerPermissionEnum.PRODUCTION_REPORT
          }),
          new NavbarItem({
            routerLink: ['/production/reconcilation'],
            label: 'Reconcilation',
            iconClass: '',
            level: 3,
            isFirstLevel: false,
            children: [],
            permission: UserServerPermissionEnum.PRODUCTION_REPORT
          }),
          new NavbarItem({
            routerLink: ['/production/reportsettings'],
            label: 'Report Settings',
            iconClass: '',
            level: 3,
            isFirstLevel: false,
            children: [],
            permission: UserServerPermissionEnum.PRODUCTION_REPORT
          })
        ]
      })
    ]
  }),
  new NavbarItem({
    routerLink: ['/help'],
    label: 'Help',
    iconClass: 'mdi mdi-help-circle-outline',
    children: [],
    permission: UserServerPermissionEnum.HELP,
  })
];