import React from 'react';


import SwipeableViews from 'react-swipeable-views';

import {Avatar, Card, CardActions, CardHeader, CardMedia, CardTitle, CardText,
        FlatButton, List, ListItem, Subheader, Divider, SvgIcon,
        Tabs, Tab} from 'material-ui';

import {pink400, blue700, blue800, greenA700, grey800} from 'material-ui/styles/colors';





const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  }
};

const ExpandIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
  </SvgIcon>
);

const CompressIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
  </SvgIcon>
);




var CardTabs  = React.createClass({

  getInitialState: function() {
    return {slideIndex: 0};
  },

  handleChange: function(value) {
    this.setState({slideIndex: value});
  },

  render: function() {
    var project = this.props.project;
    return (
      <div>
       <Tabs
         onChange={this.handleChange}
         value={this.state.slideIndex}
         inkBarStyle={{backgroundColor:project.textColor}}
       >
         <Tab style={{backgroundColor:project.color, color:project.textColor}} label="About" value={0} />
         <Tab style={{backgroundColor:project.color, color:project.textColor}} label="Built With" value={1} />
       </Tabs>
       <SwipeableViews
         index={this.state.slideIndex}
         onChangeIndex={this.handleChange}
         style={{margin: 6}}
       >


         <div style={{padding:16, color: project.textColor}}>
           {this.props.info.map(function(paragraph, i){
             return <p key={i}>{paragraph}</p>;
           })}
         </div>

         <div>
           {this.props.tools}
         </div>


       </SwipeableViews>
     </div>
   );
  }

});








var ProjectCard = React.createClass({

  getInitialState: function() {
    return {
      expanded: false
    };
  },

  handleExpandChange: function(expanded) {
    this.setState({expanded: expanded});
  },


  render: function() {

    var project = this.props.project;
    var info    = project.info;

    var tools = project.tools.map(function(tool,i){
      return <ListItem
                style={{color: project.textColor}}
                primaryText={tool.label}
                leftIcon={tool.icon}
                href={tool.link}
                key={tool.label + i}
              />;

          });


    return (
      <Card
        expanded={this.state.expanded}
        onExpandChange={this.handleExpandChange}
        key={project.title}
        className="card"
        style={ project.mobile ?
                {
                  backgroundColor: project.color,
                  color: project.textColor,
                  margin: 6
                }
                :
                {
                  backgroundColor: project.color,
                  color: project.textColor,
                  margin: 6
                }
            }
      >

        <CardHeader
          title={project.title}
          titleStyle={{fontSize: 22}}
          subtitle={project.description}
          subtitleColor={project.textColor}
          subtitleStyle={{fontWeight: 300}}
          titleColor={project.textColor}
          showExpandableButton={true}
          closeIcon={<ExpandIcon color={project.textColor}/>}
          openIcon={<CompressIcon color={project.textColor}/>}

        />

          {!this.state.expanded &&
            <CardMedia
              expandable={false}
              style={{padding: '0px 16px 0px'}}>
              {
                project.mobile ?
                  <img style={{padding: '0px 60px 0'}} src={project.image}/>
                  : <img src={project.image}/>
              }

            </CardMedia>
          }


            <CardText expandable={true} style={{padding:0}}>
              <CardTabs info={info} tools={tools} project={project}/>
            </CardText>




            <CardActions>
              <FlatButton
                style={{color: project.textColor}}
                label="Demo"
                href={project.demo} />
              <FlatButton
                style={{color: project.textColor}}
                label="Code"
                href={project.code}/>
            </CardActions>



{/*
      <CardText expandable={true} >
        {tools}
      </CardText>
*/}








      </Card>
    );
  }

});

export default ProjectCard;
