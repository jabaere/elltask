import picturesData from "./pictures";
import "./App.css";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import KeyboardArrowRightOutlinedIcon from "@material-ui/icons/KeyboardArrowRightOutlined";
import KeyboardArrowLeftOutlinedIcon from "@material-ui/icons/KeyboardArrowLeftOutlined";
import avatar from "./pics/img_avatar.png";
import Popover from "@material-ui/core/Popover";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { RiFacebookFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import hover from "./pics/hover.png";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
const useStyles = makeStyles((theme) => ({
  nav: {
    display: "flex",
    justifyContent: "space-around",
    width: "600px",
  },
  a: {
    textDecoration: "none",
    color: "white",
  },
  header: {
    backgroundColor: "#282c34",

    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    fontSize: "calc(10px + 1vmin)",
    color: "#ffffff",
    justifyContent: "space-between",
    backgroundPosition: "center",
    backgroundSize: "1500px, 100vh",
    backgroundRepeat: "no-repeat",
   
    [theme.breakpoints.down(850)]: {
      backgroundSize: "2000px, 100vh",
    },
    [theme.breakpoints.up(1500)]: {
      backgroundSize: "2000px, 100vh",
    },
    [theme.breakpoints.down(520)]: {
      backgroundSize: "1500px, 100vh",
    },
  },
  navAndLogo: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "25px",
    marginLeft: "20px",
  },
  button: {
    backgroundColor: "inherit",
    marginRight: "15px",
    border: "1px solid #919191",

    "&:hover": {
      backgroundColor: "#1565C0",
      border: "1px solid rgba(0,0,0,0.2)",
    },
  },
  contactUsButtonBottom: {
    color: "#ffffff",
    backgroundColor: "#1565C0",
    width: "100%",
  },

  sliderButtons: {
    width: "50px",
    height: "50px",
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    borderRadius: "6px",
    marginRight: "10px",
    cursor: "pointer",
  },
  sliderButtonsActive: {
    width: "50px",
    height: "50px",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    borderRadius: "6px",
    marginRight: "10px",
    cursor: "pointer",
    backgroundColor: "#ffffff",
  },
  teamConteiner: {
    backgroundColor: "white",
  },
  team: {
    backgroundColor: "#1565C0",
    marginTop: "30px",
    color: "#ffffff",
    fontSize: "20px",
  },
  teamCards: {
    display: "flex",
    justifyContent: "space-evenly",
    height: "100vh",
    [theme.breakpoints.down(742)]: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "auto",
    },
  },
  avatar: {
    width: "370px",
    height: "430px",
    borderRadius: "8px",
    [theme.breakpoints.down(1238)]: {
      width: "100%",
      height: "auto",
    },
  },
  teamHeader: {
    display: "flex",
    width: "90%",
    margin: "0 auto",
    color: "#ffffff",
  },
  contactUs: {
    marginTop: "30px",
  },
  contact: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down(1238)]: {
      flexDirection: "row",
      justifyContent: "center",
    },
  },
  spaceUs: {
    marginRight: "15px",
    [theme.breakpoints.down(520)]: {
      marginRight: "0px",
      width:'100%'
    },
  },
  spaceUs2:{
    [theme.breakpoints.down(520)]: {
      marginTop:'15px',
      width:'100%'
    },
  },
  popOver: {
    marginTop: "-80px",
    height: "35px",
    width: "300px",
    backgroundColor: "rgba(0,0,0,0.1)",
    padding: "10px",
    borderRadius: "10px",
    [theme.breakpoints.down(1238)]: {
      width: "200px",
      left: "500px",
      flexDirection: "row",
      justifyContent: "center",
    },
  },
  popoverTop: {
    top: "350px",
  },
  cardHover: {
    height: "470px",
    width: "330px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "8px",

    "&:hover": {
      backgroundImage: `url(${hover})`,
    },
    [theme.breakpoints.down(1238)]: {
      width: "250px",
      height: "auto",
      "&:hover": {
        backgroundImage: "none",
      },
    },
    [theme.breakpoints.down(780)]: {
      width: "220px",
      height: "auto",
    },
  },
  footer: {
    backgroundColor: "#1D1D1D",
    color: "#FFFFFF",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down(520)]: {
      flexDirection: "column",
    },
  },
  footerSocialIcons: {
    width: "40px",
    height: "40px",
    backgroundColor: "#292727",
    marginRight: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mapAndContact: {
    display: "flex",
    justifyContent: "space-evenly",
    [theme.breakpoints.down(1238)]: {
      flexDirection: "column",
    },
  },
  mapOfContactUs: {
    width: "40%",
    [theme.breakpoints.down(1238)]: {
      width: "auto",
      display: "flex",
      justifyContent: "center",
    },
  },
  mobileMap: {
    width: "570px",
    height: "360px",
    [theme.breakpoints.down(520)]: {
      width: "350px",
      margin: "0 auto",
    },
  },
  mobileIdMap: {
    [theme.breakpoints.down(520)]: {
      width: "350px",
      margin: "0 auto",
    },
  },
  privacyAndTerms: {
    display: "flex",
    marginLeft: "60px",
    [theme.breakpoints.down(520)]: {
      marginLeft: "0px",
    },
  },
  sociaIcons: {
    display: "flex",
    marginRight: "60px",
    [theme.breakpoints.down(520)]: {
      margin: "20px auto",
    },

    headerMiddleContent: {
      width: "60%",
      margin: "0 auto",
      [theme.breakpoints.down(520)]: {
        width: "auto",
      },
    },

    tabWrapper: {
      fontSize: "32px",
    },
  },
}));

