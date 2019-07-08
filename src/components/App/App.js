import React from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import { GENERAL_ROUTES } from '../../constants';
import Home from '../Home';
import RegisterPlayers from '../RegisterPlayers';
import GameField from '../GameField';
import GameStatistics from '../GameStatistics';

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path={GENERAL_ROUTES.home} component={Home} />
        <Route
          exact
          path={GENERAL_ROUTES.registerPlayers}
          component={RegisterPlayers}
        />
        <Route exact path={GENERAL_ROUTES.play} component={GameField} />
        <Route
          exact
          path={GENERAL_ROUTES.statistics}
          component={GameStatistics}
        />
        <Redirect to={GENERAL_ROUTES.home} />
      </Switch>
    </div>
  );
};

export default App;
