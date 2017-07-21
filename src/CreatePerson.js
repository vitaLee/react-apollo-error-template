import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import { peopleQuery } from './App';

const createPersonMutation = gql`
  mutation CreatePerson {
    createPerson {
      id
      name
    }
  }
`;

class CreatePerson extends Component {
  createPerson = () => {
    return this.props.mutate({
      update: (store, response) => {
        const newPerson = response.data.createPerson;
        const data = store.readQuery({ query: peopleQuery });
        data.people.push(newPerson);
        store.writeQuery({ query: peopleQuery, data: data });
      }
    });
  }

  render() {
    return (<div>
      <div>Create Person</div>
      <button onClick={this.createPerson}>Create Person</button>
    </div>
    );
  }
};

export default graphql(createPersonMutation)(CreatePerson);

