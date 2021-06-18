import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = () => (

    <header>
        <h1>Expensify</h1>
        <p>To return to home page<NavLink to="/" activeClassName="is-active" exact={true}>Click Here</NavLink></p>
        <p>To create an expense :- <NavLink to="/create" activeClassName="is-active">Click Here</NavLink></p>
        <p>To edit an expense :- <NavLink to="/edit" activeClassName="is-active">Click Here</NavLink></p>
        <p>Need some help?<NavLink to="/help" activeClassName="is-active">Click Here</NavLink></p>
        
    </header>
);

export default Header;