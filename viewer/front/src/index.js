import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import queryString from 'query-string';
import App from './App'

ReactGA.initialize('UA-154887561-1');
const history = require("history").createBrowserHistory();
history.listen(({ pathname }) => {
  ReactGA.set({ page: pathname });
  ReactGA.pageview(pathname);
});

ReactDOM.render(
  <Router>
    <Route render={ (props) => 
      <App 
          location={props.location} qs={queryString.parse(props.location.search)}
      />
    }/>
  </Router>, 
  document.getElementById("root")
);