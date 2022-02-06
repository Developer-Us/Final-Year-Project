import React from 'react';
import { Grid,Paper,Avatar } from '@material-ui/core';

export default function login() {

  const paperStyle={padding :20, height:'70vh', width:280, margin:"20px auto"}
  return <div>
    <Grid>
      <Paper elevation={10} style={paperStyle}>
      <Avatar>h</Avatar>  
      Sign in
      </Paper>
    </Grid>
  

      
  </div>;
}
