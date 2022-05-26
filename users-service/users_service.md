# User Service

## Attributes

### Users

1. firstname:string
2. lastname:string
3. companyName:string
4. bio:string
5. address:string
6. username:string
7. email:string
8. password:string
9. role:string
10. skills:Skills
11. experiences:Experiences
12. status:string
13. accountStatus:AccountStatus

### AccountStatus

1. status:string
2. created:date
3. lastLoggedIn:date

### Skills

1. name:string
2. tags (personName: []string)

### Experiences

1. companyName:string
2. role:string
3. type:string
4. period:string

### verificationCodes

1. userId:string
2. verificationCode
3. Created
4. Expired

### resetTokens

1. userId:string
2. resetToken:string
3. created:date
4. expired:date

Notes: OAuth 2.0 and 2FA Authentication are comming soon
