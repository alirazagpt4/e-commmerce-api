🛒 E-Commerce API

http://localhost:5000

{
  "message": "Welcome to the Ecommerce API"
}


📦 API Endpoints
👤 Users
✅ Register a User
POST /users/register

Description: Register a new user.

Request Body:

{
  "name": "string",
  "email": "string",
  "password": "string"
}


Response:

{
  "message": "User registered successfully",
  "user": {
    "id": "string",
    "name": "string",
    "email": "string"
  }
}


🔐 Login a User
POST /users/login

Description: Authenticate a user and provide a token.

Request Body:

{
  "email": "string",
  "password": "string"
}


Response:

{
  "message": "Login successful",
  "token": "string"
}



👤 Get User Profile
GET /users/profile
Middleware: authentication

Response:

{
  "id": "string",
  "name": "string",
  "email": "string",
  "createdAt": "string"
}


🛍️ Products
➕ Create a Product
POST /products
Middleware: upload.single('imageUrl'), authentication

Request Body:

Form-data (for file upload)

| Field       | Type   | Required |
| ----------- | ------ | -------- |
| name        | string |          |
| description | string |          |
| price       | number |          |
| category    | string |          |
| imageUrl    | file   |          |

Response:

{
  "message": "Product created successfully",
  "product": {
    "id": "string",
    "name": "string",
    "description": "string",
    "price": "number",
    "category": "string",
    "imageUrl": "string"
  }
}



📥 Get All Products
GET /products

Response:

[
  {
    "id": "string",
    "name": "string",
    "description": "string",
    "price": "number",
    "category": "string",
    "imageUrl": "string"
  }
]



📄 Get a Single Product
GET /products/:id

Response:

{
  "id": "string",
  "name": "string",
  "description": "string",
  "price": "number",
  "category": "string",
  "imageUrl": "string"
}


❌ Delete a Product
DELETE /products/:id
Middleware: authentication

Response:

{
  "message": "Product deleted successfully"
}



✏️ Update a Product
PUT /products/:id
Middleware: upload.single('imageUrl'), authentication

Request Body:

Form-data

Response:

{
  "message": "Product updated successfully",
  "product": {
    "id": "string",
    "name": "string",
    "description": "string",
    "price": "number",
    "category": "string",
    "imageUrl": "string"
  }
}


📦 Orders
📝 Create an Order
POST /orders
Middleware: authentication

Request Body:

{
  "userId": "string",
  "products": [
    {
      "productId": "string",
      "quantity": "number"
    }
  ],
  "totalPrice": "number"
}


Response:

{
  "message": "Order created successfully",
  "order": {
    "id": "string",
    "userId": "string",
    "products": [
      {
        "productId": "string",
        "quantity": "number"
      }
    ],
    "totalPrice": "number",
    "status": "string"
  }
}


📋 Get Orders by User ID
GET /orders/:userId
Middleware: authentication

Response:

[
  {
    "id": "string",
    "userId": "string",
    "products": [
      {
        "productId": "string",
        "quantity": "number"
      }
    ],
    "totalPrice": "number",
    "status": "string"
  }
]


PATCH /orders/:id
Middleware: authentication, isAdmin

Request Body:

{
  "status": "string"
}

Response:

{
  "message": "Order status updated successfully",
  "order": {
    "id": "string",
    "status": "string"
  }
}

.................................................................................................

🛒 Coming Soon
Cart System API

Payment Integration (e.g., Stripe)

.................................................................................................


