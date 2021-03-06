import React,{useContext} from 'react';

import Navigation from './Navigation/Navigation';
import classes from './MainHeader.module.css';


const MainHeader = (props) => {

  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
