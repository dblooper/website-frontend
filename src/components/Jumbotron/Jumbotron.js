import React, {Component} from 'react';
import classes from './Jumbotron.module.css';
import JumbotronContent from './JumbotonContent/JumbotronConent';

class Jumbotron extends Component {
    state = {
        nodes: [{
            header: 'Software Developer Site',
            underHeader: 'never stay behind',
            shortDescription: 'At this site you can find content about Databases, JavaScript and Java technologies'
        }]
    }

    render() {
        let jumbotronNodes = this.state.nodes.map(node => (<JumbotronContent 
                                                                    header={node.header} 
                                                                    underHeader={node.underHeader} 
                                                                    shortDescription={node.shortDescription}/>))
        return (
            <div className={classes.Jumbotron}>
                <div className={classes.JumbotronHeader}>
                    {jumbotronNodes}
                </div>
            </div>
        ); 
    }
}

export default Jumbotron;