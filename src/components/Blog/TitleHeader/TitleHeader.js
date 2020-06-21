import React from 'react';
import classes from './TitleHeader.module.css'
import { faJava } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TitleHeader = (props) => {
    return (
        <div className={classes.TitleHeader}>
            <FontAwesomeIcon icon={faJava}/>
            <h1>{props.title}</h1>
        </div>
    )
}

export default TitleHeader;