const teamData = [
  {
    avatar: avatar,
    name: "Giorgi giorgadze",
    position: "Graphic Design",
    facebook: "#1facebook",
    linkedin: "#1linkedin",
    twiter: "#1twiter",
  },
  {
    avatar: avatar,
    name: "EKA SHANIDZE",
    position: "CEO",
    facebook: "#2facebook",
    linkedin: "#2linkedin",
    twiter: "#2twiter",
  },
  {
    avatar: avatar,
    name: "Giorgi giorgadze",
    position: "Web Developer",
    facebook: "#3facebook",
    linkedin: "#3linkedin",
    twiter: "#3twiter",
  },
];

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Header />
      <body>
        <Team />
        <ContactUs />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

function Header() {
  const classes = useStyles();
  const [sliderIndexLeft, setSliderIndexLeft] = React.useState(0);
  const [sliderIndexRight, setSliderIndexRight] = React.useState(0);
  const [imageIndex, setSImageIndex] = React.useState(0);
  function sliderClickRight() {
    setSliderIndexLeft(0);
    setSliderIndexRight(1);
    if (imageIndex < picturesData.length - 1) {
      setSImageIndex(imageIndex + 1);
    }
  }
  function sliderClickLeft() {
    setSliderIndexLeft(1);
    setSliderIndexRight(0);
    if (imageIndex !== 0) {
      setSImageIndex(imageIndex - 1);
    }
  }

  return (
    <div>
      <header
        className={classes.header}
        style={{ backgroundImage: `url(${picturesData[imageIndex].url})` }}
      >
        <div id="navAndLogo" className={classes.navAndLogo}>
          <div id="logo">LOGo</div>
          <nav className={classes.nav}>
            <div>
              <a href="#" className={classes.a}>
                ABOUT
              </a>
            </div>
            <div>
              <a href="#" className={classes.a}>
                SERVICES
              </a>
            </div>
            <div>
              <a href="#" className={classes.a}>
                PROJECTS
              </a>
            </div>
            <div>
              <a href="#" className={classes.a}>
                TEAM
              </a>
            </div>
            <div>
              <a href="#" className={classes.a}>
                CONTACT
              </a>
            </div>
          </nav>
        </div>
        <div id="headerMiddleContent" className={classes.headerMiddleContent}>
          <h1>We do software development</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque,
            laboriosam veritatis, quos non quis ad perspiciatis, totam corporis
            ea, alias ut unde.
          </p>
          <div id="buttons" style={{ marginLeft: "15px", marginTop: "20px" }}>
            <Button
              variant="contained"
              color="primary"
              classes={{ root: classes.button }}
              size="large"
            >
              READ MORE
            </Button>
            <Button
              variant="contained"
              color="primary"
              classes={{ root: classes.button }}
              size="large"
            >
              Contact Us
            </Button>
          </div>
        </div>
        <div
          id="sliderButtons"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "10px",
            marginRight: "10px",
          }}
        >
          <div
            id="left"
            className={
              sliderIndexLeft === 0
                ? classes.sliderButtons
                : classes.sliderButtonsActive
            }
            onClick={sliderClickLeft}
          >
            {" "}
            <KeyboardArrowLeftOutlinedIcon
              color={sliderIndexLeft === 0 ? "inherit" : "primary"}
            />{" "}
          </div>
          <div
            id="right"
            className={
              sliderIndexRight === 0
                ? classes.sliderButtons
                : classes.sliderButtonsActive
            }
            onClick={sliderClickRight}
          >
            {" "}
            <KeyboardArrowRightOutlinedIcon
              color={sliderIndexRight === 0 ? "inherit" : "primary"}
            />{" "}
          </div>
        </div>
      </header>
    </div>
  );
}

