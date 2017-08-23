const serviceTimeChoices = [
  {
    id: 1,
    title: 'Peak Hours',
    times: '6-9am & 4-7pm',
    operatingHoursPerWeekday: 6,
    operatingHoursPerWeek: 30,
    frequencyChoices: [
      {
        id: 0,
        title: '15 min',
        value: 15,
        selected: true,
        quote: '"When I leave work, if I miss it I don’t have to wait too long -- but I can’t just walk out my door and expect it to come by soon. It needs to be more frequent."',
      }, {
        id: 1,
        title: '10 min',
        value: 10,
        quote: '“I can get to and from work easily. I can walk out my door and hardly wait at all! But it costs so much to run. Transit should be cheaper."',
      },
    ],
  }, {
    id: 2,
    title: 'Off Peak Hours',
    times: '9am-4pm & 7-10pm',
    operatingHoursPerWeekday: 10,
    operatingHoursPerWeek: 50,
    desc: 'TODO: connect the dots',
    frequencyChoices: [
      {
        id: 0,
        title: 'No service',
        value: null,
        selected: true,
        quote: '"I wish the bus ran throughout the day so it better fits my schedule. Not everyone has a 9-5."',
      }, {
        id: 1,
        title: '15 min',
        value: 15,
        quote: '"I can go run errands or get to my mani-pedi appointments during the middle of the day. All of the vehicles are empty though – like, nobody seems to ride it. People in Austin must not be transit savvy."',
      }, {
        id: 2,
        title: '10 min',
        value: 10,
        quote: '"I love how I can be very flexible with my schedule and leave early if I have to take my kid to the doctor. Sometimes I’m the only one on the bus though which must be lonely for the driver."',
      },
    ],
  }, {
    id: 3,
    title: 'Weekend',
    times: '8am-10pm',
    operatingHoursPerWeek: 28,
    operatingHoursPerWeekday: 0,
    desc: 'TODO: in it for the long haul',
    frequencyChoices: [
      {
        id: 0,
        title: 'No service',
        value: null,
        selected: true,
        quote: '"I wish the bus ran on the weekends so I could use it to get to Barton Springs."',
      }, {
        id: 1,
        title: '30 min',
        value: 30,
        quote: '"I love riding to the park or to catch a concert on the weekend. And it runs late enough that I can still get home after the show. It just doesn’t seem like anyone else is riding - like Austin doesn’t know they have transit here."',
      }, {
        id: 2,
        title: '15 min',
        value: 15,
        quote: '"It’s so nice to be able to ride transit all week and not be driving all the time! All the people that are hiking the greenbelt and riding do make it smell a little…funky."',
      },
    ],
  }, {
    id: 4,
    title: 'Late Night',
    times: '10pm-4am',
    operatingHoursPerWeek: 12,
    operatingHoursPerWeekday: 0,
    desc: 'TODO: in it for the long haul',
    frequencyChoices: [
      {
        id: 0,
        title: 'No service',
        value: null,
        selected: true,
        quote: '"I wish it ran later at night so I could go to live shows without taking an Uber or having to assign a designated driver."',
      }, {
        id: 1,
        title: '30 min',
        value: 30,
        quote: '"I can grab dinner or drinks with my friends late at night without rushing home -- and without getting a DUI.  It can get noisy though.”',
      }, {
        id: 2,
        title: '20 min',
        value: 20,
        quote: '"My friends and I like to go with the flow and it’s easy to hop off and get to a show or club in no time. The later the night though the rowdier the crowd gets and I’ve already spent enough of the evening having to fend off "moshers" that I don’t need another one while I’m trying to ride home."',
      },
    ],
  },
]

export default serviceTimeChoices
