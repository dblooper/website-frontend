import React from 'react';
import classes from './PostSelector.module.css';

const PostSelector = (props) => {
let subjectList = props.subjectList.map(subj => (<ul 
    className={props.activeSubject === subj.subjectName ? classes.Active : null} 
    key={subj.subjectName}
    onClick={() => props.subjectHandler(subj.subjectName)}
    >
    {subj.subjectName}</ul>));

    return(
        <div className={classes.PostSelector}>
            <li>
                {subjectList}
            </li>
        </div>
    );
}
export default PostSelector;