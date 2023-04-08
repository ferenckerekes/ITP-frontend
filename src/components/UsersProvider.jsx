import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UsersContext = createContext();

const UsersProvider = ({ children }) => {
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
    <UsersContext.Provider value={{ users, error, refresh }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
