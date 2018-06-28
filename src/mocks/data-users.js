const users = [];

users.push(
  {
    id: '1',
    name: 'twitter|user1',
    picks: [
      {
        id: '1',
        fixtureId: 165069,
        choice: 'Russia',
        gameday: 1,
        matchday: 1,
        points: 3,
        resolved: true,
      },
      {
        id: '3',
        fixtureId: 165084,
        choice: 'Egypt',
        gameday: 2,
        matchday: 1,
        points: 0,
        resolved: true,
      },
    ],
  },
  {
    id: '2',
    name: 'github|user2',
  },
  {
    id: '3',
    name: 'twitter|3',
  },
  {
    id: 'facenook|4',
    name: 'User Four',
  },
  {
    id: 'windowslive|5',
    name: 'User Five',
  }
);

export default users;
