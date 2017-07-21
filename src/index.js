import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider } from 'react-apollo';
import { networkInterface } from './graphql/networkInterface';
import { App } from './App';
import CreatePerson from './CreatePerson';
import { Router, Route, Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory'

const client = new ApolloClient({ networkInterface });

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={createHistory()}>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/new' component={CreatePerson} />
      </Switch>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
);
