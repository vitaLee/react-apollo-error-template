import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} from 'graphql';

const PersonType = new GraphQLObjectType({
  name: 'Person',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  },
});

const peopleData = [
  { id: 1, name: 'John Smith' },
  { id: 2, name: 'Sara Smith' },
  { id: 3, name: 'Budd Deey' },
];

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    people: {
      type: new GraphQLList(PersonType),
      resolve: () => peopleData,
    },
  },
});


let nextPersonId = 3;

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createPerson: {
      type: PersonType,
      resolve: () => {
        nextPersonId++;
        let newPerson = { id: nextPersonId, name: `John Doe ${nextPersonId}` };
        peopleData.push(newPerson);
        return newPerson;
      },
    },
  },
});

export const schema = new GraphQLSchema({ query: QueryType, mutation: MutationType });
