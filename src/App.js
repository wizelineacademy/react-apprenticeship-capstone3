import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Provider } from './context';
import HomePage from './pages/Home/Home';
import NotFoundPage from './pages/NotFound/NotFound';
import ArchivePage from './pages/Archive/Archive';
import LoginPage from './pages/Login/Login';
import { ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme, GlobalStyle } from './themes';
import { ThemeContext } from './context/themeContext';

const App = () => {
  const [ theme, toogleTheme ] = useState('dark');

  return (
    <div className="App">
      <Provider>
        <ThemeContext.Provider value={{ theme, toogleTheme }}>
          <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
            <GlobalStyle />
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
          </ThemeProvider>
        </ThemeContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
