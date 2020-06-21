import React from 'react';
import classes from './Post.module.css';

const Post = (props)=> {
    return (
        <div className={classes.Post}>
            <div className={classes.TextData}>
                <h2>{props.title}</h2>
                <h3>{props.date}</h3>
                <h4>{props.body}</h4>
            </div>
            <li className={classes.VoteData}>
                <ul>Likes: {props.likes}</ul>
                <ul>Dislikes: {props.dislikes}</ul>
            </li>
        </div>
    )
}

export default Post;