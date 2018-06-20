import { GraphQLServer } from 'graphql-yoga';
import mocks from './mocks/';
require('dotenv').config();
import fetch from 'node-fetch';

const baseUrl = process.env.REST_FOOTBALL_DATA;
const key = process.env.REST_FOOTBALL_DATA_KEY;

const resolvers = {
  Query: {
    fixtures: (parent, args) => {
      const { competitionId } = args;
      return fetch(`${baseUrl}/competitions/${competitionId}/fixtures`, {
        headers: { 'X-Auth-Token': key },
      }).then(res => res.json());
    },
    fixture: (parent, args) => {
      const { id } = args;
      return fetch(`${baseUrl}/fixtures/${id}`, {
        headers: { 'X-Auth-Token': key },
      }).then(res => res.json());
    },
  },
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  mocks: process.env.MOCKS === 'true' ? mocks : null,
});

server.start(() => {
  console.log(`The server is running on http://localhost:4000`);
});
