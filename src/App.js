import React from 'react';
import classes from './App.module.css';
import Layout from './containers/Layout/Layout'
import MainSite from './containers/MainSite/MainSite'
import {Route, Switch} from 'react-router-dom' 
import SignUp from './containers/SingUp/SignUp'
import ScrollToTop from './containers/ScrollToTop/ScrollToTop';
import RedirectPageAfterRegister from './components/SignUp/RedirectPageAfterRegister/RedirectPageAfterRegister';
import Blog from './containers/Blog/Blog';

function App() {
  return (
    <div className = {classes.App}>
      {/* <MemoryRouter> */}
      <Layout>
        <ScrollToTop>
        <Switch>
            <Route path="/blog" component={Blog} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/signup/success" render={(props) => <RedirectPageAfterRegister/>} />
            <Route path="/" component={MainSite} />
        </Switch>
        </ScrollToTop>
      </Layout>
      {/* </MemoryRouter> */}
    </div>
  );
}

export default App;
