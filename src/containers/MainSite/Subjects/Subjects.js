import React, { Component } from 'react'
import axios from 'axios'
import classes from './Subjects.module.css'
import Subject from './Subject/Subject'

class Subjects extends Component {
    state = {
        loadedSubjects: []
    }

    componentDidMount() {
        //console.log(this.props);
        axios.get('http://localhost:8081/public/blog/subjects').then(
            response => {
                console.log(response.data);
                this.setState({loadedSubjects: response.data});
                
            }
        ).catch(
            error => {
                console.log(error);
            }
        )
    }

    render() { 
        const subjectsFetched = this.state.loadedSubjects.map(
            subj => {
                return <Subject key={subj.subjectName} 
                                title={ subj.subjectName } 
                                description = { subj.description }
                        />;
            }
        );
        return (
            <div>
                <section className={[classes.Subjects, classes.Row].join(' ')}>
                    { subjectsFetched }
                </section>
            </div>
        );
    }
}

export default Subjects