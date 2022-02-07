import React from "react";
import { Grid, Paper, Avatar,TextField, Button, Typography, Link } from "@material-ui/core";
import Checkbox from '@mui/material/Checkbox';
import  FormControlLabel  from "@material-ui/core/FormControlLabel";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export default function login() {
  const btnstyle={margin:'8px 0'}
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>

          <Grid align="center">
            <Avatar>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign in</h2>
          </Grid>

          <TextField id="standard-basic" label="Mail" variant="standard" fullWidth required />
          
          <TextField id="standard-basic" label="Password" variant="standard" type="password" fullWidth required  />

          <FormControlLabel
            control={
              <Checkbox
              
              name="checkedB"
              color="primary"
              />
            }
            label="Remember password"

          />
        
        <Button type='submit' color='primary' fullWidth variant="contained" style={btnstyle}>Sign in</Button>
          <Typography>
            <Link href="#"  >
              Forgot password
            </Link>
          </Typography>

          <Typography>
            <Link href="#"  >
              Sign Up
            </Link>
          </Typography>

        </Paper>
      </Grid>
    </div>
  );
}
