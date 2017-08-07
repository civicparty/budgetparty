const serviceTimeChoices = [
  {
    id: 1,
    title: 'Peak Hours',
    times: '6-9am & 4-7pm',
    operatingHoursPerWeek: 30,
    desc: 'TODO: goes around and around',
    frequencyChoices: [
      {
        id: 0,
        title: '15 min',
        value: 15,
        selected: true,
      }, {
        id: 1,
        title: '10 min',
        value: 10,
      },
    ],
  }, {
    id: 2,
    title: 'Off Peak Hours',
    times: '9am-4pm & 7-10pm',
    operatingHoursPerWeek: 50,
    desc: 'TODO: connect the dots',
    frequencyChoices: [
      {
        id: 0,
        title: 'No service',
        value: null,
        selected: true,
      }, {
        id: 1,
        title: '15 min',
        value: 15,
      }, {
        id: 2,
        title: '10 min',
        value: 10,
      },
    ],
  }, {
    id: 3,
    title: 'Weekend',
    times: '8am-10pm',
    operatingHoursPerWeek: 28,
    desc: 'TODO: in it for the long haul',
    frequencyChoices: [
      {
        id: 0,
        title: 'No service',
        value: null,
        selected: true,
      }, {
        id: 1,
        title: '30 min',
        value: 30,
      }, {
        id: 2,
        title: '15 min',
        value: 15,
      },
    ],
  }, {
    id: 4,
    title: 'Late Night',
    times: '10pm-4am',
    operatingHoursPerWeek: 12,
    desc: 'TODO: in it for the long haul',
    frequencyChoices: [
      {
        id: 0,
        title: 'No service',
        value: null,
        selected: true,
      }, {
        id: 1,
        title: '30 min',
        value: 30,
      }, {
        id: 2,
        title: '20 min',
        value: 20,
      },
    ],
  },
]

export default serviceTimeChoices
