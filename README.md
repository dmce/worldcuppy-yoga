# worldcuppy-prisma

```mutation {
  createPick(data: {
    fixtureId: 165069,
    choice: "Russia",
    gameday: 1,
    matchday: 1,
    points: 3,
    resolved: true,
    user: {
      connect: {
        id: "cjivpp3xg000f0713aisep9th"
      }
    }
  }) {
    id
  }
}
```

```
query {
  user(where: {id:"cjiwx11nz000m07865xqwk9es"}) {
    name
  }
}
```

```
query {
  pick(where: {id:"cjiwx1y1z000w07864zj2woq8"}) {
    choice
    user {
      name
    }
  }
}
```

`https://www.prisma.io/docs/reference/prisma-api/mutations-ol0yuoz6go#nested-mutations`
