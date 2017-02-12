import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {pink400, blue700, blue800, grey900, greenA700} from 'material-ui/styles/colors';


const palette = {
    primary1Color: grey900,
    primary2Color: 'black',
    accent1Color:  pink400,
    spotifyGreen: greenA700
  };

const muiTheme = getMuiTheme({
  palette: palette
});

var Theme = React.createClass({
  render: function() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
          {this.props.children}
			</MuiThemeProvider>
		);
  }
});



export default Theme;
