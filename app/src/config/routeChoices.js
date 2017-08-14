const routeChoices = [
  {
    id: 1,
    title: 'Circulator',
    desc: 'A Circulator route links major destinations within a concentrated area like downtown.',
    image: 'routes/circulator_icon.png',
    distance: 2,
    budget: 150000000,
    targetRidership: 10000,
  }, {
    id: 2,
    title: 'Connector',
    desc: 'A Connector route links activity centers within the city.',
    image: 'routes/connector_icon.png',
    distance: 5,
    budget: 500000000,
    targetRidership: 10000,
  }, {
    id: 3,
    title: 'Commuter',
    desc: 'A Commuter route connects regional communities to the central core.',
    image: 'routes/commuter_icon.png',
    distance: 15,
    budget: 500000000,
    targetRidership: 10000,
  },
]

export default routeChoices;
