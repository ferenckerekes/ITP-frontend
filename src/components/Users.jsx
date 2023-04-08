import UsersTable from "./UsersTable";
import UsersProvider from "./UsersProvider";

const Users = () => {
  return (
    <UsersProvider>
      <UsersTable />
    </UsersProvider>
  );
};

export default Users;
