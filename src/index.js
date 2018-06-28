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
    fixtures: (parent, args) => {
      const { competitionId } = args;
      delete args.competitionId;

      const url = `${baseUrl}/competitions/${competitionId}/fixtures`;
      const qs =
        Object.keys(args).length > 0 ? `?${querystring.stringify(args)}` : '';

      return fetch(url + qs, {
        headers: { 'X-Auth-Token': key, 'X-Response-Control': 'minified' },
      })
        .then(res => res.json())
        .then(json => {
          return json.fixtures;
        });
    },
    fixture: (parent, args) => {
      const { id } = args;
      const url = `${baseUrl}/competitions/fixtures/${id}`;

      return fetch(url, {
        headers: { 'X-Auth-Token': key },
      }).then(res => console.log(res.json()));
    },
    picks: forwardTo('prisma'),
    pick: forwardTo('prisma'),
    users: forwardTo('prisma'),
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
      typeDefs: './src/generated/schema.graphql',
      endpoint: process.env.PRISMA_ENDPOINT,
      debug: true,
    }),
  }),
});

server.start(() => {
  console.log(`The server is running on http://localhost:4000`);
});
