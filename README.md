# worldcuppy-prisma

```mutation {
  upsertCompetition(where: {apiId: 2014}, create: {
    								apiId: 2014,
                    name: "Seria C",
                    area: "Italy",
                    seasons: {create: [
                        {
                          apiId: 3,
                          startDate: "2018-01-01",
                          endDate: "2018-01-01",
                          currentMatchday: 1
                          matches: {create : null}
                        },
                      ],
                    }}, update: {
    								apiId: 2011,
                    name: "Seria A",
                    area: "Italy",
                    seasons: {create: [
                        {
                          apiId: 4,
                          startDate: "2018-01-01",
                          endDate: "2018-01-01",
                          currentMatchday: 1
                        },
                    ]}}) {

      id
      apiId
      name
      area
      seasons {
        id
        apiId
        startDate
        endDate
        currentMatchday
      }
    }
}
```

`https://www.prisma.io/docs/reference/prisma-api/mutations-ol0yuoz6go#nested-mutations`
