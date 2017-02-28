import React from 'react';

import {Menu, MainButton, ChildButton} from 'react-mfb';


// import Avatar from 'material-ui/Avatar';
// import { SpeedDial, BubbleList, BubbleListItem } from 'react-speed-dial';




var BearMenu = React.createClass({

  render: function() {

    // demo defaults
    var effect = 'zoomin',
        pos = 'br',
        method = 'click';


    return (
      <Menu effect={effect} method={method} position={pos} style={{zIndex:4000}}>
        <MainButton
          iconResting="bear-head"
          iconActive="fa fa-times"
        ></MainButton>
        <ChildButton
          icon="fa fa-envelope"
          label="email"
          href="mailto:bearshuford@me.com"/>
        <ChildButton
          onClick={function(e){ console.log(e); e.preventDefault(); }}
          icon="fa fa-linkedin"
          label="LinkedIn"
          href="https://linkedin.com/in/bearshuford" />
        <ChildButton
          icon="fa fa-github-alt"
          label="Github"
          href="https://github.com/bearshuford" />
        <ChildButton
          icon="fa fa-file-text"
          label="Resume"
          href="docs/resume.pdf" />
      </Menu>
    );
  }

});

export default BearMenu;
