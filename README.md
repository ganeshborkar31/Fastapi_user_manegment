# User Management App

A full-stack application for managing users, built with **FastAPI** (backend), **SQLModel** (ORM), **MySQL** (database), and **React** (frontend).


---

## Features

- **Create Users**: Add new users with details like name, email, and age.
- **Read Users**: Fetch and display a list of all users.
- **Update Users**: Edit user details (name, email, age).
- **Delete Users**: Remove users from the database.
- **Interactive Frontend**: A user-friendly React frontend to interact with the backend.

---

## Technologies Used

### Backend
- **FastAPI**: A modern, fast (high-performance) web framework for building APIs with Python.
- **SQLModel**: An ORM (Object-Relational Mapping) library for interacting with the database.
- **MySQL**: A relational database management system for storing user data.

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **Axios**: A promise-based HTTP client for making API requests.
- **CSS**: Basic styling for the frontend.

---

## Prerequisites

Before running the project, ensure you have the following installed:

- **Python 3.7+**
- **Node.js** (for the React frontend)
- **MySQL** (or any MySQL-compatible database)
- **pip** (Python package manager)
- **npm** (Node.js package manager)

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/ganeshborkar31/Fastapi_user_management.git
cd Fastapi_user_management
```

### 2. Set Up the Backend

- Navigate to the backend directory:
```bash
    cd backend
```

- Create virtual Enviroment:
```
    python3 -m venv .venv

    source .venv/bin/activate     # for Linux
            or
    venv\Scripts\activate         # for Windows
```

- Install Python dependencies:
```bash
    pip install -r requirements.txt
```
### 3. Set up the MySQL database:

- Create a database named userapp_db in MySQL.

    - Update the DATABASE_URL in main.py with your MySQL credentials:

        ```python

        DATABASE_URL = "mysql+pymysql:username:password@localhost:3306/userapp_db"

- Run the FastAPI backend:
    ```bash
        uvicorn main:app --reload
    ```
    The backend will be available at http://localhost:8000.

### 4. Set Up the Frontend
- Navigate to the frontend directory:
    ```bash
        cd ../frontend
    ```
- Install Node.js dependencies:
    ```bash

        npm install
    ```
- Start the React development server:
    ```bash

        npm start
    ```
- The frontend will be available at http://localhost:3000.

## API Endpoints

The FastAPI backend exposes the following endpoints:

- GET /users/: Fetch all users.

- GET /users/{user_id}: Fetch a single user by ID.

- POST /users/: Create a new user.

- PUT /users/{user_id}: Update a user by ID.

- DELETE /users/{user_id}: Delete a user by ID.

## Frontend Usage

- Add a User:

    - Fill out the form with the user's name, email, and age.

    - "Add" to create a new user.

- View All Users:

    - The list of users is displayed automatically on the homepage.

- Edit a User:

    - Click the "Edit" button next to a user.

    - Update the details in the form and click "Update."

- Delete a User:

    - Click the "Delete" button next to a user to remove them.

## Project Structure

```
Fastapi_user_management/
├── backend/
│   ├── main.py                # FastAPI backend code
│   ├── requirements.txt       # Python dependencies
├── frontend/
│   ├── public/                # Static assets
│   ├── src/                   # React frontend code
│   │   ├── components/        # React components
│   │   ├── App.js             # Main React component
│   │   ├── App.css            # Styling for the app
│   ├── package.json           # Node.js dependencies
```
## Screenshots
### Frontend
![Alt text](https://github.com/ganeshborkar31/fastapi_user_manegment/blob/main/screenshots/Screenshot%20from%202025-01-31%2020-03-44.png "Frontend")
### Backend Apis
![Alt text](https://github.com/ganeshborkar31/fastapi_user_manegment/blob/main/screenshots/Screenshot%20from%202025-01-31%2020-04-49.png "Backend")

## User Management App Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

- Fork the repository.

- Create a new branch (git checkout -b feature/YourFeatureName).

- Commit your changes (git commit -m 'Add some feature').

- Push to the branch (git push origin feature/YourFeatureName).

- Open a pull request.

## License

- This project is licensed under the MIT License. 
## Contact

For questions or feedback, feel free to reach out:

Your Name: ganeshborkar107@gmail.com

GitHub: ganeshborkar31

