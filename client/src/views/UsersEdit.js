
import { TextField, Button } from "@mui/material";

import { useEffect, useState } from "react";
import SaveIcon from "@mui/icons-material/Save";


import { update, create, getByUserID } from "../models/userModel";






function UsersEdit() {
  const userId = 1;
  const [user, setUser] = useState({ fname: "", lname: "", email: "" });
  const [alertOpen, setAlertOpen] = useState(false);

  useEffect(() => {
    getByUserID(userId).then((user) => setUser(user));
  }, [userId]);


 function onSave() {
   
   if (user.id ===0) {
     create({ ...user }).then(() => setAlertOpen(true));
   } else {
    console.log("user already exists")
    update({ userId, ...user }).then(() => setAlertOpen(true));
   }
 }

  return (
    <>
      <form>
        First name
        <TextField
          name="fname"
          label="First Name"
          fullWidth
          multiline
          minRows={5}
          value={user.f_name}
          onChange={(e) => setUser({ ...user, f_name: e.target.value })}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        ></TextField>

        <TextField
          name="lname"
          label="Last Name"
          fullWidth
          multiline
          minRows={5}
          margin="normal"
          value={user.l_name}
          onChange={(e) => setUser({ ...user, l_name: e.target.value })}
          InputLabelProps={{
            shrink: true,
          }}
        ></TextField>

        <TextField
          name="email"
          label="email"
          fullWidth
          multiline
          minRows={5}
          margin="normal"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          InputLabelProps={{
            shrink: true,
          }}
        ></TextField>

        <Button
          startIcon={<SaveIcon />}
          variant="contained"
          color="primary"
          onClick={() => onSave({ ...user })}
        >
          Save
        </Button>
      </form>
      
    </>
  );
} 

export default UsersEdit;
