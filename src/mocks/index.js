import fixtures from './data-fixtures';
import users from './data-users';
import picks from './data-picks';

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
    fixtures: (parent, args) => {
      return fixtures.filter(filterFixtures, args);
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
