import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

export default function UsersTabelToolbar({ selectedUsers = [], refresh }) {
  const deleteUserById = async (userId) => {
    try {
      await axios.delete(`http://localhost:3000/users/${userId}`);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteSelectedUsers = async () => {
    for (let i = 0; i < selectedUsers.length; i++) {
      console.log(selectedUsers[i]);
      await deleteUserById(selectedUsers[i]);
      console.log(selectedUsers[i] + " deleted");
    }
    refresh();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Users
          </Typography>
          {selectedUsers.length > 0 && (
            <div>
              <IconButton
                onClick={deleteSelectedUsers}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <DeleteIcon />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
