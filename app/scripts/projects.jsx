

import React from 'react';

import {pink500, blue700, teal500, blue800, green500, cyan500, amber500, deepPurple400, red500, cyanA400, lightBlue400} from 'material-ui/styles/colors';

import {SvgIcon} from 'material-ui';

import simple from './components/icons/simple.jsx';



// headshot.jpg     // traveltunes.png    //  etsy.png    //  chat
//  #212121         // #689f38            //  #00838f     //  #0277bd
//  #212121         // #689f38            //  #00838f     //  #0277bd
//  #d7ccc8         //                    //  #90a4ae
//  #d7ccc8         //            -        //  #90a4ae
//  #795548         //              //
//  #795548         //              //
//  #90a4ae         //              //
//  #90a4ae         //              //
//  #78909c         //              //
//  #78909c         //              //




var projects = [
  {
    heading: 'Final Project',
    title: 'TravelTunes',
    description: 'live music discovery for your travel plans',
    image: 'images/traveltunes.png',
    demo: 'http://traveltunes.bear.works',
    code: 'https://github.com/bearshuford/travel-tunes',
    color: green500,
    textColor: 'white',
    mobile: false,
    showcase: true,
    info: [
      'Final project for the Iron Yard.',
      'The final three weeks of the twelve week course focused completely on the final project. I created an app for users to discover concerts that will be playing at their travel destinations.',
      'TravelTunes uses event data from SeatGeek and track samples from Spotify. User authentication, trips, and favorites are managed with Parse Server.',
      // 'Add trips to browse and favorite concerts. Listen to samples of top tracks to decide what to see.',

    ]

    ,
    tools: [
      {
        label: 'SeatGeek API',
        link:  'http://platform.seatgeek.com/',
        icon: <simple.SeatGeek color={'white'}/>
      },
      {
        label: 'Spotify Web API JS',
        link:  'https://github.com/JMPerez/spotify-web-api-js',
        icon: <simple.Spotify color={'white'}/>
      },
      {
        label: 'React',
        link:  'https://facebook.github.io/react/',
        icon: <simple.React color={'white'}/>
      },
      {
        label: 'Backbone',
        link:  'http://backbonejs.org/',
        icon: <simple.Backbone color={'white'}/>
      },
      {
        label: 'Material-Ui',
        link:  'material-ui.com',
        icon:  <simple.MUI color={'white'}/>
      },
      {
        label: 'Parse Server',
        link:  'parseplatform.github.io',
        icon:  <simple.Parse color={'white'}/>
      }

    ]
  },

  {
    heading: 'week 8',
    title: 'Batch Maker',
    description: 'recipe CRUD application',
    image: 'images/batchmaker.png',
    demo: 'http://batchmaker.bear.works',
    code: 'https://github.com/bearshuford/8.4-batch-maker',
    color: pink500,
    textColor: 'white',
    mobile: true,
    showcase: false,
    info: [
      "After two weeks of React, we were ready to build a full-blown CRUD application! ...almost. No one in the cohort made the deadline and we recieved an extension.",
      "Batch Maker has user signup and login. Users can view and manage recipes. Recipes can be scaled up or down depending on the yield."
    ],
    tools: [
      {
        label: 'React',
        link:  'https://facebook.github.io/react/',
        icon: <simple.React color={'white'}/>
      },
      {
        label: 'Backbone',
        link:  'http://backbonejs.org/',
        icon: <simple.Backbone color={'white'}/>
      },
      {
        label: 'Material-Ui',
        link:  'material-ui.com',
        icon: <simple.MUI color={'white'}/>
      },
      {
        label: 'Parse Server',
        link:  'parseplatform.github.io',
        icon:  <simple.Parse color={'white'}/>
      }
    ]
  },

  {
    heading: 'week 7',
    title: 'React Chat',
    description: 'chat application with react and backbone',
    image: 'images/chat.png',
    demo: 'http://chat.bear.works',
    code: 'https://github.com/bearshuford/7.3-react-chat',
    color: cyan500,
    textColor: 'black',
    mobile: true,
    showcase: false,
    info: [
      "Early into our first week of React, we learned to use it in tandem with Backbone.",
      "For React Chat, I used backbone for routing and collections. New messages are fetched from the server on an interval.",
      'I used React-Bootstrap components for quick styling.'
    ],
    tools: [
      {
        label: 'React',
        link:  'https://facebook.github.io/react/',
        icon: <simple.React color={'black'}/>
      },
      {
        label: 'Backbone',
        link:  'http://backbonejs.org/',
        icon: <simple.Backbone color={'black'}/>
      },
      {
        label: 'React-Bootstrap',
        link:  'https://react-bootstrap.github.io/',
        icon: <simple.ReactBootstrap color={'black'}/>
      }

    ]
  },

{
  heading: 'week 4',
  title:        'Github Clone',
  description:  'github repos tab clone',
  image:        'images/github.png',
  demo:         'http://github.bear.works',
  code:         'https://github.com/bearshuford/4.4-github-profile',
  color:        amber500,
  textColor:    'black',
  mobile:       false,
  showcase:     false,
  info: [
    'A github profile app that displays info from the Github API and my repos.',
    'I was introducted to jQuery AJAX and learned to handle callbacks and asynchronous code'
  ],
  tools: [
    {
      label: 'Github API',
      link:  'https://developer.github.com/v3/',
      icon:   <simple.Github color={'black'}/>
    },
    {
      label: 'handlebars',
      link:  'http://handlebarsjs.com/',
      icon:  <simple.Handlebars color={'black'}/>
  },
  {
    label: 'SCSS',
    link:  'http://sass-lang.com/',
    icon: <simple.SCSS color={'black'}/>
   }
  ]
},



{
  heading: 'week 4',
  title: 'Etsy Search Page',
  description: 'etsy search page clone',
  image: 'images/etsy.png',
  demo: 'http://etsy.bear.works',
  code: 'https://github.com/bearshuford/etsy-recreation',
  color: deepPurple400,
  textColor: 'white',
  mobile: false,
  showcase: false,
  info: [
    'A replica of an Etsy search page for zines. Made with JSONP from the Etsy API and handlebars templates.'
  ],
  tools: [
    {
      label: 'Esty API',
      link:  'https://www.etsy.com/developers/documentation/getting_started/api_basics',
      icon: <simple.Etsy color={'white'}/>
    },
    {
      label: 'handlebars',
      link:  'http://handlebarsjs.com/',
      icon:  <simple.Handlebars color={'white'}/>
   },
  {
    label: 'SCSS',
    link:  'http://sass-lang.com/',
    icon: <simple.SCSS color={'white'}/>
   }
  ],

},

// {
//   heading: 'week 1',
//   title: 'Vertical Timeline',
//   description: 'layout and positioning with CSS',
//   image: 'images/timeline.png',
//   demo: 'http://timeline.bear.works',
//   code: 'https://github.com/bearshuford/1.3-timeline-layout',
//   color: teal500,
//   textColor: 'white',
//   mobile: false,
//   showcase: false,
//   info: [
//     'An exercise in layout and positioning with CSS, as most of our assignments were on the first week.',
//     'I picked up some clever uses of psuedo-classes and psuedo-elements '
//   ],
//   tools: [
//     {
//       label: 'CSS3',
//       link:  'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3',
//       icon: <simple.CSS color={'white'}/>
//    },
//     {
//       label: 'HTML5',
//       link:  'https://www.w3.org/TR/html5/',
//       icon: <simple.HTML color={'white'}/>
//     }
//   ]
// },





];

export default projects;
