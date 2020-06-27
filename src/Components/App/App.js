import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useState from 'global-hook-store';

import { GlobalStyles, Theme } from '../Styles';

import GlobalState from '../GlobalState';

import Home from '../../Pages/Home';
import NovelDetails from '../../Pages/NovelDetails';
import NotFound from '../../Pages/NotFound';
import SingIn from '../../Pages/SingIn';

function App() {
  const { state } = useState(GlobalState);

  return (
    <Router>
      <Theme>
        <GlobalStyles />
        {state.auth === 'login' ? (
          <Switch>
            <Route exact path="/" component={SingIn} />
            <Route exact path="/singin" component={SingIn} />
            <Route path="*" component={NotFound} />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/novel/:novelName" children={<NovelDetails />} />
            <Route path="*" component={NotFound} />
          </Switch>
        )}
      </Theme>
    </Router>
  );
}

export default App;
