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
    user: forwardTo('prisma'),
    fd_competitions: () => {
      return fetch(`${baseUrl}/competitions/`, {
        headers: { 'X-Auth-Token': key },
      }).then(res => res.json());
    },
    fd_competition: (_, args) => {
      const { id } = args;
      return fetch(`${baseUrl}/competitions/${id}`, {
        headers: { 'X-Auth-Token': key },
      }).then(res => res.json());
    },
    fd_matches: (_, args) => {
      const { competitionId } = args;
      return fetch(`${baseUrl}/competitions/${competitionId}/matches`, {
        headers: { 'X-Auth-Token': key },
      }).then(res => res.json());
    },
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
