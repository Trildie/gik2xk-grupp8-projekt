import { Typography } from "@mui/material";

function UserSmall({user}) {
    return (
        <>
            <Typography>User: {user.fName} </Typography>
        </>
        
    );
}

export default UserSmall;