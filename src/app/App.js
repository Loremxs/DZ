import React, { useState } from "react";
import Users from "./components/users";
import api from "./api";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };
  const handleToggleBookmark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark };
        }
        return user;
      })
    );
  };
  return (
    <>
      <Users
        onDelete={handleDelete}
        onToggleBookMark={handleToggleBookmark}
        users={users}
      />
    </>
  );
}

export default App;
