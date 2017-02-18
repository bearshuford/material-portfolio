import React from 'react';

import Masonry from 'react-masonry-component';


import {AppBar, Avatar, SvgIcon} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {grey900, grey500, grey300, grey50, grey600} from 'material-ui/styles/colors';

import Theme from './theme.jsx';
import ProjectCard from './ProjectCard.jsx';
import projects from './../projects.jsx';

import {Menu, MainButton, ChildButton} from 'react-mfb';

const styles = {

  appBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  },
  header: {
    backgroundColor: grey900,
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: '64px 0 6px'
  },
  hero: {
    backgroundColor: grey900,
    width: '100%',
    height: 200
  },
  showcase: {
    padding: 8
  }
};







const BearIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 42 32">
    <path d="M26.771 2.022c-2.44 0-4.462 1.673-4.95 3.904h-11.782c-0.558-2.231-2.58-3.904-4.95-3.904-2.789 0-5.089 2.301-5.089 5.089 0 1.952 1.115 3.695 2.789 4.532v5.508c0 7.111 6.135 12.828 13.246 12.828s13.246-5.717 13.246-12.828v-5.508c1.603-0.837 2.719-2.58 2.719-4.532-0.070-2.789-2.37-5.089-5.229-5.089zM9.272 12.549c0-0.767 0.627-1.464 1.464-1.464s1.464 0.627 1.464 1.464-0.627 1.464-1.464 1.464-1.464-0.627-1.464-1.464zM15.895 27.468c-2.649 0-4.88-2.858-4.88-6.344s2.161-6.344 4.88-6.344c2.719 0 4.88 2.858 4.88 6.344s-2.161 6.344-4.88 6.344zM21.124 14.013c-0.837 0-1.464-0.627-1.464-1.464 0-0.767 0.627-1.464 1.464-1.464 0.767 0 1.464 0.627 1.464 1.464s-0.627 1.464-1.464 1.464z"></path>
    <path d="M13.386 18.475c-0.418 0-0.837 0.209-0.976 0.558-0.139 0.418-0.070 0.837 0.209 1.115l2.51 2.51c0.418 0.418 1.115 0.418 1.534 0l2.51-2.51c0.279-0.279 0.418-0.697 0.209-1.115-0.139-0.418-0.558-0.558-0.976-0.558h-5.020z"></path>
  </SvgIcon>
);

var FABMenu = React.createClass({

  render: function() {

    // demo defaults
    var effect = 'zoomin',
        pos = 'br',
        method = 'click';


    return (
      <Menu effect={effect} method={method} position={pos}>
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
          href="https://linkedin.com/" />
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




var App = React.createClass({

  render: function() {

    var projectCards = projects.map(function(project, i){
      return <ProjectCard project={project} key={project.title}/>
    });

    return (
      <Theme>
        <div>
          {/*<AppBar
            style={styles.appBar}
            title="Bear"
            zDepth={0}
            showMenuIconButton={false}
          /> */}
        <div style={styles.header}>
          <Avatar
            style={{margin: '0px 24px 0'}}
            src="images/headshot.jpg"
            size={200}/>
          <div style={{color: 'white', margin: '0px 12px 20px', display: 'flex', flexFlow: 'column nowrap'}}>
            <div className="text-display-1" style={{padding:0, margin: 0}}>bear shuford</div>
            <div>front-end web engineer</div>
          </div>
        </div>
          {/*<div style={styles.hero}></div>*/}
          {/*<div
            className="text-headline"
            style={{padding: '18px 18px 8px'}}
            >[showcase]</div>*/}

          <Masonry
            style={styles.showcase}
            options={{transitionDuration:0}}
            enableResizableChildren={true}
            >
            {projectCards}

          </Masonry>



          <FABMenu/>



        </div>



      </Theme>
    );
  }

});

export default App;
