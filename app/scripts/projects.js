

import React from 'react';

import {pink500, blue700, teal500, blue800, greenA700, cyan500, amber500, purple500} from 'material-ui/styles/colors';

import {SvgIcon} from 'material-ui';



const ReactIcon = (props) => (
  <SvgIcon {...props}>
     <path d="M12,10.11C13.03,10.11 13.87,10.95 13.87,12C13.87,13 13.03,13.85 12,13.85C10.97,13.85 10.13,13 10.13,12C10.13,10.95 10.97,10.11 12,10.11M7.37,20C8,20.38 9.38,19.8 10.97,18.3C10.45,17.71 9.94,17.07 9.46,16.4C8.64,16.32 7.83,16.2 7.06,16.04C6.55,18.18 6.74,19.65 7.37,20M8.08,14.26L7.79,13.75C7.68,14.04 7.57,14.33 7.5,14.61C7.77,14.67 8.07,14.72 8.38,14.77C8.28,14.6 8.18,14.43 8.08,14.26M14.62,13.5L15.43,12L14.62,10.5C14.32,9.97 14,9.5 13.71,9.03C13.17,9 12.6,9 12,9C11.4,9 10.83,9 10.29,9.03C10,9.5 9.68,9.97 9.38,10.5L8.57,12L9.38,13.5C9.68,14.03 10,14.5 10.29,14.97C10.83,15 11.4,15 12,15C12.6,15 13.17,15 13.71,14.97C14,14.5 14.32,14.03 14.62,13.5M12,6.78C11.81,7 11.61,7.23 11.41,7.5C11.61,7.5 11.8,7.5 12,7.5C12.2,7.5 12.39,7.5 12.59,7.5C12.39,7.23 12.19,7 12,6.78M12,17.22C12.19,17 12.39,16.77 12.59,16.5C12.39,16.5 12.2,16.5 12,16.5C11.8,16.5 11.61,16.5 11.41,16.5C11.61,16.77 11.81,17 12,17.22M16.62,4C16,3.62 14.62,4.2 13.03,5.7C13.55,6.29 14.06,6.93 14.54,7.6C15.36,7.68 16.17,7.8 16.94,7.96C17.45,5.82 17.26,4.35 16.62,4M15.92,9.74L16.21,10.25C16.32,9.96 16.43,9.67 16.5,9.39C16.23,9.33 15.93,9.28 15.62,9.23C15.72,9.4 15.82,9.57 15.92,9.74M17.37,2.69C18.84,3.53 19,5.74 18.38,8.32C20.92,9.07 22.75,10.31 22.75,12C22.75,13.69 20.92,14.93 18.38,15.68C19,18.26 18.84,20.47 17.37,21.31C15.91,22.15 13.92,21.19 12,19.36C10.08,21.19 8.09,22.15 6.62,21.31C5.16,20.47 5,18.26 5.62,15.68C3.08,14.93 1.25,13.69 1.25,12C1.25,10.31 3.08,9.07 5.62,8.32C5,5.74 5.16,3.53 6.62,2.69C8.09,1.85 10.08,2.81 12,4.64C13.92,2.81 15.91,1.85 17.37,2.69M17.08,12C17.42,12.75 17.72,13.5 17.97,14.26C20.07,13.63 21.25,12.73 21.25,12C21.25,11.27 20.07,10.37 17.97,9.74C17.72,10.5 17.42,11.25 17.08,12M6.92,12C6.58,11.25 6.28,10.5 6.03,9.74C3.93,10.37 2.75,11.27 2.75,12C2.75,12.73 3.93,13.63 6.03,14.26C6.28,13.5 6.58,12.75 6.92,12M15.92,14.26C15.82,14.43 15.72,14.6 15.62,14.77C15.93,14.72 16.23,14.67 16.5,14.61C16.43,14.33 16.32,14.04 16.21,13.75L15.92,14.26M13.03,18.3C14.62,19.8 16,20.38 16.62,20C17.26,19.65 17.45,18.18 16.94,16.04C16.17,16.2 15.36,16.32 14.54,16.4C14.06,17.07 13.55,17.71 13.03,18.3M8.08,9.74C8.18,9.57 8.28,9.4 8.38,9.23C8.07,9.28 7.77,9.33 7.5,9.39C7.57,9.67 7.68,9.96 7.79,10.25L8.08,9.74M10.97,5.7C9.38,4.2 8,3.62 7.37,4C6.74,4.35 6.55,5.82 7.06,7.96C7.83,7.8 8.64,7.68 9.46,7.6C9.94,6.93 10.45,6.29 10.97,5.7Z" />
  </SvgIcon>
);

const BackboneIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 512 512">
    <path d="M246 305l-92 52.9v-87l25.7-14.9 66.3-38v-59.3l-38.1 21.9L103 240.5V446l143-81.8zM154 149.5l42.7 24.4 47.8-27.3L103 66v161.2l51-28.9z"/><path d="M165 307l27.3 15.5 52.1-29.7-53.1-30.2-26.3 15zM263 216.3l95 54.6v87l-95-54.6v59.3L409 446V240.5l-146-83.4zM267.6 146.6l47.7 27.3 42.7-24.4v48.8l51 28.9V66z"/><path d="M347 277.6l-26.4-15-53 30.2 52.1 29.7L347 307z"/>
  </SvgIcon>
);


const ParseIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 200 200">
    <path d="M163.3,41.6c-18.1-19.4-40.6-28.3-68.9-27.3C76.2,14.7,56,23.2,41.6,36.7C23.8,52.8,13.8,75.8,14.2,99.9C13.9,147,51.9,185.5,99,185.7c0.2,0,0.4,0,0.6,0h0.3c47.2,0.2,85.7-37.9,85.8-85.2c0-0.2,0-0.4,0-0.6C186.3,78.3,178.2,57.4,163.3,41.6z M144.1,105.3c-4.9,7.2-12.5,12.2-21.1,13.9c-2.7,0.6-5.5,0.9-8.3,0.9c-13.5,0-27,0-40.4,0c-1.7,0.1-3.4,0.4-5.1,0.9c-3.3,1-5.6,4.2-5.1,9.5c0.6,2.9,2.7,5.3,5.5,6.1c3.7,0.8,7.5-1,9.1-4.4c0.5-1.4,1-2.7,1.3-4.2H92c-0.2,9.7-4.7,16.5-13.8,19.1c-5.7,1.7-11.8,1.1-17.1-1.6c-5.4-2.7-9-8.1-9.4-14.2c-1-6.5,1.5-13,6.4-17.3c2.8-2.8,6.5-4.5,10.5-4.8c10.3-0.4,20.6-0.4,30.9-0.5c4.8,0,9.7,0,14.5,0c10.2,0,20.1-6.4,22.8-16.8s-0.6-21.5-10.6-26.8c-7.9-4-17.4-3.2-24.5,2.1c-5.4,4.3-8.6,10.7-9,17.5c-0.4,5.3,0,10.6,0,16H79.9c0-4.9-0.3-9.9,0.1-14.8c0.3-4,1.2-8,2.5-11.8c3.5-11.5,13.1-20.2,24.9-22.4c10.1-2.6,20.8-0.6,29.3,5.5c6.3,4.4,10.7,11,12.3,18.5C151.7,85.7,150,96.6,144.1,105.3z"/>
  </SvgIcon>
);





const SpotifyIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M17.9,10.9C14.7,9 9.35,8.8 6.3,9.75C5.8,9.9 5.3,9.6 5.15,9.15C5,8.65 5.3,8.15 5.75,8C9.3,6.95 15.15,7.15 18.85,9.35C19.3,9.6 19.45,10.2 19.2,10.65C18.95,11 18.35,11.15 17.9,10.9M17.8,13.7C17.55,14.05 17.1,14.2 16.75,13.95C14.05,12.3 9.95,11.8 6.8,12.8C6.4,12.9 5.95,12.7 5.85,12.3C5.75,11.9 5.95,11.45 6.35,11.35C10,10.25 14.5,10.8 17.6,12.7C17.9,12.85 18.05,13.35 17.8,13.7M16.6,16.45C16.4,16.75 16.05,16.85 15.75,16.65C13.4,15.2 10.45,14.9 6.95,15.7C6.6,15.8 6.3,15.55 6.2,15.25C6.1,14.9 6.35,14.6 6.65,14.5C10.45,13.65 13.75,14 16.35,15.6C16.7,15.75 16.75,16.15 16.6,16.45M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
  </SvgIcon>
);

const SeatGeekIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 42 32">
    <path d="M7.2 3.453c0 0 5.263-3.453 13.782-3.453s13.782 3.453 13.782 3.453l-3.453 18.301h-20.673l-3.439-18.301z"></path>
    <path d="M7.2 25.796c0 0 5.361 2.456 13.782 2.456s13.782-2.456 13.782-2.456v3.902c0 0-5.46 2.302-13.782 2.302s-13.782-2.302-13.782-2.302v-3.902z"></path>
    <path d="M6.891 23.269v-6.512c0-1.053-0.856-1.909-1.909-1.909h-4.982v3.453h3.214v4.982h3.677z"></path>
    <path d="M35.073 23.269v-6.512c0-1.053 0.856-1.909 1.909-1.909h4.982v3.453h-3.214v4.982h-3.677z"></path>
  <
  /SvgIcon>
);

