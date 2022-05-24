# Lib-Man

## This project uses microservice architecture

1.Users service

```txt
Tech: NodeJS, Sequelize, MongoDB, Mongoose
Features:
1. CRUD Users (User type: superadmin, employeer, employee)
superamin:
a. User management
b. Suspend, deactivate, activate, and delete employer and employee
c. Allow creation of user and job
d. Receive any report from user
employee:
a. Search, be friend, send message other user
b. Create an article and event
employeer:
a. Features from employee
b. Post a job
c. Manage applicant (CRUD, ban applicant)
d. Video conference management

2. User Authentication using 2 factor authentication
Password and Security code checking

3. Account activation
Sending email

4. Suspend and deactive user
```

2.Companies service : Golang, gin, gorm, PostgreSQL 
3.Applications service : Python, flask, SqlAlchemy, PostgreSQL 
4.Jobs service : Golang, revel, PostgreSQL