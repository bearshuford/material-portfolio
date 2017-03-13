import React from 'react';

import Avatar from 'material-ui/Avatar';
import { SpeedDial, BubbleList, BubbleListItem } from 'react-speed-dial';

import LinkedIn from 'material-ui-community-icons/icons/linkedin';
import FilePDF from 'material-ui-community-icons/icons/file-pdf';

import MailIcon from 'material-ui/svg-icons/content/mail';

import {BearIcon}   from './icons/misc.jsx';
import {GithubIcon} from './icons/simple.jsx';


const brandColors = {
  github:   '#c9510c',
  linkedin: '#0077b5',
  mail:     '#43A047',
  resume:   '#F06292'
};

const list = {
	items: [
		{
			primaryText: 'Github',
      href:        'https://github.com/bearshuford',
			rightAvatar: <Avatar backgroundColor={brandColors.github} icon={<GithubIcon />} />,
    },
    {
      primaryText: 'LinkedIn',
      href:        'https://linkedin.com/in/bearshuford',
      rightAvatar: <Avatar backgroundColor={brandColors.linkedin} icon={<LinkedIn />} />,
    },
    {
      primaryText: 'Resume',
      href:        'docs/resume.pdf',
      rightAvatar: <Avatar backgroundColor={brandColors.resume} icon={<FilePDF />} />,
    },
    {
      primaryText: 'Email',
      href:        'mailto:bearshuford@me.com',
      rightAvatar: <Avatar backgroundColor={brandColors.mail} icon={<MailIcon />} />,
    },
	],
};


var BearMenu = React.createClass({

  render: function() {

    return (
      <SpeedDial
        hasBackdrop={false}
        style={{zIndex: 50000, bottom: 13, right: 9, width: 'calc(100% - 9px)'}}
        icon={<BearIcon className="bear-icon"/>}
      >
        <BubbleList>
          {list.items.map((item, index) => {
  					return (<BubbleListItem key={index} {...item} />);
  				})}
        </BubbleList>
      </SpeedDial>
    );
}

});

export default BearMenu;
