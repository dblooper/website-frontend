import React, {Component} from 'react';
import classes from './MainSite.module.css';
import Subjects from './Subjects/Subjects'

class MainSite extends Component {


    render() {
        return(
            <div>
                <Subjects />
            </div>
        );
    }
}

export default MainSite;