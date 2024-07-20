# Capstone: Backend - Restaurant Reservation System 


## Table of Contents
- [Project Overview](#project-overview)
- [Installation](#installation)
- [Running the Server](#running-the-server)
- [Testing](#testing)
- [Environment Variables](#environment-variables)
- [Database](#database)
- [API Endpoints](#api-endpoints)

## Project Overview
The backend of the Restaurant Reservation System is built with Node.js and Express. It provides RESTful API endpoints for managing reservations and tables.

## Installation

1. Navigate to the `back-end` directory:
    ```sh
    cd back-end
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Running the Server

1. Start the server:
    ```sh
    npm start
    ```

2. The server will be running on `http://localhost:5001`.

## Testing

1. Run the tests:
    ```sh
    npm test
    ```

2. For specific tests, use:
    ```sh
    npm run test:backend
    ```

## Environment Variables

Create a `.env` file in the `back-end` directory and add the following environment variables:

```sh
DATABASE_URL=your_database_url
PORT=5001
NODE_ENV=development
```

## Database

1. Run database migrations:
    ```sh
    npx knex migrate:latest
    ```

2. Seed the database:
    ```sh
    npx knex seed:run
    ```

## API Endpoints

### Reservations

- `GET /reservations`
  - Description: Get a list of all reservations.
  - Response: `200 OK` with a JSON array of reservations.
  
- `POST /reservations`
  - Description: Create a new reservation.
  - Request Body: JSON object with reservation details.
  - Response: `201 Created` with the created reservation object.

- `GET /reservations/:reservation_id`
  - Description: Get details of a specific reservation by ID.
  - Response: `200 OK` with the reservation object.

- `PUT /reservations/:reservation_id`
  - Description: Update a specific reservation by ID.
  - Request Body: JSON object with updated reservation details.
  - Response: `200 OK` with the updated reservation object.

- `DELETE /reservations/:reservation_id`
  - Description: Delete a specific reservation by ID.
  - Response: `204 No Content`.

### Tables

- `GET /tables`
  - Description: Get a list of all tables.
  - Response: `200 OK` with a JSON array of tables.

- `POST /tables`
  - Description: Create a new table.
  - Request Body: JSON object with table details.
  - Response: `201 Created` with the created table object.

- `GET /tables/:table_id`
  - Description: Get details of a specific table by ID.
  - Response: `200 OK` with the table object.

- `PUT /tables/:table_id`
  - Description: Update a specific table by ID.
  - Request Body: JSON object with updated table details.
  - Response: `200 OK` with the updated table object.

- `DELETE /tables/:table_id`
  - Description: Delete a specific table by ID.
  - Response: `204 No Content`.

See [../README.md](../README.md) for detailed instructions.
