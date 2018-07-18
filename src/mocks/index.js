import fixtures from './data-fixtures';
import users from './data-users';
import competitions from './data-competitions';
import fd_competitions from './data-fd-competitions';
import fd_matches from './data-fd-matches';

const isBefore = require('date-fns/is_before');
const isAfter = require('date-fns/is_after');

const filterFixtures = function(value, index, ar) {
  if (
    (this.timeFrameStart ? isAfter(value.date, this.timeFrameStart) : true) &&
    (this.timeFrameEnd ? isBefore(value.date, this.timeFrameEnd) : true) &&
    (this.matchday ? this.matchday : true)
  )
    return true;

  return false;
};

const mocks = {
  Query: () => ({
    fd_competitions: () => {
      return fd_competitions;
    },
    fd_competition: (_, args) => {
      const { id } = args;
      return fd_competitions.competitions.find(c => c.id === id);
    },
    fd_matches: (_, args) => {
      const { competitionId } = args;
      return fd_matches.find(m => m.competition.id === competitionId);
    },
    competitions: (_, args) => {
      const { where } = args;
      return competitions.filter(c => c.apiId === where.apiId);
    },
    //   fixtures: (parent, args) => {
    //     return fixtures.filter(filterFixtures, args);
    //   },
    //   fixture: (parent, args) => {
    //     const { id } = args;
    //     return fixtures.find(f => f.id === id);
    //   },
    //   users: () => users,
    //   user: (parent, args) => {
    //     const { where } = args;
    //     return users.find(f => f.id === where.id);
    //   },
    //   picks: () => picks,
    //   pick: (parent, args) => {
    //     const { where } = args;
    //     return picks.find(f => f.id === where.id);
    //   },
    // }),
    // Fixture: () => ({
    //   picks: parent => {
    //     const { id } = parent;
    //     return picks.filter(p => p.fixtureId === id);
    //   },
    // }),
    // Pick: () => ({
    //   user: parent => {
    //     const { user_id } = parent;
    //     return users.find(u => u.id === user_id);
    //   },
    // }),
    // User: () => ({
    //   picks: parent => {
    //     const { id } = parent;
    //     return picks.filter(p => p.user_id === id);
    //   },
  }),
  Mutation: () => ({
    createCompetition: (_, args) => {
      const { data } = args;
      // The create is needed by prisma. Removing for mocks
      data.seasons = data.seasons.create;
      competitions.push(data);
      return data;
    },
  }),
};

export default mocks;
