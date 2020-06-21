import React from 'react';
import classes from './SectionTitle.module.css'

const SectionTitle = (props) => (
    <div className={classes.SectionTitle}>
        <h1>{props.header}</h1>
    </div>
);

export default SectionTitle;