import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route} from "react-router-dom";
import queryString from 'query-string';
import App from './App'  
import ReactGA from 'react-ga';
import createBrowserHistory from 'history/createBrowserHistory';

ReactGA.initialize('UA-154887561-1');
const history = createBrowserHistory();
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