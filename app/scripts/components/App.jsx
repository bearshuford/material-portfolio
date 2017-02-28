import React from 'react';

import Masonry from 'react-masonry-component';

import Sticky from 'react-sticky-state';
import Headroom from 'react-headroom';
import Scrollchor from 'react-scrollchor';

import {AppBar, Avatar, SvgIcon, FlatButton, RaisedButton} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import LocationOn from 'material-ui/svg-icons/communication/location-on';

import {grey900, grey400, grey500, grey300, grey50, grey600} from 'material-ui/styles/colors';

import Theme from './theme.jsx';
import ProjectCard from './ProjectCard.jsx';
import projects from './../projects.jsx';
import BearMenu from './BearMenu.jsx';

import {ReactIcon} from './icons/simple.jsx';
import {BearIcon, IronYard} from './icons/misc.jsx';




const styles = {

  appBar: {
    width: '100vw'
  },
  header: {
    backgroundColor: grey900
  },
  headerText: {
    color:      'white',
    display:    'flex',
    flexFlow:   'column nowrap',
    alignItems: 'center',
    width:      260
  },
  hero: {
    backgroundColor: grey50,
    display:         'flex',
    flexFlow:        'row wrap',
    alignItems:      'flex-start',
    justifyContent:  'center',
    width:           '100%',
    fontSize:        '18px',
    lineHeight:      '28px',
    // textAlign:       'center',
    padding:         '0px 7% 16px',
  },

  heroColumn: {
    maxWidth:      800,
    paddingBottom: 28
  },

  showcase: {
    background: grey400,
    padding:    '0 8px 100px'
  }
};


var App = React.createClass({

  render: function() {

    var projectCards = projects.map(function(project, i){
      return <ProjectCard project={project} key={project.title}/>
    });

    return (
      <Theme>
        <div >
          <Scrollchor className="bear-link" to="">
            <Headroom disableInlineStyles>
              <AppBar
                className="bear-bar"
                title="BEAR SHUFORD"
                zDepth={0}
                showMenuIconButton={false}
              />
            </Headroom>
          </Scrollchor>

        <div className="me" style={styles.header}>

          <Avatar
            className="headshot"
            style={{margin: '0px 24px 0'}}
            src="images/headshot.jpg"
          />

          <div className="basics" style={styles.headerText}>
            <div className="text-display-1" style={{padding:0, margin: '0 0 12px', lineHeight: '44px'}}>
              front-end <span style={{whiteSpace: 'nowrap'}}> web developer </span>
            </div>
            <div style={{display: 'flex', flexFlow: 'row nowrap', alignItems: 'center'}}>
              <LocationOn color="white" style={{height:20, marginRight: 4}}/>
              <div style={{fontSize: 16, paddingRight: 6}}>
                Greenville SC
              </div>
            </div>
          </div>

          </div>


        <section id="about">
                  </section>

          <Sticky>
            <div className="bottom-b">
                <AppBar
                  style={{backgroundColor: grey50, margin: 0}}
                  titleStyle={{color: 'black'}}
                  title={<Scrollchor className="nav-links" to="#about">ABOUT</Scrollchor>}
                  zDepth={0}
                  showMenuIconButton={false}
                />
            </div>
          </Sticky>

          <div style={styles.hero}>

            <div style={styles.heroColumn}>
                {"Hi, I'm Bear and I'm looking to be a part of a creative and diverse team of developers. Recently graduated from "}
                <a className="underline" href="https://www.theironyard.com/locations/greenville.html" >
                 The Iron Yard
                </a>,
                {" I'm currently building "}
                <a className="underline" href="">
                  bear.works
                </a>  {/* TODO: display tools used on site */}

                {'and writing a '}
                <a className="underline" href="http://yeoman.io/">
                  Yeoman
                </a> generator
                to scaffold upcoming projects.

                Check out some of the projects I've completed below.
                {/*I like building stuff in the browser, but I'm also interested in learning React Navite or Swift */}


            </div>

          </div>



        <section id="projects"/>

          <Sticky>
            <div className="bottom">
                <AppBar
                  style={{backgroundColor: grey400}}
                  titleStyle={{color: 'black'}}
                  title={<Scrollchor className="nav-links" to="#projects">PROJECTS</Scrollchor>}
                  zDepth={0}
                  showMenuIconButton={false}
                />
            </div>
          </Sticky>

          <div className="showcase">
            <Masonry
              style={styles.showcase}
              options={{transitionDuration:0}}
              enableResizableChildren={true}
            >
              {projectCards}
            </Masonry>
          </div>


        <BearMenu/>

        </div>

      </Theme>
    );
  }

});

export default App;
