import React from 'react';
import classes from './Subject.module.css'

const Subject = (props) => {
    return (
        <div className={ classes.Subject }>
            <section>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </section>
        </div>
    );
}

export default Subject;