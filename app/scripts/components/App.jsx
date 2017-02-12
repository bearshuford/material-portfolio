import React from 'react';

import Masonry from 'react-masonry-component';

import {AppBar} from 'material-ui';
import Theme from './theme.jsx';

import ProjectCard from './ProjectCard.jsx';

import projects from './../projects.js';

import {grey900} from 'material-ui/styles/colors';



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
  app: {
    paddingTop: 8
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
          <Masonry
            style={styles.app}
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
