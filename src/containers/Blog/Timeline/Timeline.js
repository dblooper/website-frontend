import React, {Component} from 'react'
import classes from './Timeline.module.css'

class Timeline extends Component {
    render() {
        return(
            <li className={classes.Timeline}>
                <ul>Hello World</ul>
                <ul>Hello World</ul>
                <ul>Hello World</ul>
                <ul>Hello World</ul>
                <ul>Hello World</ul>
            </li>
        );
    }
}

export default Timeline;