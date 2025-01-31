
import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  // Fetch all users
  const fetchUsers = async () => {
    const response = await fetch("http://localhost:8000/users/");
    const data = await response.json();
    setUsers(data);
  };

  // Add or update a user
  const saveUser = async (user) => {
    if (editingUser) {
      // Update user
      await fetch(`http://localhost:8000/users/${editingUser.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
    } else {
      // Create user
      await fetch("http://localhost:8000/users/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
    }
    fetchUsers();
    setEditingUser(null);
  };

  // Delete a user
  const deleteUser = async (id) => {
    await fetch(`http://localhost:8000/users/${id}`, {
      method: "DELETE",
    });
    fetchUsers();
  };

  // Edit a user
  const editUser = (user) => {
    setEditingUser(user);
  };

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <h1>User Management</h1>
      <UserForm saveUser={saveUser} editingUser={editingUser} />
      <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
    </div>
  );
}

export default App;
