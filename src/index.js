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
      // The competition id should be removed from the args below
      // This is not working/tested code
      // https://fetch.spec.whatwg.org/#fetch-api
      // This may not be implemented in node-fetch
      const url = new URL(`${baseUrl}/competitions/${competitionId}/fixtures`),
        params = { args };
      Object.keys(params).forEach(key =>
        url.searchParams.append(key, params[key])
      );
      return fetch(url, {
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
