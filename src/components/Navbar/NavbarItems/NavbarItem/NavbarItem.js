import React from 'react';
import {NavLink} from 'react-router-dom'
import classes from './NavbarItem.module.css'

const NavbarItem = (props) => (
    <li className={classes.NavbarItem}>
        <NavLink 
            to={props.link}
            exact={props.exact}
            activeClassName={classes.active}>{ props.children }
        </NavLink>
    </li>
)

export default NavbarItem;