import seasons from './data-seasons';
const competitions = [];

competitions.push(
  {
    id: '2d3bdfdf-7fea-4b07-8337-ca44b2d620a9',
    apiId: 2000,
    name: 'World Cup',
    area: 'World',
    seasons: seasons.filter(s => s.competitionId === 2000),
  },
  {
    id: '8ba2b9f0-ead2-4c28-ba84-47273bea3c53',
    apiId: 2021,
    name: 'Premier League',
    area: 'England',
    seasons: seasons.filter(s => s.competitionId === 2021),
  }
);

export default competitions;
