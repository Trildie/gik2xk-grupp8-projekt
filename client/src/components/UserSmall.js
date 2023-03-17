import { Typography } from "@mui/material";

function UserSmall({user}) {
    return (
        <>
            <Typography>User: {user.fName} </Typography>
            <Typography>Id: {user.userId} </Typography>
        </>
        
    );
}

export default UserSmall;