const MUIIcon = (props) => (
  <SvgIcon {...props} >
    <path d="M8,16.61V15.37L14,11.91V7.23L9,10.12L4,7.23V13L3,13.58L2,13V5L3.07,4.38L9,7.81L12.93,5.54L14.93,4.38L16,5V13.06L10.92,16L14.97,18.33L20,15.43V11L21,10.42L22,11V16.58L14.97,20.64L8,16.61M22,9.75L21,10.33L20,9.75V8.58L21,8L22,8.58V9.75Z" />
  </SvgIcon>
);




var projects = [
  {
    title: 'TravelTunes',
    description: 'live music discovery for your travel plans',
    image: 'images/traveltunes.png',
    demo: 'https://bearshuford.github.io/travel-tunes/',
    code: 'https://github.com/bearshuford/travel-tunes',
    color: greenA700,
    textColor: 'white',
    mobile: false,
    showcase: true,
    tools: [
      {
        label: 'SeatGeek API',
        link:  'platform.seatgeek.com',
        icon: <SeatGeekIcon color={'white'}/>
      },
      {
        label: 'Spotify Web API JS',
        link:  'https://github.com/JMPerez/spotify-web-api-js',
        icon: <SpotifyIcon color={'white'}/>
      },
      {
        label: 'React',
        link:  'https://facebook.github.io/react/',
        icon: <ReactIcon color={'white'}/>
      },
      {
        label: 'Backbone',
        link:  'http://backbonejs.org/',
        icon: <BackboneIcon color={'white'}/>
      },
      {
        label: 'Material-Ui',
        link:  'material-ui.com',
        icon: <MUIIcon color={'white'}/>
      },
      {
        label: 'Parse Server',
        link:  'parseplatform.github.io',
        icon: <ParseIcon color={'white'}/>
      }

    ]
  },

  {
    title: 'Batch Maker',
    description: 'recipe CRUD application',
    image: 'images/batchmaker.png',
    demo: 'https://bearshuford.github.io/travel-tunes/',
    code: 'https://github.com/bearshuford/travel-tunes',
    color: cyan500,
    textColor: 'black',
    mobile: true,
    showcase: false,
    tools: [
      {
        label: 'React',
        link:  'https://facebook.github.io/react/',
        icon: <ReactIcon color={'black'}/>
      },
      {
        label: 'Backbone',
        link:  'http://backbonejs.org/',
        icon: <BackboneIcon color={'black'}/>
      },
      {
        label: 'Material-Ui',
        link:  'material-ui.com',
        icon: <MUIIcon color={'black'}/>
      }
    ]
  },

  {
    title: 'React Chat',
    description: 'chat room with react',
    image: 'images/chat.png',
    demo: 'https://bearshuford.github.io/travel-tunes/',
    code: 'https://github.com/bearshuford/travel-tunes',
    color: purple500,
    textColor: 'white',
    mobile: true,
    showcase: false,
    tools: [
      {
        label: 'React',
        link:  'https://facebook.github.io/react/',
        icon: <ReactIcon color={'white'}/>
      }

    ]
  },

  {
  title: 'Github Profile',
  description: 'recreation of github profile view',
  image: 'images/github.png',
  demo: 'https://bearshuford.github.io/travel-tunes/',
  code: 'https://github.com/bearshuford/travel-tunes',
  color: amber500,
  textColor: 'black',
  mobile: false,
  showcase: false,
  tools: [
    {
      label: 'SeatGeek Api',
      link:  'platform.seatgeek.com',
      icon: <SeatGeekIcon color={'black'}/>
    }
  ]
},



{
  title: 'Something',
  description: 'ipsum whatever',
  image: 'images/batchmaker.png',
  demo: 'https://bearshuford.github.io/travel-tunes/',
  code: 'https://github.com/bearshuford/travel-tunes',
  color: teal500,
  textColor: 'white',
  mobile: true,
  showcase: false,
  tools: [
    {
      label: 'SeatGeek Api',
      link:  'platform.seatgeek.com',
      icon: <SeatGeekIcon color={'white'}/>
    }
  ]
},

{
  title: 'Whatever',
  description: 'placehoder stuff',
  image: 'images/traveltunes.png',
  demo: 'https://bearshuford.github.io/travel-tunes/',
  code: 'https://github.com/bearshuford/travel-tunes',
  color: pink500,
  textColor: 'white',
  mobile: false,
  showcase: false,
  tools: [
    {
      label: 'SeatGeek Api',
      link:  'platform.seatgeek.com',
      icon: <SeatGeekIcon color={'white'}/>
    }
  ]
}





];

export default projects;
