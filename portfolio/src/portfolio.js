import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import ForgottenImage from './images/Forgotten.png';
import ScheggieXImage from './images/ScheggieX.png';
import WanderlyImage from './images/Wanderly.png';
import SptfydImage from "./images/Sptfyd.png";
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';


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
    console.log(grid.style);
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
          <div style={styles.slide}>
            slide n°2
          </div>
          <div style={styles.slide}>
            Find me at the following links:<br></br>
            <a href="https://www.github.com/gsusko" target="_blank" rel="noopener noreferrer">Github</a>
            <br></br>
            <a href="https://www.linkedin.com/in/gregsusko/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </SwipeableViews>
      </div>
    )
  }
}

  export default Portfolio;
