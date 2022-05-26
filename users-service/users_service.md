# User Service

## Attributes

### Users

1. firstname:string
2. lastname:string
3. bio:string
4. addressLstring
5. username:string
6. email:string
7. password:string
8. role:string
9. skills:Skills
10. experiences:Experiences
11. status:string
12. accountStatus:AccountStatus

### AccountStatus

1. name:string
2. lastLoggedIn:date

### Skills

1. name:string
2. tags (personName: []string)

### Experiences

1. companyName:string
2. role:string
3. type:string
4. period:string

Notes: OAuth 2.0 and 2FA Authentication are comming soon
