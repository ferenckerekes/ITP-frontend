import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import UsersTabelToolbar from "./UsersTabelToolbar";

export default function UsersTable({ users, refresh }) {
  const columns = [
    { name: "Name", field: "fullName" },
    { name: "Email", field: "email" },
    { name: "Phone number", field: "phoneNumber" },
    { name: "Country", field: "country" },
    { name: "Role", field: "role" },
    { name: "Registered At", field: "createdAt" },
  ];

  const [selectedUsers, setSelectedUsers] = useState([]);
  //const isSelected = (id) => selectedUsers.indexOf(id) !== -1;

  if (!users.length) {
    return null;
  }

  return (
    <>
      <UsersTabelToolbar selectedUsers={selectedUsers} refresh={refresh} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow hover selected={users.length === selectedUsers.length}>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={users.length === selectedUsers.length}
                  onChange={() => {
                    if (users.length === selectedUsers.length) {
                      setSelectedUsers([]);
                    } else {
                      setSelectedUsers(users.map((user) => user.id));
                    }
                  }}
                  color="primary"
                  inputProps={{
                    "aria-label": "select all desserts",
                  }}
                />
              </TableCell>
              {columns.map((column) => (
                <TableCell key={column.name}>{column.name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                hover
                selected={selectedUsers.includes(user.id)}
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => {
                      if (selectedUsers.includes(user.id)) {
                        setSelectedUsers((prev) =>
                          prev.filter((id) => id !== user.id)
                        );
                      } else {
                        setSelectedUsers((prev) => [...prev, user.id]);
                      }
                    }}
                    color="primary"
                    inputProps={{
                      "aria-label": "select all desserts",
                    }}
                  />
                </TableCell>
                {columns.map((column) => (
                  <TableCell key={`${user.id}-${column.name}`}>
                    {user[column.field]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
