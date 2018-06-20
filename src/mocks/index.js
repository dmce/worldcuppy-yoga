var faker = require('faker');

const mocks = {
  Query: () => ({
    fixtures: () => [
      {
        id: faker.random.number({ min: 16000, max: 17000 }),
        homeTeamName: faker.address.country,
        awayTeamName: faker.address.country,
        matchday: faker.random.number({ min: 1, max: 5 }),
        date: faker.date.between('2018-06-15', '2018-06-18'),
      },
    ],
    result: () => ({
      goalsHomeTeam: faker.random.number({ min: 1, max: 5 }),
      goalsAwayTeam: faker.random.number({ min: 1, max: 5 }),
    }),
  }),
};

export default mocks;
