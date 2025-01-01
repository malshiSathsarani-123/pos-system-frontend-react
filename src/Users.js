import UserForm from "./component/UserForm";
import React from 'react';
import UserTable from "./component/UserTable";
import { Box } from "@mui/material";
import Navbar from "./Navbar";

const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Michael Johnson', email: 'michael@example.com' }
];

const Users = () => {
    return(
        <Box
            sx={{
                width: 'calc(100% - 100px)',
                margin: 'auto',
            }}
        >
            <Navbar />
            <UserForm />
            <UserTable rows={users} />
        </Box>
    );
}

export default Users;