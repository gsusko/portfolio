import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
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
import style from './portfolio.css';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apps: ['Forgotten', 'ScheggieX', 'Wanderly', "Sptfy'd"],
      images: [ForgottenImage, ScheggieXImage, WanderlyImage, SptfydImage],
      sites: ['http://www.ninjarabbits.com', 'https://scheggie-extension.herokuapp.com/', 'https://travel-destination-planner.herokuapp.com/', 'https://drive.google.com/file/d/0B2rGtmNj3LSndE40cFhSQnFTVHc/view?usp=sharing'],
      slideIndex: 0,
      open: false,
      dialogText: '',
      dialogTitle: ''
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

  handleTouchTap = (event) => {
    const dialogInfo = {
      'ABOUT FORGOTTEN': ['Forgotten', <span><i><b>Forgotten is a story and logic-based educational game</b></i> <br></br><br></br><b>Role:</b><br></br>Software Engineer using Javascript, ReactJS, and PostgreSQL<br></br><br></br><b>Contributions:</b><br></br>- Designed and built dynamically rendering SVG map for a level based game<br></br>- Constructed server-side queries to pass information from a PostgreSQL database to a React based client<br></br>- Improved team’s deployment process by implementing a Heroku Pipeline</span>],
      'ABOUT SCHEGGIEX': ['ScheggieX', <span><i><b>A weekly meal planner application for vegetarians</b></i><br></br><br></br><b>Role:</b><br></br>Software Engineer using Javascript, ReactJS, MongoDB, and Heroku<br></br><br></br><b>Contributions:</b><br></br>- Created a Mongoose multi-word query to obtain more accurate database results for searches<br></br>- Managed application state with Redux to compartmentalize app processes<br></br>- Built drag and drop functionality using HTML5 to efficiently move items between components</span>],
      'ABOUT WANDERLY': ['Wanderly', <span><i><b>An all-in-one solution for travel planning</b></i><br></br><br></br><b>Role:</b><br></br>Software Engineer using Javascript, MongoDB, and ReactJS<br></br><br></br><b>Contributions:</b><br></br>- Built modular front-end components to dynamically render content and allow for future extensibility<br></br>- Optimized Storage and querying with MongoDB<br></br>- Designed user interface using Bootstrap to allow for efficient user flow</span>],
      "ABOUT SPTFY'D": ["Sptyf'd", <span><i><b>A Spotify web player utilizing voice commands</b></i><br></br><br></br><b>Role:</b><br></br>Product Owner using Javascript, ReactJS, Express, and MongoDB<br></br><br></br><b>Contributions:</b><br></br>- Integrated voice recognition software in order to implement a hands-free user experience<br></br>- Incorporated Spotify API with Express server to set up a song based search for users</span>]
    }

    this.setState({
      dialogText: dialogInfo[event.target.innerText][1],
      dialogTitle: dialogInfo[event.target.innerText][0],
      open: true
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

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
    const actions = [
      <RaisedButton
        label="Close"
        backgroundColor='#256aa8'
        style={{background: '#256aa8'}}
        labelStyle={{color: 'white'}}
        onClick={this.handleRequestClose}
      />
    ];

    return (
      <div>
        <Tabs
          onChange={this.handleChange.bind(this)}
          value={this.state.slideIndex}
          inkBarStyle={{background: '#0a5699'}}
        >
          <Tab className='tab' label="Applications" value={0} style={{background: '#6398c6'}}/>
          <Tab className='tab' label="About Me" value={1} style={{background: '#6398c6'}}/>
          <Tab className='tab' label="Contact" value={2} style={{background: '#6398c6'}}/>
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange.bind(this)}
        >
          <div>
            <GridList  cellHeight={600} cols={4}>
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
            <div style={{display: 'flex', flexDirection: 'row', margin: '12px'}}>
              <RaisedButton onClick={this.handleTouchTap} label="About Forgotten" backgroundColor='#256aa8' style={{margin: 'auto'}} labelStyle={{color: 'white', fontWeight: 'bold'}}/>
              <RaisedButton onClick={this.handleTouchTap} label="About ScheggieX" backgroundColor='#256aa8' style={{margin: 'auto'}} labelStyle={{color: 'white', fontWeight: 'bold'}}/>
              <RaisedButton onClick={this.handleTouchTap} label="About Wanderly" backgroundColor='#256aa8' style={{margin: 'auto'}} labelStyle={{color: 'white', fontWeight: 'bold'}}/>
              <RaisedButton onClick={this.handleTouchTap} label="About Sptfy'd" backgroundColor='#256aa8' style={{margin: 'auto'}} labelStyle={{color: 'white', fontWeight: 'bold'}}/>
            </div>
            <Dialog
              contentStyle={{
                borderRadius: '20px',
                overflow: 'auto',
                backgroundColor: 'blue !important'
              }}
              title={this.state.dialogTitle}
              titleStyle={{backgroundColor: '#bccce5', textAlign: 'center', fontStyle: 'italic', fontWeight: 'bold', fontFamily: 'sans-serif'}}
              bodyStyle={{backgroundColor: '#bccce5', fontFamily: 'sans-serif'}}
              actionsContainerStyle={{backgroundColor: '#bccce5', fontFamily: 'sans-serif'}}
              style={{whiteSpace: 'pre-line'}}
              paperClassName={style.about}
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
              autoScrollBodyContent={true}
            >
              {this.state.dialogText}
            </Dialog>
          </div>

          <div style={{padding: '10'}}>
            <br></br>
            <img style={{alignItems: 'center', margin: 'auto', borderRadius: '50%', height: '400px', boxShadow: '5px 5px 5px 0px rgba(0,0,0,0.75)'}} src={aboutMePic} alt=""/>
            <p style={{color: 'white', width: '70%', margin: 'auto'}}> <br></br><b>Hi, my name is Greg Susko! I'm an experienced full-stack software engineer specializing in frontend frameworks. My focus has primarily been on building efficient Javascript applications that create beautiful user interfaces and intuitive user flow.

            I'm passionate about using new and innovative concepts to solve problems and build comprehensive applications.</b></p>
          </div>
          <div style={styles.slide}>
            <br></br>
            <p style={{color: 'black', fontSize: '20px'}}><b>Find me at the following links:</b></p>
            <br></br>
            <span style={{float: 'center'}}>
              <br></br>
              <a href="https://www.github.com/gsusko" target="_blank" rel="noopener noreferrer" style={{marginRight: '80px'}}><img className="contactImage" style={{height: '180px'}} src={github} alt="Github"/></a>
              <a href="https://www.linkedin.com/in/gregsusko/" target="_blank" rel="noopener noreferrer" style={{marginRight: '80px'}}><img className="contactImage" style={{height: '180px'}} src={linkedin} alt="LinkedIn"/></a>
              <a href="mailto:gsusko1@gmail.com"><img className="contactImage" style={{height: '180px'}} src={mail} alt="Email"/></a>
            </span>
          </div>
        </SwipeableViews>
      </div>
    )
  }
}

  export default Portfolio;
