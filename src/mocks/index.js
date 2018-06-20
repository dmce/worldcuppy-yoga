const faker = require('faker');
const startOfYesterday = require('date-fns/start_of_yesterday');
const startOfTomorrow = require('date-fns/start_of_tomorrow');
const addDays = require('date-fns/add_days');
const subDays = require('date-fns/sub_days');

const today = new Date();
const yest = startOfYesterday();
const tom = startOfTomorrow();

const finishedFixtures = 5;
const inPlayFixtures = 5;
const timedFixtures = 5;

const finishedTeams = [
  'Aberdeen',
  'Celtic',
  'Dundee',
  'Dundee United',
  'Dunfermline Athletic',
  'Falkirk',
  'Gretna',
  'Hamilton Academical',
  'Heart of Midlothian',
  'Hibernian',
];
const inPlayTeams = finishedTeams.slice().reverse();
const timedTeams = finishedTeams.slice();

const fixtures = [];

// Fake Finished
for (let i = 0; i < finishedFixtures; i++) {
  fixtures.push({
    id: faker.random.number({ min: 16000, max: 17000 }),
    homeTeamName: finishedTeams.pop(),
    awayTeamName: finishedTeams.pop(),
    matchday: faker.random.number({ min: 1, max: 1 }),
    date: faker.date.between(subDays(yest, 1), yest),
    result: {
      goalsHomeTeam: faker.random.number({ min: 0, max: 5 }),
      goalsAwayTeam: faker.random.number({ min: 0, max: 5 }),
    },
    status: 'FINISHED',
  });
}

// Fake In Play
for (let i = 0; i < inPlayFixtures; i++) {
  fixtures.push({
    id: faker.random.number({ min: 16000, max: 17000 }),
    homeTeamName: inPlayTeams.pop(),
    awayTeamName: inPlayTeams.pop(),
    matchday: faker.random.number({ min: 2, max: 2 }),
    date: faker.date.between(today, today),
    result: {
      goalsHomeTeam: faker.random.number({ min: 1, max: 5 }),
      goalsAwayTeam: faker.random.number({ min: 1, max: 5 }),
    },
    status: 'IN_PLAY',
  });
}

// Fake Timed
for (let i = 0; i < timedFixtures; i++) {
  fixtures.push({
    id: faker.random.number({ min: 16000, max: 17000 }),
    homeTeamName: timedTeams.pop(),
    awayTeamName: timedTeams.pop(),
    matchday: faker.random.number({ min: 3, max: 3 }),
    date: faker.date.between(tom, addDays(tom, 1)),
    result: {
      goalsHomeTeam: null,
      goalsAwayTeam: null,
    },
    status: 'TIMED',
  });
}

const users = [
  { id: 1, username: faker.name.firstName(1) },
  { id: 2, username: faker.name.firstName(1) },
  { id: 3, username: faker.name.firstName(0) },
];

const mocks = {
  Query: () => ({
    fixtures: () => fixtures,
    users: () => users,
  }),
};

export default mocks;
