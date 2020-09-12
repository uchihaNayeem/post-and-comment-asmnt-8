import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import NoMatch from './component/NoMatch/NoMatch';
import PostDetails from './component/PostDetails/PostDetails';
import Header from './component/Header/Header';

function App() {
  return (

    <div>

    <Header></Header>
   

    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>


        <Route path="/comments/:postId">
          <PostDetails></PostDetails>
        </Route>


        <Route path="*">
          <NoMatch></NoMatch>
          
        </Route>
      </Switch>
    </Router>

    </div>
  );
}

export default App;
