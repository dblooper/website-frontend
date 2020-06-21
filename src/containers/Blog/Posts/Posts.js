import React, {Component} from 'react'
import classes from './Posts.module.css'
import Post from '../../../components/Blog/Post/Post'
import axios from 'axios'
import Spinner from '../../../components/Spinner/Spinner'
class Posts extends Component {
    state = {
        loadedPosts: null
    }

    componentDidMount() {
        axios.get('http://localhost:8081/public/blog/posts?subject=java')
        .then(
            (response) => {
                this.setState({loadedPosts: response.data})
            }
        )
        .catch(
            (error) => {
                console.log(error)
        })
    }

    render() {
        let posts = [] 
        if(this.state.loadedPosts) {
 
            posts = this.state.loadedPosts.map((post) => {
                return(<Post 
                    title={post.name}
                    date={post.creationDate.slice(0,10)}
                    body={post.body.slice(0,100)}
                    likes={post.likes}
                />)
            })
        } else {
           posts = <div style={{paddingLeft: "30px"}}><Spinner/></div> 
        }

        return(
            <div className={classes.Posts}>
                {posts}
            </div>
        );
    }
}

export default Posts;