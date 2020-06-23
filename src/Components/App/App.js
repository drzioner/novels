import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { GlobalStyles, Theme } from '../Styles';

import Home from '../../Pages/Home';
import NovelDetails from '../../Pages/NovelDetails';
import NotFound from '../../Pages/NotFound';
import Footer from '../Footer';

function App() {
  return (
    <Router>
      <Theme>
        <GlobalStyles />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/novel/:novelName" children={<NovelDetails />} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer title={'Novels'} />
      </Theme>
    </Router>
  );
}

export default App;
