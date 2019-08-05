import React from 'react';
import { Switch, Route } from 'react-router';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import pages from './pages';
import { IPathComponent } from '../../constants/interfaces';

const history = createBrowserHistory();

function App(): JSX.Element {
  return (
    <>
      <Router history={history}>
        <Switch>
          {pages.map((route: IPathComponent) => {
            return (
              <Route exact path={route.path} component={route.component} />
            );
          })}
        </Switch>
      </Router>
    </>
  );
}

export default App;
