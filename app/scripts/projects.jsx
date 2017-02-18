

import React from 'react';

import {pink500, blue700, teal500, blue800, green500, cyan500, amber500, deepPurple500, red500, cyanA400} from 'material-ui/styles/colors';

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
  </SvgIcon>
);

const MUIIcon = (props) => (
  <SvgIcon {...props} >
    <path d="M8,16.61V15.37L14,11.91V7.23L9,10.12L4,7.23V13L3,13.58L2,13V5L3.07,4.38L9,7.81L12.93,5.54L14.93,4.38L16,5V13.06L10.92,16L14.97,18.33L20,15.43V11L21,10.42L22,11V16.58L14.97,20.64L8,16.61M22,9.75L21,10.33L20,9.75V8.58L21,8L22,8.58V9.75Z" />
  </SvgIcon>
);

const ReactBootstrapIcon = (props) => (
  <SvgIcon {...props} width={20} viewBox="0 0 198.264 189.343" >
    <path d="M116.56,152c-.17,0-.33,0-.5,0-11.4-1.12-21.66.3-30.52,9.12-5.6,5.57-13.37,8.68-21.35,10.38-12.25,2.61-22.27-3-26.44-14.82-3.53-10-3.48-20.35-1.43-30.57.92-4.6-.81-6.21-4.61-7.65-8.8-3.33-16.86-8-23.52-14.74C-3.54,91.76-2.59,77,10.5,66.47A66.35,66.35,0,0,1,31.39,54.93c4.8-1.57,6.11-3.94,5.25-8.83-2-11.25-2.6-22.55,2.49-33.29C44,2.65,52.66-1.65,63.77.57s20.9,7.7,29.37,15.23a12.8,12.8,0,0,0,9,3.43c13.48.19,27-.81,40.43.86,30.59,3.8,37.11,30,29.6,48.21a31.41,31.41,0,0,1-6.51,9.4c-1.79,1.9-2.08,3,.25,4.64C179.5,92,181.86,106,179.35,121s-13.08,23.47-27.13,27.67C140.6,152.18,128.58,152.35,116.56,152ZM106,113.06c0,5.32.11,10.65,0,16-.1,3.56,1.24,5.16,4.94,5.11,9.81-.14,19.64.1,29.45-.16,7.68-.21,13.82-3.41,17.28-10.67,2.1-4.41,1.59-9.14,1.34-13.76-.49-9-5.63-14.92-14.57-16.46-11.55-2-23.24-.6-34.86-.84-2.9-.06-3.54,1.9-3.54,4.35C106,102.08,106,107.57,106,113.06Zm18.78-41c5.23-.25,11.74.63,18.13-1.12,10-2.74,14-8.65,13-19.31-.79-8.41-5.64-12.9-15.69-13.34s-20-.1-29.93-.16c-2.87,0-4.32,1.17-4.3,4.14,0,8.48.06,17,0,25.44,0,3.24,1.52,4.44,4.6,4.37C114.93,72,119.26,72.05,124.8,72.05ZM88.56,122V52.84C82.85,61,79,68.92,74.3,76.32,70.08,83,70,88.78,74.09,95.59,79,103.75,82.49,112.79,88.56,122ZM50.95,138.63c.13,2.55.12,4.22.33,5.86a40.36,40.36,0,0,0,1,5.39c1.42,5.27,4.05,6.82,9.23,5.5,7.6-1.94,13.91-6.24,20-11,1.91-1.48,1.81-2.82.5-4.63-5.62-7.83-11.56-15.1-22.57-14.58a8,8,0,0,1-2.46-.39c-2.92-.81-4.48.34-4.84,3.28C51.73,131.89,51.29,135.69,50.95,138.63ZM59.2,17c-3.33-.24-5.36,1.24-6.42,4.37-2.66,7.83-2,15.71-.43,23.6.41,2.09,1.78,3,4,2.75,9.16-1,18.3-1.85,22.86-11.8a15.85,15.85,0,0,1,2.84-3.44c1-1.13,1.52-2.36.13-3.43C75.24,23.7,68.4,18.07,59.2,17Zm-11,68.89c-2.09-5.12-4.11-10.37-6.42-15.49-.73-1.63-2.6-1.23-4-.69-6.88,2.58-13.55,5.56-18.81,10.91-3.67,3.74-3.85,6.6-.37,10.39C24,96.94,31,100.38,38.43,103c1.35.47,2.83.56,3.45-1C44,96.8,46,91.53,48.2,85.92Z"/>
  </SvgIcon>
);


const BootstrapIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24" >
    <path d="M116.56,152c-.17,0-.33,0-.5,0-11.4-1.12-21.66.3-30.52,9.12-5.6,5.57-13.37,8.68-21.35,10.38-12.25,2.61-22.27-3-26.44-14.82-3.53-10-3.48-20.35-1.43-30.57.92-4.6-.81-6.21-4.61-7.65-8.8-3.33-16.86-8-23.52-14.74C-3.54,91.76-2.59,77,10.5,66.47A66.35,66.35,0,0,1,31.39,54.93c4.8-1.57,6.11-3.94,5.25-8.83-2-11.25-2.6-22.55,2.49-33.29C44,2.65,52.66-1.65,63.77.57s20.9,7.7,29.37,15.23a12.8,12.8,0,0,0,9,3.43c13.48.19,27-.81,40.43.86,30.59,3.8,37.11,30,29.6,48.21a31.41,31.41,0,0,1-6.51,9.4c-1.79,1.9-2.08,3,.25,4.64C179.5,92,181.86,106,179.35,121s-13.08,23.47-27.13,27.67C140.6,152.18,128.58,152.35,116.56,152ZM106,113.06c0,5.32.11,10.65,0,16-.1,3.56,1.24,5.16,4.94,5.11,9.81-.14,19.64.1,29.45-.16,7.68-.21,13.82-3.41,17.28-10.67,2.1-4.41,1.59-9.14,1.34-13.76-.49-9-5.63-14.92-14.57-16.46-11.55-2-23.24-.6-34.86-.84-2.9-.06-3.54,1.9-3.54,4.35C106,102.08,106,107.57,106,113.06Zm18.78-41c5.23-.25,11.74.63,18.13-1.12,10-2.74,14-8.65,13-19.31-.79-8.41-5.64-12.9-15.69-13.34s-20-.1-29.93-.16c-2.87,0-4.32,1.17-4.3,4.14,0,8.48.06,17,0,25.44,0,3.24,1.52,4.44,4.6,4.37C114.93,72,119.26,72.05,124.8,72.05ZM88.56,122V52.84C82.85,61,79,68.92,74.3,76.32,70.08,83,70,88.78,74.09,95.59,79,103.75,82.49,112.79,88.56,122ZM50.95,138.63c.13,2.55.12,4.22.33,5.86a40.36,40.36,0,0,0,1,5.39c1.42,5.27,4.05,6.82,9.23,5.5,7.6-1.94,13.91-6.24,20-11,1.91-1.48,1.81-2.82.5-4.63-5.62-7.83-11.56-15.1-22.57-14.58a8,8,0,0,1-2.46-.39c-2.92-.81-4.48.34-4.84,3.28C51.73,131.89,51.29,135.69,50.95,138.63ZM59.2,17c-3.33-.24-5.36,1.24-6.42,4.37-2.66,7.83-2,15.71-.43,23.6.41,2.09,1.78,3,4,2.75,9.16-1,18.3-1.85,22.86-11.8a15.85,15.85,0,0,1,2.84-3.44c1-1.13,1.52-2.36.13-3.43C75.24,23.7,68.4,18.07,59.2,17Zm-11,68.89c-2.09-5.12-4.11-10.37-6.42-15.49-.73-1.63-2.6-1.23-4-.69-6.88,2.58-13.55,5.56-18.81,10.91-3.67,3.74-3.85,6.6-.37,10.39C24,96.94,31,100.38,38.43,103c1.35.47,2.83.56,3.45-1C44,96.8,46,91.53,48.2,85.92Z"/>
  </SvgIcon>
);


const HandlebarsIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 480 300"  >
    <path d=" M 131.02 19.82 C 145.16 10.34 161.82 3.93 179.01 4.01 C 195.08 3.94 211.56 8.55 224.05 18.94 C 230.45 24.12 235.62 30.62 240.01 37.54 C 247.91 24.77 259.45 13.92 273.68 8.69 C 291.02 2.18 310.62 2.63 327.93 9.01 C 343.05 14.53 356.27 24.15 368.26 34.73 C 377.64 43.01 386.32 52.07 395.98 60.04 C 401.07 64.17 406.54 68.04 412.80 70.18 C 421.12 73.02 430.96 70.34 436.91 63.93 C 442.42 57.93 442.08 47.56 436.01 42.08 C 432.15 38.75 425.55 39.42 422.82 43.86 C 420.43 47.38 421.77 51.77 423.64 55.18 C 418.67 51.55 413.69 46.49 413.71 39.89 C 412.68 32.26 418.34 25.53 425.12 22.86 C 438.35 17.57 454.94 22.13 463.29 33.78 C 471.32 44.65 471.96 58.94 470.56 71.89 C 468.87 84.19 461.99 95.67 451.79 102.79 C 437.47 113.01 419.32 116.18 402.05 115.96 C 385.45 115.51 369.02 111.76 353.64 105.56 C 327.92 95.22 303.85 80.93 277.29 72.67 C 268.48 69.25 259.11 67.40 249.69 66.83 C 249.71 122.23 249.59 177.64 249.68 233.05 C 249.61 251.51 249.85 269.99 249.57 288.44 C 249.43 286.29 249.30 284.14 249.25 282.00 C 249.41 210.22 249.32 138.45 249.29 66.67 C 242.19 66.78 235.08 66.43 228.00 66.91 C 219.36 67.74 210.77 69.51 202.68 72.68 C 175.67 81.08 151.24 95.73 125.03 106.09 C 102.90 114.70 78.38 118.70 54.89 113.92 C 41.75 111.26 28.67 105.45 19.80 95.10 C 12.21 86.30 8.57 74.52 8.93 62.98 C 8.51 52.09 10.90 40.52 18.10 32.04 C 24.80 24.00 35.59 19.92 45.95 20.82 C 52.62 21.13 59.38 24.04 63.50 29.41 C 66.74 33.66 66.94 39.48 65.52 44.45 C 63.79 48.92 60.22 52.41 56.34 55.09 C 58.32 51.75 59.52 47.34 57.18 43.85 C 54.30 39.20 47.21 38.73 43.46 42.55 C 38.84 47.30 37.87 55.06 40.97 60.88 C 44.33 66.98 51.28 70.46 58.01 71.17 C 68.19 72.05 77.02 65.74 84.49 59.62 C 99.95 46.31 113.87 31.08 131.02 19.82 Z"/>
    <path d=" M 228.00 66.91 C 235.08 66.43 242.19 66.78 249.29 66.67 C 249.32 138.45 249.41 210.22 249.25 282.00 C 249.30 284.14 249.43 286.29 249.57 288.44 C 249.62 289.75 248.61 290.74 247.88 291.70 C 247.84 291.75 247.77 291.84 247.73 291.89 C 244.40 297.35 236.10 297.46 231.65 293.39 C 228.63 290.49 227.91 286.01 227.97 282.01 C 228.01 233.01 228.55 184.00 228.14 135.00 C 228.01 112.30 227.98 89.60 228.00 66.91 Z"/>
    <path d=" M 247.73 291.89 C 247.77 291.84 247.84 291.75 247.88 291.70 C 247.84 291.75 247.77 291.84 247.73 291.89 Z"/>
  </SvgIcon>
);


const HTMLIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24"  >
    <path  d="M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z" />
  </SvgIcon>
);

const CSSIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24" >
    <path d="M5,3L4.35,6.34H17.94L17.5,8.5H3.92L3.26,11.83H16.85L16.09,15.64L10.61,17.45L5.86,15.64L6.19,14H2.85L2.06,18L9.91,21L18.96,18L20.16,11.97L20.4,10.76L21.94,3H5Z" />
  </SvgIcon>
);

const SCSSIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 512 384" >
<path d="M440.6 220.6c-17.9.1-33.4 4.4-46.4 10.8-4.8-9.5-9.6-17.8-10.4-24-.9-7.2-2-11.6-.9-20.2s6.1-20.8 6.1-21.8c-.1-.9-1.1-5.3-11.4-5.4-10.3-.1-19.2 2-20.2 4.7s-3 8.9-4.3 15.3c-1.8 9.4-20.6 42.7-31.3 60.2-3.5-6.8-6.5-12.8-7.1-17.6-.9-7.2-2-11.6-.9-20.2s6.1-20.8 6.1-21.8c-.1-.9-1.1-5.3-11.4-5.4-10.3-.1-19.2 2-20.2 4.7s-2.1 9.1-4.3 15.3c-2.1 6.2-27.1 61.8-33.6 76.3-3.3 7.4-6.2 13.3-8.3 17.3s-.1.3-.3.7c-1.8 3.4-2.8 5.3-2.8 5.3v.1c-1.4 2.5-2.9 4.9-3.6 4.9-.5 0-1.5-6.7.2-15.9 3.7-19.3 12.7-49.4 12.6-50.5 0-.5 1.7-5.8-5.8-8.5-7.3-2.7-9.9 1.8-10.5 1.8-.6 0-1.1 1.6-1.1 1.6s8.1-33.9-15.5-33.9c-14.8 0-35.2 16.1-45.3 30.8-6.4 3.5-20 10.9-34.4 18.8-5.5 3-11.2 6.2-16.6 9.1l-1.1-1.2c-28.6-30.5-81.5-52.1-79.3-93.1.8-14.9 6-54.2 101.6-101.8 78.3-39 141-28.3 151.9-4.5 15.5 34-33.5 97.2-114.9 106.3-31 3.5-47.3-8.5-51.4-13-4.3-4.7-4.9-4.9-6.5-4-2.6 1.4-1 5.6 0 8.1 2.4 6.3 12.4 17.5 29.4 23.1 14.9 4.9 51.3 7.6 95.3-9.4 49.3-19.1 87.8-72.1 76.5-116.4-11.5-45.1-86.3-59.9-157-34.8-42.1 15-87.7 38.4-120.5 69.1-39 36.4-45.2 68.2-42.6 81.4 9.1 47.1 74 77.8 100 100.5-1.3.7-2.5 1.4-3.6 2-13 6.4-62.5 32.3-74.9 59.7-14 31 2.2 53.3 13 56.3 33.4 9.3 67.6-7.4 86.1-34.9 18.4-27.5 16.2-63.2 7.7-79.5l-.3-.6 10.2-6c6.6-3.9 13.1-7.5 18.8-10.6-3.2 8.7-5.5 19-6.7 34-1.4 17.6 5.8 40.4 15.3 49.4 4.2 3.9 9.2 4 12.3 4 11 0 16-9.1 21.5-20 6.8-13.3 12.8-28.7 12.8-28.7s-7.5 41.7 13 41.7c7.5 0 15-9.7 18.4-14.7v.1s.2-.3.6-1c.8-1.2 1.2-1.9 1.2-1.9v-.2c3-5.2 9.7-17.1 19.7-36.8 12.9-25.4 25.3-57.2 25.3-57.2s1.2 7.8 4.9 20.6c2.2 7.6 7 15.9 10.7 24-3 4.2-4.8 6.6-4.8 6.6l.1.1c-2.4 3.2-5.1 6.6-7.9 10-10.2 12.2-22.4 26.1-24 30.1-1.9 4.7-1.5 8.2 2.2 11 2.7 2 7.5 2.4 12.6 2 9.2-.6 15.6-2.9 18.8-4.3 5-1.8 10.7-4.5 16.2-8.5 10-7.4 16.1-17.9 15.5-31.9-.3-7.7-2.8-15.3-5.9-22.5.9-1.3 1.8-2.6 2.7-4 15.8-23.1 28-48.5 28-48.5s1.2 7.8 4.9 20.6c1.9 6.5 5.7 13.6 9.1 20.6-14.8 12.1-24.1 26.1-27.3 35.3-5.9 17-1.3 24.7 7.4 26.5 3.9.8 9.5-1 13.7-2.8 5.2-1.7 11.5-4.6 17.3-8.9 10-7.4 19.6-17.7 19.1-31.6-.3-6.4-2-12.7-4.3-18.7 12.6-5.2 28.9-8.2 49.6-5.7 44.5 5.2 53.3 33 51.6 44.6-1.7 11.6-11 18-14.1 20-3.1 1.9-4.1 2.6-3.8 4 .4 2.1 1.8 2 4.5 1.6 3.7-.6 23.4-9.5 24.2-30.9 1.2-27.5-24.9-57.5-71.2-57.2zm-343.2 115.7c-14.7 16.1-35.4 22.2-44.2 17-9.5-5.5-5.8-29.2 12.3-46.3 11-10.4 25.3-20 34.7-25.9 2.1-1.3 5.3-3.2 9.1-5.5.6-.4 1-.6 1-.6.7-.4 1.5-.9 2.3-1.4 6.7 24.4.3 45.8-15.2 62.7zm107.5-73.1c-5.1 12.5-15.9 44.6-22.4 42.8-5.6-1.5-9-25.8-1.1-49.8 4-12.1 12.5-26.5 17.5-32.1 8.1-9 16.9-12 19.1-8.3 2.6 4.8-9.9 39.6-13.1 47.4zm88.7 42.4c-2.2 1.1-4.2 1.9-5.1 1.3-.7-.4.9-1.9.9-1.9s11.1-11.9 15.5-17.4c2.5-3.2 5.5-6.9 8.7-11.1v1.2c0 14.4-13.8 24-20 27.9zm68.4-15.6c-1.6-1.2-1.4-4.9 4-16.5 2.1-4.6 6.9-12.3 15.2-19.6 1 3 1.6 5.9 1.5 8.6-.1 18-12.9 24.7-20.7 27.5z"/>
</SvgIcon>
);

const GithubIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24" >
    <path d="M20.38,8.53C20.54,8.13 21.06,6.54 20.21,4.39C20.21,4.39 18.9,4 15.91,6C14.66,5.67 13.33,5.62 12,5.62C10.68,5.62 9.34,5.67 8.09,6C5.1,3.97 3.79,4.39 3.79,4.39C2.94,6.54 3.46,8.13 3.63,8.53C2.61,9.62 2,11 2,12.72C2,19.16 6.16,20.61 12,20.61C17.79,20.61 22,19.16 22,12.72C22,11 21.39,9.62 20.38,8.53M12,19.38C7.88,19.38 4.53,19.19 4.53,15.19C4.53,14.24 5,13.34 5.8,12.61C7.14,11.38 9.43,12.03 12,12.03C14.59,12.03 16.85,11.38 18.2,12.61C19,13.34 19.5,14.23 19.5,15.19C19.5,19.18 16.13,19.38 12,19.38M8.86,13.12C8.04,13.12 7.36,14.12 7.36,15.34C7.36,16.57 8.04,17.58 8.86,17.58C9.69,17.58 10.36,16.58 10.36,15.34C10.36,14.11 9.69,13.12 8.86,13.12M15.14,13.12C14.31,13.12 13.64,14.11 13.64,15.34C13.64,16.58 14.31,17.58 15.14,17.58C15.96,17.58 16.64,16.58 16.64,15.34C16.64,14.11 16,13.12 15.14,13.12Z" />
  </SvgIcon>
);


const EtsyIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24" >
    <path d="M6.72,20.78C8.23,20.71 10.07,20.78 11.87,20.78C13.72,20.78 15.62,20.66 17.12,20.78C17.72,20.83 18.28,21.19 18.77,20.87C19.16,20.38 18.87,19.71 18.96,19.05C19.12,17.78 20.28,16.27 18.59,15.95C17.87,16.61 18.35,17.23 17.95,18.05C17.45,19.03 15.68,19.37 14,19.5C12.54,19.62 10,19.76 9.5,18.77C9.04,17.94 9.29,16.65 9.29,15.58C9.29,14.38 9.16,13.22 9.5,12.3C11.32,12.43 13.7,11.69 15,12.5C15.87,13 15.37,14.06 16.38,14.4C17.07,14.21 16.7,13.32 16.66,12.5C16.63,11.94 16.63,11.19 16.66,10.57C16.69,9.73 17,8.76 16.1,8.74C15.39,9.3 15.93,10.23 15.18,10.75C14.95,10.92 14.43,11 14.08,11C12.7,11.17 10.54,11.05 9.38,10.84C9.23,9.16 9.24,6.87 9.38,5.19C10,4.57 11.45,4.54 12.42,4.55C14.13,4.55 16.79,4.7 17.3,5.55C17.58,6 17.36,7 17.85,7.1C18.85,7.33 18.36,5.55 18.41,4.73C18.44,4.11 18.71,3.72 18.59,3.27C18.27,2.83 17.79,3.05 17.5,3.09C14.35,3.5 9.6,3.27 6.26,3.27C5.86,3.27 5.16,3.07 4.88,3.54C4.68,4.6 6.12,4.16 6.62,4.73C6.79,4.91 7.03,5.73 7.08,6.28C7.23,7.74 7.08,9.97 7.08,12.12C7.08,14.38 7.26,16.67 7.08,18.05C7,18.53 6.73,19.3 6.62,19.41C6,20.04 4.34,19.35 4.5,20.69C5.09,21.08 5.93,20.82 6.72,20.78Z" />
  </SvgIcon>
);




