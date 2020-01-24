import React from 'react';
import './app.css';
import { Switch, Route } from 'react-router-dom';
import MainPage from '../mainPage/mainPage';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, Reducer} from 'redux';
import reducer from '../../redux/reducers/index';
import thunkMiddleware from 'redux-thunk';
import ProFormaPage from '../proFormaPage/proFormaPage';
import InvestigationBuildPage from '../investigationBuildPage/investigationBuildPage';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

const App: React.FC = () => {
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary: {
            main: "#0B3A7E"
          }
        }
      }),
    [],
  );

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/brick-create">
            <ProFormaPage />
          </Route>
          <Route path="/brick-build">
            <InvestigationBuildPage />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </ThemeProvider>
    </Provider>
  );
}

export default App;