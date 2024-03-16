export enum UserPermissionEnum {
  OPEN_FOR_ALL = -100000,
  NONE = 0,

  // #region Company 1-50
  COMPANY_READ = 1, //Company Read - Allows to read Company Master.
  COMPANY_CREATE = 2, //Company Create - Allows to create a new company in Company Master.
  COMPANY_UPDATE = 3, //Company Update - Allows to update details in Company Master.
  COMPANY_STATUS_CHANGE = 4, //Company Change Status - Allows to activate or deactivate the company.
  // #endregion

  // #region Plant 51-100
  PLANT_READ = 51, //Plant Read - Allows to read plant details.
  PLANT_CREATE = 52, //Plant Create - Allows to create new plant and add its details.
  PLANT_UPDATE = 53, //Plant Update - Allows to update details in existing plant.
  PLANT_STATUS_CHANGE = 54, //Plant Change Status - Allows to activate or deactivate the plant.
  // #endregion

  // #region User 101-150
  USER_READ = 101, //User Read - Allows to read User Master.
  USER_CREATE = 102, //User Create - Allows to create other user and assign role.
  USER_UPDATE = 103, //User Update - Allows to update user details and change its role.
  USER_STATUS_CHANGE = 104, //User Change Status - Allows to activate, deactivate or unlock the user.
  USER_RESET_PASSWORD = 105, //User Reset Password - Allows to reset password of other users.
  // #endregion

  // #region User Role 151-200,
  USER_ROLE_READ = 151, //User Read Role - Allows to read all user roles.
  USER_ROLE_CREATE = 152, //User Create Role - Allows to create new user role.
  USER_ROLE_UPDATE = 153, //User Update Role - Allows to update role.
  USER_ROLE_STATUS_CHANGE = 154, //User Change Role Status - Allows to activate or deactivate user role.
  // #endregion

  // #region User Account Settings 201-250
  USER_ACCOUNT_SETTINGS_READ = 201, //User Read Account Settings - Allows to read user account settings.
  USER_ACCOUNT_SETTINGS_CREATE = 202, //User Create Account - Allows to create new user.
  USER_ACCOUNT_SETTINGS_UPDATE = 203, //User Update Settings - Allows to update user account settings.
  // #endregion

  // #region Plant Unit 251-300
  PLANT_UNIT_READ = 251, //Plant Read - Allows to read plant unit details.
  PLANT_UNIT_CREATE = 252, //Plant Create - Allows to create new plant unit and add its details.
  PLANT_UNIT_UPDATE = 253, //Plant Update - Allows to update details in existing plant unit.
  PLANT_UNIT_STATUS_CHANGE = 254, //Plant Change Status - Allows to activate or deactivate the plant unit.
  // #endregion

  // #region Machine 301-350
  MACHINE_READ = 301, //Machine Read - Allows to read machine details.
  MACHINE_CREATE = 302, //Machine Create - Allows to create new machine and add its details.
  MACHINE_UPDATE = 303, //Machine Update - Allows to update details in existing machine.
  // #endregion
}
