import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { GlobalStyles, Theme } from '../Styles';

import Home from '../Home';
import NovelDetails from '../NovelDetails';
import NotFound from '../NotFound';

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
      </Theme>
    </Router>
  );
}

export default App;
