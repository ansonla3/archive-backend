import { ApolloServer, gql } from 'apollo-server-micro';
import resolvers from './resolvers';
import typeDefs from './typeDefs';
import Cors from "micro-cors";
import knex from "knex";

const apolloServer = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context: () => {
      return {};
    }
});

export const config = {
    api: {
      bodyParser: false,
    },
};

const cors = Cors({
  allowMethods: ["POST", "OPTIONS"]
});


const handler = apolloServer.createHandler({ path: '/api/graphql' });

export default cors(handler);