function Team(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handler = function (e) {
    console.log(e.target.getAttribute("data-key")); //will log the index of the clicked item
    //alert( e.target.getAttribute("dataIndex"))
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className={classes.teamContainer}>
      <div id="team" className={classes.team}>
        <div id="teamHeader" className={classes.teamHeader}>
          <h4>OUR TEAM</h4>
        </div>
        <div id="teamCards" className={classes.teamCards}>
          {teamData.map((people, index) => {
            return (
              <div id="cardOne" className={classes.cardHover}>
                <div
                  id="image"
                  onClick={handleClick}
                  style={{ marginTop: "20px", cursor: "pointer" }}
                >
                  <img src={avatar} className={classes.avatar} />
                </div>
                <div id="name">
                  <p>{people.name}</p>
                  <p style={{ fontSize: "16px" }}>{people.position}</p>
                </div>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  classes={{ paper: classes.popOver }}
                  onClick={handler}
                  data-key={index}
                  key={index}
                >
                  <Box
                    display="flex"
                    justifyContent="space-evenly"
                    alignItems="center"
                  >
                    <Box>
                      <a href={people.facebook} style={{ color: "inherit" }}>
                        <RiFacebookFill
                          style={{
                            width: "31px",
                            height: "31px",
                            cursor: "pointer",
                          }}
                        />
                      </a>
                    </Box>
                    <Box>
                      <a href={people.linkedin} style={{ color: "inherit" }}>
                        <RiLinkedinFill
                          style={{
                            width: "31px",
                            height: "31px",
                            cursor: "pointer",
                          }}
                        />
                      </a>
                    </Box>
                    <Box>
                      <a href={people.twiter} style={{ color: "inherit" }}>
                        <RiTwitterFill
                          style={{
                            width: "31px",
                            height: "31px",
                            cursor: "pointer",
                          }}
                        />
                      </a>
                    </Box>
                  </Box>
                </Popover>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const MyMapComponent = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: -34.397, lng: 150.644 }} />
      )}
    </GoogleMap>
  ))
);

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();
 

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} className={classes.mapAndContact}>
          <Box mr={2} width="auto">
            <fieldset
              disabled={value === 1 ? true : false}
              style={{ border: "none" }}
            >
              {children}
            </fieldset>
          </Box>
          <Box className={classes.mapOfContactUs}>
            <fieldset
              disabled={value === 0 ? true : false}
              style={{ border: "none" }}
            >
              <div id="map" className={classes.mobileIdMap}>
                <MyMapComponent
                  isMarkerShown
                  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div className={classes.mobileMap} />}
                  mapElement={<div style={{ height: `100%` }} />}
                />
                <Box
                  id="contactMail"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  mt={6}
                >
                  <Box id="email" display="flex">
                    <Box>
                      <p>contact@domain.com</p>
                    </Box>
                  </Box>
                  <Box
                    id="line"
                    style={{
                      width: "310px",
                      height: "1px",
                      backgroundColor: "#BDC3C7",
                    }}
                  ></Box>
                </Box>
                <Box display="flex" justifyContent="flex-end" width="100%">
                  <a
                    href="#navAndLogo"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <p>TOP</p>
                  </a>
                </Box>
              </div>
            </fieldset>
          </Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function ContactUs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.contactUs}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
        centered
      >
        <Tab
          label="CONTACT US"
          classes={{ root: classes.tabWrapper }}
          {...a11yProps(0)}
        />

        <Tab
          label="MAP"
          classes={{ wrapper: classes.tabWrapper }}
          {...a11yProps(1)}
        />
      </Tabs>

      <TabPanel value={value} index={0}>
        <div id="contact" className={classes.contact}>
          <form className={classes.root} noValidate autoComplete="off">
            <Box id="name" style={{ marginBottom: "20px" }}>
              <TextField
                id="outlined-basic"
                label="Your Name"
                variant="outlined"
                classes={{ root: classes.spaceUs }}
              />
              <TextField
                id="outlined-basic"
                label="Your Email*"
                variant="outlined"
                classes={{ root: classes.spaceUs2 }}
              />
            </Box>
            <Box id="numberAndSubject" style={{ marginBottom: "20px" }}>
              <TextField
                id="outlined-basic"
                label="Your Phone*"
                variant="outlined"
                classes={{ root: classes.spaceUs }}
              />
              <TextField
                id="outlined-basic"
                label="Subject"
                variant="outlined"
                classes={{ root: classes.spaceUs2 }}
              />
            </Box>
            <div id="message" style={{ marginBottom: "20px" }}>
              <TextField
                label="Your Message*"
                variant="outlined"
                style={{ width: "100%" }}
                inputProps={{
                  style: {
                    height: "200px",
                  },
                }}
                classes={{ root: classes.spaceUs2 }}
              />
            </div>
            <Button
              variant="outlined"
              size="large"
              className={classes.contactUsButtonBottom}
            >
              Contact Us
            </Button>
          </form>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div id="contact" className={classes.contact}>
          <form className={classes.root} noValidate autoComplete="off">
            <Box id="name" style={{ marginBottom: "20px" }}>
              <TextField
                id="outlined-basic"
                label="Your Name"
                variant="outlined"
                classes={{ root: classes.spaceUs }}
              />
              <TextField
                id="outlined-basic"
                label="Your Email*"
                variant="outlined"
              />
            </Box>
            <Box id="numberAndSubject" style={{ marginBottom: "20px" }}>
              <TextField
                id="outlined-basic"
                label="Your Phone*"
                variant="outlined"
                classes={{ root: classes.spaceUs }}
              />
              <TextField
                id="outlined-basic"
                label="Subject"
                variant="outlined"
              />
            </Box>
            <div id="message" style={{ marginBottom: "20px" }}>
              <TextField
                label="Your Message*"
                variant="outlined"
                style={{ width: "100%" }}
                InputProps={{
                  input: {
                    height: "80px",
                  },
                }}
              />
            </div>
            <Button
              variant="outlined"
              size="large"
              className={classes.contactUsButtonBottom}
            >
              Contact Us
            </Button>
          </form>
        </div>
      </TabPanel>
    </div>
  );
}
function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div id="privacyAndTerms" className={classes.privacyAndTerms}>
        <p style={{ marginRight: "15px" }}>Privacy Policy</p>
        <p>Terms of Use</p>
      </div>
      <div id="copyRight"> Copyright © Your Website 2020 </div>
      <div id="sociaIcons" className={classes.sociaIcons}>
        <div id="facebook" className={classes.footerSocialIcons}>
          <RiFacebookFill
            style={{ width: "19px", height: "14px", cursor: "pointer" }}
          />
        </div>
        <div id="linkedin" className={classes.footerSocialIcons}>
          <RiLinkedinFill
            style={{ width: "19px", height: "14px", cursor: "pointer" }}
          />
        </div>
        <div id="twiter" className={classes.footerSocialIcons}>
          <RiTwitterFill
            style={{ width: "19px", height: "14px", cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
