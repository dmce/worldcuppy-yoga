import fixtures from './data-fixtures';
import users from './data-users';
import picks from './data-picks';

const mocks = {
  Query: () => ({
    fixtures: (parent, args) => {
      fixtures;
    },
    fixture: (parent, args) => {
      const { id } = args;
      return fixtures.find(f => f.id === id);
    },
    users: () => users,
    user: (parent, args) => {
      const { id } = args;
      return users.find(f => f.id === id);
    },
    picks: () => picks,
  }),
  Fixture: () => ({
    picks: parent => {
      const { id } = parent;
      return picks.filter(p => p.fixtureId === id);
    },
  }),
  User: () => ({
    picks: parent => {
      const { id } = parent;
      return picks.filter(p => p.userId === id);
    },
  }),
};

export default mocks;
