import React from 'react'
import classes from './Content.module.css'

const Content = (props) => (
    <div className={classes.Content}>
        {props.generatedContent}
    </div>
);

export default Content;