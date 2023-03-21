import UserList from "../components/UserList";
import {Alert, Typography, TextField, Button } from "@mui/material";
import {  useLocation } from 'react-router-dom';
import { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";


import { create } from "../models/userModel";






function Users() {

  const [user, setUser] = useState({ fname: "", lname: "", email: "" });
  const [alertOpen, setAlertOpen] = useState(false);



 function onSave() {
   if (user.id ===0) {
     create({ ...user }).then(() => setAlertOpen(true));
   } else {
    console.log("user already exists")
    create({ ...user }).then(() => setAlertOpen(true));
   }
 }

  return (
    <>
      <form>
        <TextField
          name="fname"
          label="First Name"
          fullWidth
          multiline
          minRows={5}
          value={user.fname}
          onChange={(e) => setUser({ ...user, fname: e.target.value })}
        ></TextField>

        <TextField
          name="lname"
          label="Last Name"
          fullWidth
          multiline
          minRows={5}
          value={user.lname}
          onChange={(e) => setUser({ ...user, lname: e.target.value })}
        ></TextField>

        <TextField
          name="email"
          label="email"
          fullWidth
          multiline
          minRows={5}
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        ></TextField>

        <Button
          startIcon={<SaveIcon />}
          variant="contained"
          color="primary"
          onClick={() => onSave({ ...user })}
        >
          Spara
        </Button>
      </form>
      
    </>
  );
} 

export default Users;
