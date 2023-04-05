import { useEffect, useState } from "react";
import axios from "axios";

function App() {
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
      <h1>Good morning Vietnam</h1>
      <h2>Users</h2>

      {users.map((user) => (
        <p key={user.id}>
          {user.firstName} {user.lastName} ({user.email})
        </p>
      ))}
    </div>
  );
}

export default App;
