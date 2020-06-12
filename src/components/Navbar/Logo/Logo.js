import React from 'react';
import classes from './Logo.module.css'
import logo from '../../../assets/jascry-icon.png'

const Logo = (props) => (
    <div className={props.change ? [classes.LogoChange,classes.Logo].join(' ') : classes.Logo}>
        {/* <img src={logo} alt="LOGO" /> */}
            <div >
                <p className={classes.Nick}>
                    <span className={classes.LogoBracket}>(</span>jascry<span className={classes.LogoBracket}>)</span>
                </p>
                <p className={classes.Name}>
                    Daniel Koplenski
                </p>
            </div>
    </div>
);
export default Logo;