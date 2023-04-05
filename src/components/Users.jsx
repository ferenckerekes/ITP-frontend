import { useState, useEffect } from "react";
import axios from "axios";
import UsersTable from "./UsersTable";

const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/");
      console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
    console.log("Fetching users");
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <UsersTable users={users} />
    </div>
  );
};

export default Users;
