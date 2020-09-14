const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const gql = require('graphql-tag');
//const { buildSchema } = require('graphql');
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} = require('graphql');
//repository is where mock data resides
const  UserRepository = require('./user-repository');
const userRepository = new UserRepository();
const AddressRepository = require('./address-repository');
const addrRepository = new AddressRepository();

const AddressType = new GraphQLObjectType({
  name: 'Address',
  fields: {
    street: {
      type: GraphQLString
    },
    suite: {
      type: GraphQLString
    },
    city: {
      type: GraphQLString
    },
    zipcode: {
      type: GraphQLString
    }
  }
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    username: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    phone: {
      type: GraphQLString
    },
    website: {
      type: GraphQLString
    },
    address: {
      type: AddressType,
      resolve: (user) => {
        return addrRepository.findAddrById(user.id);
      }
    }
  }
});

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve: () => {
        return userRepository.findAll();
      }
    },
    user: {
      type: UserType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt)
        }
      },
      resolve: (user, args) => {
        return userRepository.findUserById(args.id);
      }
    }
  }
});

const schema = new GraphQLSchema({
  query: QueryType
});

const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
  //rootValue: root,
  graphiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
