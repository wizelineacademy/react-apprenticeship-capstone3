import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './pages/Home/Home';
import NotFoundPage from './pages/NotFound/NotFound';
import ArchivePage from './pages/Archive/Archive';
import LoginPage from './pages/Login/Login';
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/archive">
              <ArchivePage />
            </Route>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
