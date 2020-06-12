import React from 'react';
import classes from  './Navbar.module.css'
import NavbarItems from './NavbarItems/NavbarItems'
import Logo from './Logo/Logo'
import DrawerToggler from './SideDrawer/DrawerToggler/DrawerToggler';

const Navbar = (props) => (
    <header className={classes.Navbar}>
        <DrawerToggler clicked={props.drawerTogglerClicked} />
        <div className={props.drawerToggleStatus ? classes.HideLogo: classes.Logo }>
            <Logo />
        </div>
        <nav className={classes.Desktop}>
            <NavbarItems></NavbarItems>
        </nav>
    </header>
);

export default Navbar;