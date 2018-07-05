import { GraphQLServer } from 'graphql-yoga';
import { Prisma, forwardTo } from 'prisma-binding';
import mocks from './mocks/';
import fetch from 'node-fetch';

require('dotenv').config();
const querystring = require('querystring');

const baseUrl = process.env.REST_FOOTBALL_DATA;
const key = process.env.REST_FOOTBALL_DATA_KEY;

const resolvers = {
  Query: {
    competitions: forwardTo('prisma'),
    competition: forwardTo('prisma'),
    //picks: forwardTo('prisma'),
    //pick: forwardTo('prisma'),
    //users: forwardTo('prisma'),
    user: forwardTo('prisma'),
  },
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  mocks: process.env.MOCKS === 'true' ? mocks : null,
  context: req => ({
    req,
    prisma: new Prisma({
      typeDefs: './src/generated/prisma.graphql',
      endpoint: process.env.PRISMA_ENDPOINT,
      debug: true,
    }),
  }),
});

server.start(() => {
  console.log(`The server is running on http://localhost:4000`);
});
