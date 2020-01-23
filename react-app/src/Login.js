import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class Login extends Component {
  render() {
    return (
      <div>
        <h2>Login</h2>

         <TextField id="filled-basic" label="Address (ipv6)" variant="filled" />
         <TextField id="filled-basic" label="Port" variant="filled" />
         <TextField id="filled-basic" label="Password" variant="filled" />
        <Button variant="contained">Login</Button>











   	</div>
    );
  }
}

export default Login;
