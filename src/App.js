import React from 'react';
import classes from './App.module.css';
import Layout from './containers/Layout/Layout'
import MainSite from './containers/MainSite/MainSite'

function App() {
  return (
    <div className = {classes.App}>
      <Layout>
        <MainSite />
      </Layout>
    </div>
  );
}

export default App;
