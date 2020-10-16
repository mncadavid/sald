import React from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => {
    return(
        <header>
          <h1>SALD</h1>
          {props.loggedIn ?
            <button onClick={props.logout}>Logout</button>
            : <Link to="/login">Login</Link>
          }
        </header>
    )
};

export default Header;