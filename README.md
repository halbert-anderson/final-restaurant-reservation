# Restaurant Reservation System

The Restaurant Reservation System is designed to streamline the process of booking tables and managing reservations in a restaurant. It allows staff to view, create, edit, and manage reservations and table statuses efficiently.

## Live Application

You can access the live application [here](https://final-restaurant-reservation-system.onrender.com/dashboard).

## API Documentation

### Base URL

- **Development:** `http://localhost:5001`
- **Production:** `https://final-restaurant-reservation-system-9mjb.onrender.com`

### Endpoints

#### Reservations

- **Get All Reservations**
  - **URL:** `/api/reservations`
  - **Method:** `GET`
  - **Description:** Retrieves all reservations.
  - **Response:**
    ```json
    {
      "data": [
        {
          "reservation_id": 1,
          "first_name": "John",
          "last_name": "Doe",
          "mobile_number": "1234567890",
          "reservation_date": "2024-07-16",
          "reservation_time": "19:00",
          "people": 4,
          "status": "booked"
        },
        ...
      ]
    }
    ```

- **Create Reservation**
  - **URL:** `/api/reservations`
  - **Method:** `POST`
  - **Description:** Creates a new reservation.
  - **Request Body:**
    ```json
    {
      "data": {
        "first_name": "John",
        "last_name": "Doe",
        "mobile_number": "1234567890",
        "reservation_date": "2024-07-16",
        "reservation_time": "19:00",
        "people": 4
      }
    }
    ```
  - **Response:**
    ```json
    {
      "data": {
        "reservation_id": 1,
        "first_name": "John",
        "last_name": "Doe",
        "mobile_number": "1234567890",
        "reservation_date": "2024-07-16",
        "reservation_time": "19:00",
        "people": 4,
        "status": "booked"
      }
    }
    ```

- **Update Reservation**
  - **URL:** `/api/reservations/:reservation_id`
  - **Method:** `PUT`
  - **Description:** Updates an existing reservation.
  - **Request Body:**
    ```json
    {
      "data": {
        "first_name": "John",
        "last_name": "Doe",
        "mobile_number": "1234567890",
        "reservation_date": "2024-07-16",
        "reservation_time": "19:00",
        "people": 4,
        "status": "seated"
      }
    }
    ```
  - **Response:**
    ```json
    {
      "data": {
        "reservation_id": 1,
        "first_name": "John",
        "last_name": "Doe",
        "mobile_number": "1234567890",
        "reservation_date": "2024-07-16",
        "reservation_time": "19:00",
        "people": 4,
        "status": "seated"
      }
    }
    ```

- **Update Reservation Status**
  - **URL:** `/api/reservations/:reservation_id/status`
  - **Method:** `PUT`
  - **Description:** Updates the status of a reservation.
  - **Request Body:**
    ```json
    {
      "data": {
        "status": "cancelled"
      }
    }
    ```
  - **Response:**
    ```json
    {
      "data": {
        "reservation_id": 1,
        "status": "cancelled"
      }
    }
    ```

#### Tables

- **Get All Tables**
  - **URL:** `/api/tables`
  - **Method:** `GET`
  - **Description:** Retrieves all tables.
  - **Response:**
    ```json
    {
      "data": [
        {
          "table_id": 1,
          "table_name": "Table 1",
          "capacity": 4,
          "reservation_id": null
        },
        ...
      ]
    }
    ```

- **Create Table**
  - **URL:** `/api/tables`
  - **Method:** `POST`
  - **Description:** Creates a new table.
  - **Request Body:**
    ```json
    {
      "data": {
        "table_name": "Table 1",
        "capacity": 4
      }
    }
    ```
  - **Response:**
    ```json
    {
      "data": {
        "table_id": 1,
        "table_name": "Table 1",
        "capacity": 4,
        "reservation_id": null
      }
    }
    ```

- **Seat Reservation**
  - **URL:** `/api/tables/:table_id/seat`
  - **Method:** `PUT`
  - **Description:** Seats a reservation at a table.
  - **Request Body:**
    ```json
    {
      "data": {
        "reservation_id": 1
      }
    }
    ```
  - **Response:**
    ```json
    {
      "data": {
        "table_id": 1,
        "reservation_id": 1,
        "status": "seated"
      }
    }
    ```

- **Clear Table**
  - **URL:** `/api/tables/:table_id/seat`
  - **Method:** `DELETE`
  - **Description:** Clears a table, marking it as free.
  - **Response:**
    ```json
    {
      "data": {
        "status": "finished"
      }
    }
    ```

## Screenshots

![Dashboard Screenshot](.front-end/public/images/dashboard.png)
![Reservation Form Screenshot](.front-end/public/images/reservation_form.png)
![Tables Management Screenshot](.front-end/public/images/tables_management.png)
![Reservations Search Screenshot](.front-end/public/images/reservations_search.png)
![Reservation Edit Screenshot](.front-end/public/images/edit_reservation.png)

## Summary

The Restaurant Reservation System allows restaurant staff to easily manage reservations and table assignments. Users can create, edit, and cancel reservations, as well as seat guests at tables. The system provides a clear overview of the reservations for any given day and the status of tables, improving the efficiency and organization of the restaurant.

## Technology Used

- **Frontend:** React, HTML, CSS
- **Backend:** Node.js, Express
- **Database:** PostgreSQL
- **Others:** Fetch for API calls, Bootstrap for styling

## Installation Instructions

1. **Clone the repository:**

   
   ```bash
   git clone https://github.com/halbert-anderson/final-restaurant-reservation
   cd final-restaurant-reservation
```

2. **Install dependencies:**

  ``` bash
    npm install
  ```

3. **Set up environment variables:**


```makefile
PORT=5000
DATABASE_URL=your-database-url
```

4. **Run the application:**

```bash
npm start
```

5. **Open your browser**

```
Go to http://localhost:3000 to view the application.
```