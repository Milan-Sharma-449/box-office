import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import Starred from './pages/Starred';
import Show from './Components/Show';

function App() {
  return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/starred">
          <Starred />
        </Route>

        <Route exact path="/show/:id">
          <Show />
        </Route>

        <Route>
          <div>
            Not Found
          </div>
        </Route>
      </Switch>
  )
}

export default App;
