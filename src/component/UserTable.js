import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const UserTable = ({ rows }) => {

    return (
        <TableContainer component={Paper}>
             <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Actions</TableCell>        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                    rows.length > 0 ?
                        rows.map(row => (
                            <TableRow key={row.id} sx={{ border: '1px solid black' }}>
                                <TableCell component={'th'} scope='row'>{row.id}</TableCell>
                                <TableCell component={'th'} scope='row'>{row.name}</TableCell>
                                <TableCell component={'th'} scope='row'>{row.email}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary" onChange={()=>{}}>Update</Button>
                                    <Button variant="contained" color="secondary" sx={{ marginLeft: '10px' }}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        )) : (
                            <TableRow>
                                <TableCell component={'th'} scope='row'>No Data</TableCell>
                            </TableRow>
                        )
                    }    
                </TableBody>
            </Table>       
        </TableContainer>         
    );
}

export default UserTable;
