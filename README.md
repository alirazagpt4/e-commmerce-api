# e-commerce-api

Creating an e-commerce API using Node.js, Express.js, and MongoDB for managing users, products, and orders.

## Base URL Entry Point

Base URL: `http://localhost:5000`

### JSON Response Example
```json
{
    "message": "Welcome to the Ecommerce API"
}


---

## API Endpoints

### Users

#### Register a User
**POST** `/users/register`  
**Description:** Register a new user.  
**Request Body:**  
```json
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


Login a User
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


Get User Profile GET /users/profile
Description: Retrieve the profile of the authenticated user.
Middleware: authentication
Response

{
    "id": "string",
    "name": "string",
    "email": "string",
    "createdAt": "string"
}


### Products Api

Create a Product:

POST `/products`

Middleware: `upload.single('imageUrl')`, `authentication` 

Request Body : 
json
{
    "name": "string",
    "description": "string",
    "price": "number",
    "category": "string",
    "imageUrl": "file"
}

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

Get All Products
GET /products
Description: Retrieve all products.
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

Get a Single Product
GET /products/:id
Description: Retrieve details of a single product by its ID.
Response:

{
    "id": "string",
    "name": "string",
    "description": "string",
    "price": "number",
    "category": "string",
    "imageUrl": "string"
}


Delete a Product
DELETE /products/:id
Description: Delete a product by its ID.
Middleware: authentication
Response:
{
    "message": "Product deleted successfully"
}


Update a Product
PUT /products/:id
Description: Update an existing product by its ID.
Middleware: upload.single('imageUrl'), authentication
Request Body:
{
    "name": "string",
    "description": "string",
    "price": "number",
    "category": "string",
    "imageUrl": "file"
}

GitHub Copilot
Here is the documentation for your README.md file based on the provided product.routes.js:

Response:

Get All Products
GET /products
Description: Retrieve all products.
Response:

Get a Single Product
GET /products/:id
Description: Retrieve details of a single product by its ID.
Response:

Delete a Product
DELETE /products/:id
Description: Delete a product by its ID.
Middleware: authentication
Response:

Update a Product
PUT /products/:id
Description: Update an existing product by its ID.
Middleware: upload.single('imageUrl'), authentication
Request Body:

Response:

json
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


### Orders

Create an Order

POST `/orders`  

Middleware: `authentication` 

Request Body:

json
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


Get Orders by User ID
GET /orders/:userId
Description: Retrieve all orders for a specific user.
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


Update Order Status
PATCH /orders/:id
Description: Update the status of an order.
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

------------------------------------------------------------

for future creating the cart system and payment integration
api .....


