import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/core/Menu';


import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Posts from "./Posts";
import Friends from "./Friends";
import Login from "./Login";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



class Main extends Component {

  render() {

    return (

	   <HashRouter>
     <Container max-width="100%">

     <AppBar position="static">
  <Toolbar>
  <IconButton
         edge="start"
         color="inherit"
         aria-label="open drawer"
       >
         <MenuIcon />
       </IconButton>
    <Typography variant="h6">
      Libresocialnetwork
    </Typography>

    <IconButton aria-label="display more actions" edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
  </Toolbar>
</AppBar>










        <div>
          <h1>Libresocialnetwork</h1>

          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/posts">Posts</NavLink></li>
            <li><NavLink to="/friends">Friends</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
          </ul>
          <div className="content">
	    <Route exact path="/" component={Home}/>
	    <Route path="/posts" component={Posts}/>
	    <Route path="/friends" component={Friends}/>
      <Route path="/login" component={Login}/>

          </div>
        </div>
        </Container>
	    </HashRouter>
    );
  }
}

export default Main;
