# User Service

## Attributes

### Users

1. firstname:string
2. lastname:string
3. companyName:string
4. bio:string
5. addressLstring
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

Notes: OAuth 2.0 and 2FA Authentication are comming soon
