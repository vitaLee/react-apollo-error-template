import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import  CreatePerson from './CreatePerson';

const peopleQuery = gql`
  query PeopleQuery {
    people {
      id
      name
    }
  }
`;


class App extends Component {
  render() {
    const { data: { loading, people } } = this.props;
    return (
      <main>
        <header>
          <h1>Apollo Client Error Template</h1>
          <p>
            This is a template that you can use to demonstrate an error in Apollo Client.
            Edit the source code and watch your browser window reload with the changes.
          </p>
          <p>
            The code which renders this component lives in <code>./src/App.js</code>.
          </p>
          <p>
            The GraphQL schema is in <code>./src/graphql/schema</code>.
            Currently the schema just serves a list of people with names and ids.
          </p>
        </header>
        {loading ? (
          <p>Loading…</p>
        ) : (
          <ul>
            {people.map(person => (
              <li key={person.id}>
                {person.name}
              </li>
            ))}
          </ul>
        )}
        <CreatePerson />
      </main>
    );
  }
}

const AppWithData = graphql(peopleQuery)(App);

export { AppWithData as App, peopleQuery };
