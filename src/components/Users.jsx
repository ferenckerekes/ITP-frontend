import { useState, useEffect } from "react";
import axios from "axios";
import UsersTable from "./UsersTable";
import Alert from "@mui/material/Alert";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      setError(null);
      const response = await axios.get("http://localhost:3000/users");
      setUsers(response.data);
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    }
  };

  const refresh = () => {
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {error && <Alert severity="error">{error}</Alert>}
      <UsersTable users={users} refresh={refresh} />
    </div>
  );
};

export default Users;
