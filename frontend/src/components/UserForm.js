import React, { useState, useEffect } from "react";

function UserForm({ saveUser, editingUser }) {
  const [user, setUser] = useState({ id: "",name: "", email: "", age: "" });

  // Populate form if editing
  useEffect(() => {
    if (editingUser) {
      setUser(editingUser);
    }
  }, [editingUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveUser(user);
    setUser({ id:"", name: "", email: "", age: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingUser ? "Edit User" : "Add User"}</h2>

      <input
        type="number"
        name="id"
        placeholder="ID"
        value={user.id}
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={user.age}
        onChange={handleChange}
      />
      <button type="submit">{editingUser ? "Update" : "Add"}</button>
    </form>
  );
}

export default UserForm;