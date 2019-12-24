import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'  
import ReactGA from 'react-ga';

ReactGA.initialize('UA-154887561-1');
const history = require("history").createBrowserHistory();
history.listen(({ pathname }) => {
  ReactGA.set({ page: pathname });
  ReactGA.pageview(pathname);
});

ReactDOM.render(
  <App/>, 
  document.getElementById("root")
);