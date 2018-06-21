const faker = require('faker');
const startOfYesterday = require('date-fns/start_of_yesterday');
const startOfTomorrow = require('date-fns/start_of_tomorrow');
const addDays = require('date-fns/add_days');
const subDays = require('date-fns/sub_days');
const format = require('date-fns/format');

const today = new Date();
const yesterday = startOfYesterday();
const tomorrow = startOfTomorrow();

const currentHour = today.getHours();
const currentMin = today.getMinutes();

const fixtures = [];

fixtures.push(
  {
    id: '165069',
    homeTeamName: 'Russia',
    awayTeamName: 'Saudi Arabia',
    matchday: 1,
    gameday: 1,
    date: format(
      faker.date
        .between(subDays(yesterday, 2), subDays(yesterday, 2))
        .setHours(15, 0, 0),
      'YYYY-MM-DDTHH:mm:ss[Z]'
    ),
    result: {
      goalsHomeTeam: 5,
      goalsAwayTeam: 0,
    },
    status: 'FINISHED',
  },
  {
    id: '165084',
    homeTeamName: 'Egypt',
    awayTeamName: 'Uruguay',
    matchday: 2,
    gameday: 1,
    date: format(
      faker.date
        .between(subDays(yesterday, 1), subDays(yesterday, 1))
        .setHours(13, 0, 0),
      'YYYY-MM-DDTHH:mm:ss[Z]'
    ),
    result: {
      goalsHomeTeam: 0,
      goalsAwayTeam: 1,
    },
    status: 'FINISHED',
  },
  {
    id: '165083',
    homeTeamName: 'Morocco',
    awayTeamName: 'Iran',
    matchday: 2,
    gameday: 1,
    date: format(
      faker.date
        .between(subDays(yesterday, 1), subDays(yesterday, 1))
        .setHours(16, 0, 0),
      'YYYY-MM-DDTHH:mm:ss[Z]'
    ),
    result: {
      goalsHomeTeam: 0,
      goalsAwayTeam: 1,
    },
    status: 'FINISHED',
  },
  {
    id: '165076',
    homeTeamName: 'Portugal',
    awayTeamName: 'Spain',
    matchday: 2,
    gameday: 1,
    date: format(
      faker.date
        .between(subDays(yesterday, 1), subDays(yesterday, 1))
        .setHours(19, 0, 0),
      'YYYY-MM-DDTHH:mm:ss[Z]'
    ),
    result: {
      goalsHomeTeam: 3,
      goalsAwayTeam: 3,
    },
    status: 'FINISHED',
  },
  {
    id: '165072',
    homeTeamName: 'France',
    awayTeamName: 'Australia',
    matchday: 3,
    gameday: 1,
    date: format(
      faker.date.between(yesterday, yesterday).setHours(11, 0, 0),
      'YYYY-MM-DDTHH:mm:ss[Z]'
    ),
    result: {
      goalsHomeTeam: 2,
      goalsAwayTeam: 1,
    },
    status: 'FINISHED',
  },
  {
    id: '165073',
    homeTeamName: 'Argentina',
    awayTeamName: 'Iceland',
    matchday: 3,
    gameday: 1,
    date: format(
      faker.date.between(yesterday, yesterday).setHours(13, 0, 0),
      'YYYY-MM-DDTHH:mm:ss[Z]'
    ),
    result: {
      goalsHomeTeam: 1,
      goalsAwayTeam: 1,
    },
    status: 'FINISHED',
  },
  {
    id: '165071',
    homeTeamName: 'Peru',
    awayTeamName: 'Denmark',
    matchday: 3,
    gameday: 1,
    date: format(
      faker.date.between(yesterday, yesterday).setHours(15, 0, 0),
      'YYYY-MM-DDTHH:mm:ss[Z]'
    ),
    result: {
      goalsHomeTeam: 0,
      goalsAwayTeam: 1,
    },
    status: 'FINISHED',
  },
  {
    id: '165074',
    homeTeamName: 'Croatia',
    awayTeamName: 'Nigeria',
    matchday: 4,
    gameday: 1,
    date: format(
      faker.date.between(yesterday, yesterday).setHours(18, 0, 0),
      'YYYY-MM-DDTHH:mm:ss[Z]'
    ),
    result: {
      goalsHomeTeam: 2,
      goalsAwayTeam: 0,
    },
    status: 'FINISHED',
  },
  {
    id: '165075',
    homeTeamName: 'Costa Rica',
    awayTeamName: 'Serbia',
    matchday: 3,
    gameday: 1,
    date: format(
      faker.date.between(today, today).setHours(currentHour - 3, currentMin, 0),
      'YYYY-MM-DDTHH:mm:ss[Z]'
    ),
    result: {
      goalsHomeTeam: 0,
      goalsAwayTeam: 1,
    },
    status: 'FINISHED',
  },
  {
    id: '165082',
    homeTeamName: 'Germany',
    awayTeamName: 'Mexico',
    matchday: 3,
    gameday: 1,
    date: format(
      faker.date.between(today, today).setHours(currentHour - 1, currentMin, 0),
      'YYYY-MM-DDTHH:mm:ss[Z]'
    ),
    result: {
      goalsHomeTeam: 0,
      goalsAwayTeam: 1,
    },
    status: 'IN_PLAY',
  },
  {
    id: '165070',
    homeTeamName: 'Brazil',
    awayTeamName: 'Switzerland',
    matchday: 3,
    gameday: 1,
    date: format(
      faker.date.between(today, today).setHours(currentHour + 1, currentMin, 0),
      'YYYY-MM-DDTHH:mm:ss[Z]'
    ),
    result: {
      goalsHomeTeam: 2,
      goalsAwayTeam: 0,
    },
    status: 'TIMED',
  }
);

export default fixtures;
