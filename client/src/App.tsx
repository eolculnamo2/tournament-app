import React, { useReducer, Reducer, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import pages from './pages';
import {
  IPathComponent,
  IGlobalState,
  IAction,
} from '../../constants/interfaces';
import GlobalContext from './contexts/global/GlobalContext';
import GlobalState from './contexts/global/GlobalState';
import reducer from './contexts/reducer';
import { Header, Footer } from './components';
import { postData } from './helpers/api';

const history = createBrowserHistory();

function App(): JSX.Element {
  const [state, dispatch] = useReducer<Reducer<IGlobalState, IAction>>(
    reducer,
    GlobalState
  );
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  (async () => {
    const response = await postData('/authenticate/checkLogin');
    setLoggedIn(response.loggedIn);
  })();

  function handleRedirects(props: any, route: IPathComponent) {
    if (loggedIn && route.path !== '/') {
      return <route.component {...props} />;
    } else if (loggedIn && route.path === '/') {
      return <Redirect to="/dashboard" />;
    } else if (!loggedIn && route.path !== '/') {
      return <Redirect to="/" />;
    }
    return <route.component />;
  }

  return (
    <>
      <GlobalContext.Provider value={{ state, dispatch }}>
        <Router history={history}>
          <div className="footer-at-bottom">
            <Header />
            <Switch>
              {pages.map((route: IPathComponent, i: number) => {
                return (
                  <Route
                    exact
                    path={route.path}
                    key={'route' + i}
                    render={props => handleRedirects(props, route)}
                  />
                );
              })}
            </Switch>
          </div>
          <Footer />
        </Router>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
