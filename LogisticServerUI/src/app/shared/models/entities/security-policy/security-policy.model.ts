export class SecurityPolicy{
    PasswordLength !: string;
    ExpiryDays !: string;
    UserDays !: string;
    LockoutAttempts !: string;
    DuplicatePassword !:string;
    UppercaseLetters !: string;
    Numbers !: string;
    Symbols !: string;
    AutoLogoutDuration !:string;
    AutoLogout !:string;
}