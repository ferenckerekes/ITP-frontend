import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function UsersTable({ users }) {
  const columns = [
    { name: "Name", field: "fullName" },
    { name: "Email", field: "email" },
    { name: "Phone number", field: "phoneNumber" },
    { name: "Country", field: "country" },
    { name: "Role", field: "role" },
    { name: "Registered At", field: "createdAt" },
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell>{column.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {columns.map((column) => (
                <TableCell>{user[column.field]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
