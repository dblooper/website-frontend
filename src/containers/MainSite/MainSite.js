import React, {Component} from 'react';
import classes from './MainSite.module.css';
import Subjects from './Subjects/Subjects'
import HomePosts from './HomePosts/HomePosts';
import axios from 'axios';
import Projects from './Projects/Projects';

class MainSite extends Component {
    state = {
        loadedSubjects: [],
        loadedLatestPosts: [],
        currentSubject: 'java',
        loadingSubjects: true,
        loadingPosts: true
    }

    componentDidMount() {
        //console.log(this.props);
        axios.get('http://localhost:8081/public/blog/subjects').then(
            response => {
                console.log(response.data);
                this.setState({loadedSubjects: response.data,
                                loadingSubjects: false});
                
            }
        ).catch(
            error => {
                console.log(error);
            }
        )
        axios.get('http://localhost:8081/public/blog/posts?subject=java').then(
            response => {
                console.log(response.data);
                this.setState({loadedLatestPosts: response.data
                                ,loadingPosts: false});
                
            }
        ).catch(
            error => {
                console.log(error);
            }
        )
    }

    activeSubjectOnPostHandler = (subject) => {
        console.log("hello" + subject)
        let currSubject = this.state.currentSubject;
        if(currSubject !== subject) {
            this.setState({
                currentSubject: subject
            })
            axios.get('http://localhost:8081/public/blog/posts?subject=' + subject).then(
                response => {
                    console.log(response.data);
                    this.setState({loadedLatestPosts: response.data});    
                }
            ).catch(
                error => {
                    console.log(error);
                }
            )
        }
    }

    render() {
        return(
            <div className={classes.MainSite}>
                <Subjects header="Topics" 
                            loadedSubjects={this.state.loadedSubjects} 
                            loadingSubjects={this.state.loadingSubjects}/>
                <HomePosts header="Latest Posts" 
                                                                                            activeSubject={this.state.currentSubject}
                                                                                            subjectList={this.state.loadedSubjects}
                                                                                            loadedLatestPosts={this.state.loadedLatestPosts}
                                                                                            loadingPosts={this.state.loadingPosts}
                                                                                            subjectHandler={this.activeSubjectOnPostHandler}/>;
                <Projects header="My Projects" />

            </div>
        );
    }
}

export default MainSite;