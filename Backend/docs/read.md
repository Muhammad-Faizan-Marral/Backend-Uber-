# API Documentation

## User Endpoints

### Register User
- **Endpoint:** POST /user/register
- **Description:** Registers a new user by accepting a JSON payload with user details and returns a JWT token upon successful registration.
- **Request Data:**
  - **fullname**: Object
    - **firstname** (required): String (minimum 3 characters)
    - **lastname** (optional): String (if provided, minimum 3 characters)
  - **email** (required): Valid email string (minimum 5 characters)
  - **password** (required): String (minimum 6 characters)
- **Example Request:**
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
- **Responses:**
  - **201 Created**: Registration successful. Returns a JSON with a JWT token and the user details.
  - **400 Bad Request**: Validation error, missing fields, or invalid data.
  - **500 Internal Server Error**: In case of a server-side error.
- **Example Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
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

### Login User
- **Endpoint:** POST /user/login
- **Description:** Validates email and password before authentication.
- **Request Data:**
  - **email** (required): Valid email string
  - **password** (required): String (minimum 6 characters)
- **Responses:**
  - **200 OK**: Login successful. Returns a JWT token and user details.
  - **401 Unauthorized**: Invalid credentials.
  - **400 Bad Request**: Validation error.
  - **500 Internal Server Error**: In case of a server-side error.

### Profile User
- **Endpoint:** GET /user/profile
- **Description:** Retrieves the profile information of the authenticated user.
- **Access:** Private
- **Responses:**
  - **200 OK**: Returns user profile details.
  - **401 Unauthorized**: If the user is not authenticated.

### Logout User
- **Endpoint:** GET /user/logout
- **Description:** Logs out the user by clearing the token and invalidating the session.
- **Access:** Private
- **Responses:**
  - **200 OK**: Logout successful.
  - **401 Unauthorized**: If the user is not authenticated.

---

## Captain Endpoints

### Register Captain
- **Endpoint:** POST /captain/register
- **Description:** Registers a new captain by accepting details and vehicle information, then returns a JWT token upon successful registration.
- **Request Data:**
  - **fullname**: Object
    - **firstname** (required, min 3 characters)
    - **lastname** (optional, min 3 characters)
  - **email** (required): Valid email string
  - **password** (required): String (min 6 characters)
  - **vehicle**: Object
    - **color**: String (min 3 characters)
    - **plate**: String (min 3 characters)
    - **capacity**: Number (min 1)
    - **vehicleType**: String (car, motorcycle, or auto-rickshaw)
- **Example Request:**
```json
{
  "fullname": {
    "firstname": "Alice",
    "lastname": "Smith"
  },
  "email": "alice.smith@example.com",
  "password": "strongPassword",
  "vehicle": {
    "color": "Blue",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```
- **Responses:**
  - **201 Created**: Registration successful; returns a JWT token and captain details.
  - **Example Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "id": "captainId123",
    "fullname": {
      "firstname": "Alice",
      "lastname": "Smith"
    },
    "email": "alice.smith@example.com",
    "vehicle": {
      "color": "Blue",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```
  - **400 Bad Request**: Validation error or missing fields.
  - **500 Internal Server Error**: In case of a server-side error.

### Login Captain
- **Endpoint:** POST /captain/login
- **Description:** Authenticates a captain by validating email and password.
- **Request Data:**
  - **email** (required): Valid email string
  - **password** (required): String (minimum 6 characters)
- **Responses:**
  - **200 OK**: Login successful. Returns a JWT token and captain details.
  - **401 Unauthorized**: Invalid credentials.
  - **400 Bad Request**: Validation error.
  - **500 Internal Server Error**: In case of a server-side error.

### Profile Captain
- **Endpoint:** GET /captain/profile
- **Description:** Retrieves the profile information of the authenticated captain.
- **Access:** Private
- **Responses:**
  - **200 OK**: Returns captain profile details.
  - **401 Unauthorized**: If the captain is not authenticated.

### Logout Captain
- **Endpoint:** GET /captain/logout
- **Description:** Logs out the captain by clearing the token and invalidating the session.
- **Access:** Private
- **Responses:**
  - **200 OK**: Logout successful.
  - **401 Unauthorized**: If the captain is not authenticated.
