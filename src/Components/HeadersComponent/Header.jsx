import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./HeaderStyle";
import Navbar from "../HeadersComponent/Navbar";
import { Decorator } from "../Common/CommonComponents";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import { useState } from "react";
import DrawerComponent from "./DrawerComponent";
import Typed from "react-typed"

const Header = () => {
  const classes = useStyles();
  const [initialState, setInitialState] = useState(false);
  
  const handleDrawerToogler = () => {
    setInitialState(!initialState);
  }; 

  const navlinks = [
    { label: "About", id: "About" },
    { label: "Portfolio", id: "Portfolio" },
    { label: "Contact", id: "Contact" },
  ];
  return (
    <Box className={classes.HeardWraper} id="Header">
      <Navbar  navlinks={navlinks} handleDrawerToogler={handleDrawerToogler}/>,
      <DrawerComponent initialState={initialState} navlinks={navlinks} handleDrawerToogler={handleDrawerToogler} />
      <Box className={classes.Headercontainer}>
        <Typography variant="h5" component="h4" className={classes.headerTitle}><span style={{paddingRight: "5px"}}></span> 
          <Typed 
            strings={[
              "This is, Furquan Rahim,",
              "Mobile App Developer,",
              "Web Developer,",
              "E-Commerce Developer,",
              "UI / UX Designer,",
              "Graphic Designer,",
              "Video Animator,"
            ]}
            typeSpeed={30}
            backSpeed={50}
            loop
          />
        </Typography>
        <Typography
          variant="h5"
          component="h4"
          className={classes.headerDescription}>
          I Create Website And Application, Based On Your Needs...
        </Typography>

        {Decorator({
          label: "ABOUT ME",
          withIcon:true,
          Icon: <ArrowDownwardRoundedIcon />,
        })}
      </Box>
    </Box>
  )
};

export default Header;
