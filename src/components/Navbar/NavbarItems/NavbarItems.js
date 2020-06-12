import React from 'react';
import classes from './NavbarItems.module.css'
import NavbarItem from './NavbarItem/NavbarItem'

const NavbarItems = (props) => (
    <ul className={classes.NavbarItems}>
        <NavbarItem link="/blog" exact>Blog</NavbarItem>
        <NavbarItem link="/about" exact>About</NavbarItem>
        <NavbarItem link="/admin" exact>Admin</NavbarItem>

    </ul>
)

export default NavbarItems;