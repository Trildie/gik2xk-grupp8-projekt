import UserList from "../components/UserList";
import { Box, Grid, Typography } from "@mui/material";
import { useLocation } from 'react-router-dom';


//p är padding

function Users() {
  const location = useLocation();
    console.log(location);
  return (
    
    <Grid container columnSpacing={2} p={1} className="ProdMenu">

      <Grid className="User__grid-item" item xs={12} md={4}>
        <Box className="User__grid-item-content">
          <Typography variant="h4" component="h2">User</Typography>
          <UserList pathname={location.pathname}></UserList>
        </Box>
      </Grid>

      <Grid className="User__grid-item" item xs={12} md={4}>
        <h2>test</h2>
      </Grid>

      <Grid className="User__grid-item" item xs={12} md={4}>
        <h2>test</h2>
      </Grid>

    </Grid>
  );
}

export default Users;
