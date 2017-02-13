import React from 'react';



import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText,
        FlatButton, List, ListItem, Subheader, Divider, SvgIcon} from 'material-ui';

import {pink400, blue700, blue800, greenA700} from 'material-ui/styles/colors';





const styles = {


}

const ExpandIcon = (props) => (
  <SvgIcon {...props}>
     <path fill={props.color} d="M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,10.91L19,6.41V10H21V3H14V5H17.59L13.09,9.5L14.5,10.91Z" />
  </SvgIcon>
);

const CompressIcon = (props) => (
  <SvgIcon {...props}>
     <path d="M19.5,3.09L15,7.59V4H13V11H20V9H16.41L20.91,4.5L19.5,3.09M4,13V15H7.59L3.09,19.5L4.5,20.91L9,16.41V20H11V13H4Z" />
  </SvgIcon>
);






var ProjectCard = React.createClass({

  render: function() {
    var project = this.props.project;

    var tools = project.tools.map(function(tool,i){
      return <ListItem
                style={{color: project.textColor}}
                primaryText={tool.label}
                leftIcon={tool.icon}
                key={tool.label + i}
              />;

          });


    return (
      <Card
        initiallyExpanded={project.showcase}
        key={project.title}
        className="card"
        style={ project.mobile ?
                {
                  backgroundColor: project.color,
                  color: project.textColor,
                  margin: 6,
                }
                :
                {
                  backgroundColor: project.color,
                  color: project.textColor,
                  margin: 6,
                }
            }
      >




      <CardTitle
        actAsExpander={true}
        showExpandableButton={true}
        title={project.title}
        subtitle={project.description}
        subtitleColor={project.textColor}
        titleColor={project.textColor}
        closeIcon={<ExpandIcon color={project.textColor}/>}
        openIcon={<CompressIcon color={project.textColor}/>}
      />



            <CardActions actAsExpander={true}  >
              <FlatButton style={{color: project.textColor}} label="Demo" href={project.demo} />
              <FlatButton style={{color: project.textColor}} label="Github" href={project.code}/>
            </CardActions>

        <CardMedia
          expandable={true}
          style={{padding: '16px 20px 8px'}}>
          {
            project.mobile ?
              <img style={{padding: '6px 60px 0'}} src={project.image}/>
              : <img src={project.image}/>
          }

        </CardMedia>



        <CardText expandable={true} >
          <List style={{color: project.textColor}}>

            <ListItem
              style={{color: project.textColor}}
              primaryText="built with"
              initiallyOpen={true}
              autoGenerateNestedIndicator={false}/>
            {tools}

{ /*
          <ListItem style={{color: project.textColor}}   leftIcon={<SeatGeekIcon color={project.textColor}/>} primaryText="SeatGeek API" />
          <ListItem style={{color: project.textColor}}   leftIcon={<SpotifyIcon color={project.textColor}/>} primaryText="Spotify API JS" />
           <ListItem style={{color: project.textColor}}  leftIcon={<ReactIcon color={project.textColor}/>}   primaryText="React"  />
*/ }
           </List>
        </CardText>










      </Card>
    );
  }

});

export default ProjectCard;
