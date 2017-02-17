import React from 'react';

import Masonry from 'react-masonry-component';


import {AppBar, Avatar} from 'material-ui';
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
}




// demo defaults
var effect = 'zoomin',
    pos = 'br',
    method = 'click';






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


          <Menu effect={effect} method={method} position={pos} mini={false}>
            <MainButton
              iconResting="fa fa-plus "
              iconActive="fa fa-times "
            />
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
          </Menu>




        </div>



      </Theme>
    );
  }

});

export default App;
