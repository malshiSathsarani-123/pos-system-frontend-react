import React, { useState } from 'react';
import { Grid, Input, Typography } from '@mui/material';
import { Button } from '@mui/material';

const UserForm = (props) => {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    return (
        <Grid 
            container 
            spacing={2}
            sx={{
                background: '#ffffff',
                display:'block',
                marginBottom:'30px',
              }}
            >
           <Grid item xs={12}>
                <Typography
                    component={'h1'}
                    sx={{
                        color: '#000000',
                        fontSize: '2rem', 
                        fontWeight: 'bold', 
                        marginBottom: '20px', 
                        textAlign: 'center', 
                    }}
                >
                    User Form
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ display:'flex' }}>
                <Typography 
                component={'label'} 
                htmlFor='id'
                sx={{
                    color: '#000000',
                    display:'block',
                    marginRight:'20px',
                    width:'100px',
                    fontSize:'16px'
                }}>
                    ID
                </Typography>
                <Input 
                    type='number'
                    id='id'
                    name='id'
                    sx={{
                        color: '#000000',
                        width:'400px',
                        fontSize:'16px'
                    }}
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6} sx={{ display:'flex' }}>
                <Typography 
                component={'label'} 
                htmlFor='id'
                sx={{
                    color: '#000000',
                    display:'block',
                    marginRight:'20px',
                    width:'100px',
                    fontSize:'16px'
                }}>
                    User Name
                </Typography>
                <Input 
                    type='text'
                    id='name'
                    name='name'
                    sx={{
                        color: '#000000',
                        width:'400px',
                        fontSize:'16px'
                    }}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6} sx={{ display:'flex' }}>
                <Typography 
                component={'label'} 
                htmlFor='id'
                sx={{
                    color: '#000000',
                    display:'block',
                    marginRight:'20px',
                    width:'100px',
                    fontSize:'16px'
                }}>
                    Email
                </Typography>
                <Input 
                    type='text'
                    id='email'
                    name='email'
                    sx={{
                        color: '#000000',
                        width:'400px',
                        fontSize:'16px'
                    }}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6} sx={{ display:'flex' }}>
            <Typography
                component={'label'}
                htmlFor='id'
                sx={{
                    color: '#000000',
                    display:'block',
                    marginRight:'20px',
                    width:'100px',
                    fontSize:'16px'
                }}>
                Contact
            </Typography>
            <Input
                type='text'
                id='contact'
                name='contact'
                sx={{
                    color: '#000000',
                    width:'400px',
                    fontSize:'16px'
                }}
                value={contact}
                onChange={e => setContact(e.target.value)}
            />
        </Grid>
            <Grid item xs={12} sm={6} sx={{ display:'flex' }}>
                <Typography
                    component={'label'}
                    htmlFor='id'
                    sx={{
                        color: '#000000',
                        display:'block',
                        marginRight:'20px',
                        width:'100px',
                        fontSize:'16px'
                    }}>
                    Password
                </Typography>
                <Input
                    type='password'
                    id='password'
                    name='password'
                    sx={{
                        color: '#000000',
                        width:'400px',
                        fontSize:'16px'
                    }}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6} sx={{ display:'flex' }}>
                <Typography
                    component={'label'}
                    htmlFor='id'
                    sx={{
                        color: '#000000',
                        display:'block',
                        marginRight:'20px',
                        width:'100px',
                        fontSize:'16px'
                    }}>
                    Re Password
                </Typography>
                <Input
                    type='password'
                    id='rePassword'
                    name='rePassword'
                    sx={{
                        color: '#000000',
                        width:'400px',
                        fontSize:'16px'
                    }}
                    value={rePassword}
                    onChange={e => setRePassword(e.target.value)}
                />
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            backgroundColor: '#1976d2',
                            padding: '10px 20px',
                            fontSize: '16px',
                            borderRadius: '8px',
                            '&:hover': {
                                backgroundColor: '#1565c0',
                            }
                        }}
                    >
                        Add User
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            backgroundColor: '#1976d2',
                            padding: '10px 20px',
                            fontSize: '16px',
                            borderRadius: '8px',
                            '&:hover': {
                                backgroundColor: '#1565c0',
                            }
                        }
                    }
                    >
                        Update User
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default UserForm;
