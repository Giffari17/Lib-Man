# Lib-Man

## tech stack
```
This project uses microservice architecture, with :
Frontend: React
Backend: Golang and Python
DB: PostgreSQL and MongoDB (User)
```

# Description
```
Minimal Features
1. CRUD User
2. CRUD Book
3. CRUD Publisher
4. CRUD Author

User Role
1. Superadmin
It can invite, confirm, block, and delete admin
2. Admin
It can block and delete customer
3. Customer
Nothing superpower
```

# API_Docs

### POST /customers/register
> Register Customer

**Request Headers**
```
not needed
```
**Request Params**
```
not needed
```
**Request Body**
```json
{
    "firstName": "libman",
    "lastName": "library",
    "email": "libman@mail.com",
    "address": "Jakarta",
    "phoneNumber": "081111111",
}
```
**Response (201 - Created)**
```json
{
    "message": ""
}
```
**Response (400 - Bad Request)**
```json
{
    "message": ""
}
```
**Response (400 - Bad Request)**
```json
{
    "message": ""
}
```
**Response (400 - Bad Request)**
```json
{
    "message": ""
}
```
**Response (400 - Bad Request)**
```json
{
    "message": ""
}
```
**Response (400 - Bad Request)**
```json
{
    "message": ""
}
```
**Response (500 Internal Server Error)**
```json
{
    "message": "Internal server error"
}
```

## POST /customers/confirm
> Confirm Customer

**Request Headers**
```
not needed
```
**Request Params**
```json
{
    "invitation_token": "asdxcjsndkasdnaksd123sd"
}
```
**Request Body**
```json
{
    "password": "12345",
}
```
**Response (201 - Created)**
```json
{
    "message": ""
}
```
**Response (400 - Bad Request)**
```json
{
    "message": ""
}
```
**Response (400 - Bad Request)**
```json
{
    "message": ""
}
```
**Response (400 - Bad Request)**
```json
{
    "message": ""
}
```
**Response (400 - Bad Request)**
```json
{
    "message": ""
}
```
**Response (400 - Bad Request)**
```json
{
    "message": ""
}
```
**Response (500 Internal Server Error)**
```json
{
    "message": ""
}
```

## POST /admins/invite
> Invite admin

**Request Headers**
```
not needed
```
**Request Params**
```
not needed
```
**Request Body**
```json
{
    "email": "libman@mail.com",
}
```
**Response (201 - Created)**
```json
{
    "id": 1,
    "username": "admin#123",
    "email": "admmin1@mail.com",
    "role": "admin",
    "address": "",
    "phoneNumber": "",
    "status": "Inactivated"
}
```
**Response (400 - Bad Request)**
```json
{
    "message": ""
}
```
**Response (400 - Bad Request)**
```json
{
    "message": ""
}
```
**Response (400 - Bad Request)**
```json
{
    "message": ""
}
```
**Response (400 - Bad Request)**
```json
{
    "message": ""
}
```
**Response (400 - Bad Request)**
```json
{
    "message": ""
}
```
**Response (500 Internal Server Error)**
```json
{
    "message": ""
}
```

## POST /admins/activate
> Activate Admin

## POST /admins/confirm 
> Confirm Admin

## POST /users/login
> Login user

## POST /books
> Add Book

## GET /books
> Read Book

## GET /books/:id
> Read Book Detail

## PUT /books/:id
> Update Book

## DELETE /books/:id
> Delete Book

## POST /authors
> Add Author

## GET /authors
> Read Author

## GET /authors/:id
> Read Author Detail

## PUT /authors/:id
> Update Author

## DELETE /authors/:id
> Delete Author

## POST /authors
> Add Author

## GET /publishers
> Read publisher

## GET /publishers/:id
> Read publisher Detail

## PUT /publishers/:id
> Update publisher

## DELETE /publishers/:id
> Delete publisher

## GET books/leaderboard
> Leaderboard Book

## GET /borrows
> Read borrow

## PUT /borrows/:id
> Update borrow

## DELETE /borrows/:id
> Delete borrow

# Website End Points
```
Global
. Register Page
. Login Page

Superadmin
. Admin Management Page
. Author Management Page
. Publisher Management Page

Admin
. User Management Page
. Book Management Page

Customer
. Book list Page
. Book Detail Info Page
. My Borrow Page
. Wishlist Page
. Book Leaderboard Page
. Author List Page
. Author Detail Info Page
. Publisher List Page
. Publisher Detail Info Page
```