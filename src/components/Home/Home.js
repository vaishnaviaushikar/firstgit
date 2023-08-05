import React ,{useContext}from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import Button from '../UI/Button/Button';
import Auth_context from '../../store/Auth_context';

const Home = (props) => {
  const authctx=useContext(Auth_context);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={authctx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
