import React from 'react';
import Nav from './Components/nav'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import PageRenderer from './page-renderer'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" render={() => <Redirect to="/home" />} />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
