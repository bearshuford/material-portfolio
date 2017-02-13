import React from 'react';

import Masonry from 'react-masonry-component';

import {AppBar} from 'material-ui';
import Theme from './theme.jsx';

import ProjectCard from './ProjectCard.jsx';

import projects from './../projects.js';

import {grey900, grey500, grey300} from 'material-ui/styles/colors';



const styles = {

  appBar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0
  },
  header: {
    backgroundColor: grey900,
    width: '100%',
    height: 240
  },
  hero: {
    backgroundColor: grey500,
    width: '100%',
    height: 240
  },
  showcase: {
    paddingTop: 8,
    pargin: '0 4px',
  }
}


var App = React.createClass({

  render: function() {

    var projectCards = projects.map(function(project, i){
      return <ProjectCard project={project} key={project.title}/>
    });

    return (
      <Theme>
        <div>
          <AppBar
            style={styles.appBar}
            title="Bear"
            zDepth={0}
            showMenuIconButton={false}
          />
          <div style={styles.header}/>
          {/* <div style={styles.hero}/> */}

          <Masonry
            style={styles.showcase}
            options={{transitionDuration:0}}
            enableResizableChildren={true}
            >
            {projectCards}

          </Masonry>
        </div>

      </Theme>
    );
  }

});

export default App;