// <!doctype html>
// <svg width="22.400001525878906" height="31.99700164794922" viewBox="4.8 0.00199999 22.4 31.997">
//   <path d="M 21.149 1.249 L 22.617 2.159 L 23.922 3.278 L 24.514 3.968 L 17.468 3.968 L 17.468 11.594 L 17.145 11.458 L 16.595 11.322 L 16.014 11.275 L 15.434 11.322 L 14.884 11.458 L 14.37 11.675 L 13.901 11.966 L 13.484 12.324 L 13.127 12.741 L 12.836 13.21 L 12.618 13.723 L 12.482 14.273 L 12.435 14.853 L 12.482 15.433 L 12.618 15.983 L 12.836 16.496 L 13.127 16.965 L 13.484 17.382 L 13.901 17.74 L 14.37 18.031 L 14.884 18.248 L 15.434 18.384 L 16.014 18.431 L 16.595 18.384 L 17.145 18.248 L 17.659 18.031 L 18.128 17.74 L 18.545 17.382 L 18.903 16.965 L 19.194 16.496 L 19.411 15.983 L 19.547 15.433 L 19.593 14.853 L 19.593 7.122 L 26.404 7.122 L 26.63 7.658 L 27.054 9.382 L 27.2 11.201 L 26.886 13.824 L 26.034 16.589 L 24.78 19.397 L 23.257 22.15 L 21.6 24.749 L 19.942 27.097 L 18.418 29.094 L 17.164 30.642 L 16.313 31.644 L 16 31.999 L 15.687 31.644 L 14.836 30.642 L 13.582 29.094 L 12.058 27.097 L 10.401 24.749 L 8.744 22.15 L 7.22 19.397 L 5.966 16.589 L 5.114 13.824 L 4.8 11.201 L 4.946 9.382 L 5.37 7.658 L 6.049 6.051 L 6.959 4.583 L 8.078 3.279 L 9.382 2.16 L 10.85 1.25 L 12.457 0.572 L 14.181 0.148 L 16 0.002 L 17.819 0.148 L 19.543 0.572 L 21.15 1.25 Z" transform="matrix(1, 0, 0, 1, -1.7763568394002505e-15, 0)"></path>
// </svg>
//





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
        icon:  <MUIIcon color={'white'}/>
      },
      {
        label: 'Parse Server',
        link:  'parseplatform.github.io',
        icon:  <ParseIcon color={'white'}/>
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
        icon:  <ParseIcon color={'white'}/>
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
        icon: <ReactIcon color={'black'}/>
      },
      {
        label: 'Backbone',
        link:  'http://backbonejs.org/',
        icon: <BackboneIcon color={'black'}/>
      },
      {
        label: 'React-Bootstrap',
        link:  'https://react-bootstrap.github.io/',
        icon: <ReactBootstrapIcon color={'black'}/>
      }

    ]
  },

{
  heading: 'week 4',
  title:        'Github Profile',
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
      icon:   <GithubIcon color={'black'}/>
    },
    {
      label: 'handlebars',
      link:  'http://handlebarsjs.com/',
      icon:  <HandlebarsIcon color={'black'}/>
  },
  {
    label: 'SCSS',
    link:  'http://sass-lang.com/',
    icon: <SCSSIcon color={'black'}/>
   }
  ]
},



{
  heading: 'week 4',
  title: 'Etsy Search Page',
  description: 'etsy search page re-creation',
  image: 'images/etsy.png',
  demo: 'https://bearshuford.github.io/etsy-recreation/',
  code: 'https://github.com/bearshuford/etsy-recreation',
  color: deepPurple500,
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
      icon: <EtsyIcon color={'white'}/>
    },
    {
      label: 'handlebars',
      link:  'http://handlebarsjs.com/',
      icon:  <HandlebarsIcon color={'white'}/>
   },
  {
    label: 'SCSS',
    link:  'http://sass-lang.com/',
    icon: <SCSSIcon color={'white'}/>
   }
  ],

},

{
  heading: 'week 1',
  title: 'Vertical Timeline',
  description: 'layout and positioning with CSS',
  image: 'images/timeline.png',
  demo: 'https://bearshuford.github.io/1.3-timeline-layout/',
  code: 'https://github.com/bearshuford/1.3-timeline-layout',
  color: teal500,
  textColor: 'white',
  mobile: false,
  showcase: false,
  info: [
    'An exercise in layout and positioning with CSS, as most of our assignments were on the first week.',
    'I picked up some clever uses of psuedo-classes and psuedo-elements '
  ],
  tools: [
    {
      label: 'CSS3',
      link:  'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3',
      icon: <CSSIcon color={'white'}/>
   },
    {
      label: 'HTML5',
      link:  'https://www.w3.org/TR/html5/',
      icon: <HTMLIcon color={'white'}/>
    }
  ]
},





];

export default projects;
