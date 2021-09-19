import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function form() {
    return (
        <div className="container py-5 bg-dark text-white border px-5">
            <h1>Your Info </h1>
            <TextField
              label="Name"
              type="text"
              className="form-control mt-3"
            />
            <TextField
              label="Age"
              type="number"
              className="form-control mt-3"
              
            />
            <TextField
              label="Email"
              type="email"
              className="form-control mt-3"
            />
            <TextField
              label="Password"
              type="password"
              className="form-control mt-3"
            />
    
           <Button variant="contained" className="mt-3" color="success">Save</Button>



        </div>
    )
}
