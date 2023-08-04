import React,{useContext} from 'react';

import classes from './Navigation.module.css';
import Auth_context from '../../store/Auth_context';

const Navigation = (props) => {
  const ctx=useContext(Auth_context);
   
  return (
   
          <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
        )
 
};

export default Navigation;
