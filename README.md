# Authentication App Frontend

This repository contains a simple static web page that interacts with a FastAPI backend to demonstrate user authentication functionalities. The page allows users to create contracts, register, login, retrieve user information, and delete contracts.

## Features

- **Create Contract**: Allows creating a new contract by specifying an application name. A unique contract key is generated for each contract.
- **Register**: Enables users to register by providing a contract key, username, first name, last name, and password.
- **Login**: Allows users to log in using their username, password, and application name.
- **Get User Info**: Retrieves a list of all registered users under a specified contract key.
- **Delete Contract**: Deletes a specified contract and all associated users.

## Technologies Used

- HTML
- CSS
- JavaScript

## Getting Started

### Prerequisites

- Web browser (e.g., Google Chrome, Mozilla Firefox)


## Usage

### Create Contract

1. Go to the "Create Contract" section.
2. Enter the application name.
3. Click on "Create Contract".
4. The result, including the contract key, will be displayed below the form.

### Register

1. Go to the "Register" section.
2. Enter the contract key, username, first name, last name, and password.
3. Click on "Register".
4. The registration result will be displayed below the form.

### Login

1. Go to the "Login" section.
2. Enter the application name, username, and password.
3. Click on "Login".
4. The login result, including the access token and refresh token, will be displayed below the form.

### Get User Info

1. Go to the "User Info" section.
2. Enter the contract key.
3. Click on "Get All Users".
4. The list of all users under the specified contract will be displayed below the form.

### Delete Contract

1. Go to the "Delete Contract" section.
2. Enter the contract key.
3. Click on "Delete Contract".
4. The result of the deletion will be displayed below the form.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have any suggestions or find any bugs.