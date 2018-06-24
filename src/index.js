import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from 'prisma-binding';
import mocks from './mocks/';
require('dotenv').config();
import fetch from 'node-fetch';

const baseUrl = process.env.REST_FOOTBALL_DATA;
const key = process.env.REST_FOOTBALL_DATA_KEY;

const resolvers = {
  Query: {
    fixtures: (parent, args) => {
      const { competitionId } = args;
      delete args.competitionId;
      const url = new URL(`${baseUrl}/competitions/${competitionId}/fixtures`),
        params = args;
        Object.keys(params).forEach(key =>
        url.searchParams.append(key, params[key])
      );
      return fetch(url, {
        headers: { 'X-Auth-Token': key, 'X-Response-Control': 'minified' },
      })
        .then(res => res.json())
        .then(json => {return json.fixtures})
      ;
    },
    fixture: (parent, args) => {
      const { id } = args;
      return fetch(url, {
        headers: { 'X-Auth-Token': key },
      }).then(res => console.log(res.json()));
    },
    pick: (parent, args, ctx, info) => {
      const { id } = args;
      return ctx.prisma.query.pick({ where: { id } }, info)
    },
    picks: (parent, args, ctx, info) => {
      return ctx.prisma.query.picks({}, info)
    },
    user: (parent, args, ctx, info) => {
      const { id } = args;
      return ctx.prisma.query.user({ where: { id } }, info)
    },
    users: (parent, args, ctx, info) => {
      return ctx.prisma.query.users({}, info)
    }
  },
  Pick: () => ({
    user: parent => {
      const { user } = parent;
      console.log(parent)
      console.log(user)
      return ctx.prisma.query.user({ where: { user } }, info)
    },
  }),
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
