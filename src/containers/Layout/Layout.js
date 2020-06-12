import React, { Component } from 'react';
import classes from  './Layout.module.css'
import Navbar from '../../components/Navbar/Navbar'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import Content from '../../components/Content/Content'
import Aux from '../../hoc/Aux/Aux'
import SideDrawer from '../../components/Navbar/SideDrawer/SideDrawer';
import Footer from '../../components/Footer/Footer'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    showSideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render () {
        return(
            <div>
                <Navbar drawerToggleStatus={this.state.showSideDrawer} drawerTogglerClicked = {this.sideDrawerToggleHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer}
                    closed={this.showSideDrawerCloseHandler} />
                <Jumbotron/>
                <div className={classes.Content}>
                    <Content generatedContent={this.props.children}/>
                </div>
                <Footer/>
            </div>
        );
    }

}

export default Layout;
