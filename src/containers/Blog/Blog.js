import React, {Component} from 'react'
import classes from './Blog.module.css'
import Posts from './Posts/Posts';
import Timeline from './Timeline/Timeline';
import TitleHeader from '../../components/Blog/TitleHeader/TitleHeader'

class Blog extends Component {
    state = {
        title: "Java"
    }

    render() {
        return (
            <div className={classes.Blog}>
                <TitleHeader title={this.state.title}/>
                <div className={classes.BlogComponents}>
                <Posts />
                <Timeline />
                </div>
            </div>
        );
    }
}

export default Blog;