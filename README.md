# Tourism Backend with Node.js and MongoDB

![Tourism Backend](https://th.bing.com/th/id/R.81591856d04f990b48f851203949d70a?rik=ELLuYOZgjBSFpw&riu=http%3a%2f%2fwww.atlantisholding.at%2ffile%2f2014%2f08%2fTourism-1.jpg&ehk=rkbN8MWCLbH9NohsfhbP%2fd0jPx2m2RFB4jnLF1Qqz6Q%3d&risl=&pid=ImgRaw&r=0)

Welcome to the Tourism Backend repository! This project provides a robust backend solution for a tourism application, built using Node.js and MongoDB. The backend includes basic CRUD (Create, Read, Update, Delete) functionality to manage tourism-related data and robust authentication features for user security.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Authentication](#authentication)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Tourism Backend is a powerful Node.js application designed to support a tourism website or application. It leverages the capabilities of MongoDB to store and manage tourism-related data efficiently. The backend also includes essential CRUD operations to handle various data entities, ensuring seamless interactions with the frontend.

## Features

- **Basic CRUD Operations**: The backend offers basic CRUD functionalities to create, read, update, and delete data related to tourists, tours, reviews, and more.

- **Authentication**: Robust authentication features have been implemented, including user registration, login, password reset, access token generation, and refresh token management.

- **Secure APIs**: APIs are designed with security in mind, ensuring data privacy and protection against common vulnerabilities.

## Installation

To set up the Tourism Backend locally, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/Dappa88/TouristBackend.git
```

2. Navigate to the project directory:

```bash
cd tourism-backend
```

3. Install the required dependencies:

```bash
npm install
```

4. Configure the MongoDB connection settings in the `.env` file.

## Usage

To run the Tourism Backend, use the following command:

```bash
npm start
```

The backend server will start, and you'll be able to access the API endpoints from your application.

## Endpoints

The Tourism Backend provides a range of API endpoints to interact with the application data. Below are some of the endpoints:

- `GET /tourists`: Get all tourists.
- `GET /tourists/:id`: Get a specific tourist by ID.
- `POST /tourists`: Create a new tourist.
- `PUT /tourists/:id`: Update a tourist by ID.
- `DELETE /tourists/:id`: Delete a tourist by ID.

Similar endpoints are available for tours, reviews, and other data entities.

## Authentication

The authentication features of the Tourism Backend include:

- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: User login and access token generation.
- `POST /api/auth/refresh-token`: Create a new access token using a valid refresh token.
- `POST /api/auth/forgot-password`: Initiate the password reset process.
- `POST /api/auth/reset-password`: Complete the password reset with the token provided.

## Contributing

Contributions to the Tourism Backend are more than welcome! If you have ideas for improvements, new features, or bug fixes, feel free to submit a pull request. Let's collaborate to make this backend even better!

## License

This project is licensed under the [MIT License](LICENSE), allowing you to use the code freely with proper attribution.

Enjoy building amazing tourism applications with the Tourism Backend! 🌍🚀
