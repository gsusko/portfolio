import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import ForgottenImage from './images/Forgotten.png';
import ScheggieXImage from './images/ScheggieX.png';
import WanderlyImage from './images/Wanderly.png';
import SptfydImage from "./images/Sptfyd.png";
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import aboutMePic from './images/aboutMe.png';
import github from './images/github.png';
import linkedin from './images/linkedin.png';
import mail from './images/mail.png';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apps: ['Forgotten', 'ScheggieX', 'Wanderly', "Sptfy'd"],
      images: [ForgottenImage, ScheggieXImage, WanderlyImage, SptfydImage],
      sites: ['http://www.ninjarabbits.com', 'https://scheggie-extension.herokuapp.com/', 'https://travel-destination-planner.herokuapp.com/', 'https://drive.google.com/file/d/0B2rGtmNj3LSndE40cFhSQnFTVHc/view?usp=sharing'],
      slideIndex: 0
    }

  }

  handleChange(value) {
    this.setState({
      slideIndex: value,
    });
  };

  handleMouseEnter(e) {
    var grid = document.getElementsByClassName(e.target.id)[0];
    grid.style.border = 'solid #E94F37';
    grid.style.boxShadow = '10px 10px 5px grey';
  }

  handleMouseLeave(e) {
    var grid = document.getElementsByClassName(e.target.id)[0];
    grid.style.border = 'none';
    grid.style.boxShadow = 'none';
  }

  render() {
    const styles = {
      headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
      },
      slide: {
        padding: 10,
      },
    };

    return (
      <div>
        <Tabs
          onChange={this.handleChange.bind(this)}
          value={this.state.slideIndex}
        >
          <Tab label="Applications" value={0} />
          <Tab label="About Me" value={1} />
          <Tab label="Contact" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange.bind(this)}
        >
          <div>
            <GridList style={{paddingTop: '10px'}} cellHeight={600} cols={4}>
              {this.state.apps.map((app, id) => (
                <GridTile
                  className={app}
                  key={id}
                  title={app}
                  titleBackground="linear-gradient(to top, rgba(0,0,0,0.9) 0%,rgba(0,0,0,0.7) 70%,rgba(0,0,0,0) 100%)"
                  >
                    <img id={app} onMouseEnter={(e) => {this.handleMouseEnter(e)}} onMouseLeave={(e) => {this.handleMouseLeave(e)}} onClick={()=> window.open(this.state.sites[id], "_blank")} style={{height: '100%', display: 'flex', cursor:'pointer'}} src={this.state.images[id]} alt={app}/>
                </GridTile>
              ))}
            </GridList>
          </div>

          <div style={{padding: '10'}}>
            <br></br>
            <img style={{alignItems: 'center', margin: 'auto', borderRadius: '50%', height: '400px'}} src={aboutMePic}/>
            <p style={{color: 'black', width: '70%', margin: 'auto'}}> <br></br>I am an experienced full-stack software engineer specializing in frontend frameworks. My focus has primarily been on building efficient Javascript applications that create beautiful user interfaces and intuitive user flow.

            I'm passionate about using new and innovative concepts to solve problems and build comprehensive applications.</p>
          </div>
          <div style={styles.slide}>
            <br></br>
            Find me at the following links:
            <br></br>
            <span style={{float: 'center'}}>
              <br></br>
              <a href="https://www.github.com/gsusko" target="_blank" rel="noopener noreferrer" style={{marginRight: '20px'}}><img src={github}/></a>
              <a href="https://www.linkedin.com/in/gregsusko/" target="_blank" rel="noopener noreferrer" style={{marginRight: '20px'}}><img src={linkedin}/></a>
              <a href="mailto:gsusko1@gmail.com"><img src={mail}/></a>
            </span>
          </div>
        </SwipeableViews>
      </div>
    )
  }
}

  export default Portfolio;
