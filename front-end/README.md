# Capstone: Restaurant Reservation System Frontend


## Table of Contents
- [Project Overview](#project-overview)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Building the Application](#building-the-application)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Features](#features)

## Project Overview
The frontend of the Restaurant Reservation System is built with React. It provides a user interface for managing reservations and tables.

## Installation

1. Navigate to the `front-end` directory:
    ```sh
    cd front-end
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Running the Application

1. Start the development server:
    ```sh
    npm start
    ```

2. The application will be running on `http://localhost:3000`.

## Building the Application

1. Build the application for production:
    ```sh
    npm run build
    ```

2. The built files will be in the `build` directory.

## Environment Variables

Create a `.env` file in the `front-end` directory and add the following environment variables:

    
    REACT_APP_API_BASE_URL=http://localhost:5001
    
     
   
      
## Project Structure

`
front-end
├── public
│ ├── index.html
│ └── ...
├── src
│ ├── components
│ ├── utils
│ ├── App.js
│ ├── index.js
│ └── ...
├── package.json
└── README.md
`

## Features

- **Create and Manage Reservations**
  - Add, view, edit, and delete reservations.
  
- **Create and Manage Tables**
  - Add, view, edit, and delete tables.
  - Assign reservations to tables.

- **Search and Filter Reservations**
  - Search for reservations by phone number.
  - Filter reservations by date.

 
See [../README.md](../README.md) for detailed instructions.
