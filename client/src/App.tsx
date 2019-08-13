import React, { useReducer, Reducer } from 'react';
import { Switch, Route } from 'react-router';
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

const history = createBrowserHistory();

function App(): JSX.Element {
  const [state, dispatch] = useReducer<Reducer<IGlobalState, IAction>>(
    reducer,
    GlobalState
  );

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
                    component={route.component}
                    key={'route' + i}
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
