 
from contextlib import asynccontextmanager
from fastapi import FastAPI, HTTPException
from sqlmodel import SQLModel, Field, create_engine, Session, select
from typing import Optional

# Database URL for pymysql (replace with your MySQL credentials)
DATABASE_URL = "mysql+pymysql://user1:1234@localhost:3306/userapp"

# Define the User model
class User(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    email: str
    age: int

# Create the database engine
engine = create_engine(DATABASE_URL)

# Function to create tables
def create_db_and_tables():
    SQLModel.metadata.create_all(engine)

# Lifespan event handler
@asynccontextmanager
async def lifespan(app: FastAPI):
    # Code to run on startup
    create_db_and_tables()
    yield
    # Code to run on shutdown (optional)

# Initialize FastAPI app with lifespan
app = FastAPI(lifespan=lifespan)

from fastapi.middleware.cors import CORSMiddleware

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Allow your React frontend origin
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

# Root route
@app.get("/")
def read_root():
    return {"message": "Welcome to the FastAPI application!"}

# Create a new user
@app.post("/users/")
def create_user(user: User):
    with Session(engine) as session:
        session.add(user)
        session.commit()
        session.refresh(user)
        return user

# Get all users
    
@app.get("/users/")
def get_users():
    print("Fetching all users...")
    with Session(engine) as session:
        users = session.exec(select(User)).all()
        # print(f"Users found: {users}")
        return users
    
# Get a single user by ID
@app.get("/users/{user_id}")
def get_user(user_id: int):
    with Session(engine) as session:
        user = session.get(User, user_id)
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        return user

# Update a user
@app.put("/users/{user_id}")
def update_user(user_id: int, updated_user: User):
    with Session(engine) as session:
        user = session.get(User, user_id)
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        user.name = updated_user.name
        user.email = updated_user.email
        user.age = updated_user.age
        session.commit()
        session.refresh(user)
        return user

# Delete a user
@app.delete("/users/{user_id}")
def delete_user(user_id: int):
    with Session(engine) as session:
        user = session.get(User, user_id)
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        session.delete(user)
        session.commit()
        return {"message": "User deleted successfully"}