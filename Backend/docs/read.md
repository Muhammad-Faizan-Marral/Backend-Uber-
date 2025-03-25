# /user/register Endpoint Documentation

## Description
This endpoint registers a new user by accepting a JSON payload with user details and returns a JWT token upon successful registration.

## Request Data
- **fullname**: Object
  - **firstname** (required): String (minimum 3 characters)
  - **lastname** (optional): String (if provided, minimum 3 characters)
- **email** (required): Valid email string (minimum 5 characters)
- **password** (required): String (minimum 6 characters)

### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePass123"
}
```

## Responses
- **201 Created**: Registration successful. Returns a JSON with a JWT token and the user details.
- **400 Bad Request**: Validation error, missing fields, or invalid data.
- **500 Internal Server Error**: In case of a server-side error.
### Example Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1NiIsImV4cCI6MTYwOTIzOTIwMH0.abc123def456ghi789",
  "user": {
    "id": "123456",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```