//This is a line to test branch pushing
//This is a line to test branch pushing
// App.js
import React from 'react';
// import Header from './Header';
import Hero from './Hero';
import MainContent from './MainContent';
// import Footer from './Footer';
import Layout from './Layout';
import QuestionScreen from './QuestionScreen';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ResultScreen from './ResultScreen';

const App = () => {
  return (
    // <div>
    //   <Header />

    //   {/* <MainContent /> */}
    //   {/* <QuestionScreen /> */}
    //   <Hero />
    //   <Footer />
    // </div>
    <Router>
      <Switch>
        <Route path="/" exact render={() => <Layout><MainContent /></Layout>} />
        <Route path="/question" render={() => <Layout><QuestionScreen /></Layout>} />
        <Route path="/hero" render={() => <Layout><Hero /></Layout>} />
        <Route path="/result" render={() => <Layout><ResultScreen /></Layout>} />
        {/* Add more routes for other pages */}
      </Switch>
    </Router>
  );
};

export default App;
