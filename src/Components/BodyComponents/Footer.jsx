import React from 'react';
import { Box, IconButton, Typography } from '@material-ui/core';
import { useStyles } from "./BodyStyle";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Link } from "react-scroll";



const Footer = () => {
    const classes = useStyles();
    var date = new Date();
  return (
    <>
<Box className={classes.footerContainer} id="Footer">
    <IconButton className={classes.iconButton}
    activeClass= 'active'
                to="Header"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                component={Link}
    >
        <ArrowUpwardIcon />
    </IconButton>
    <Typography variant="body1" component="h4" align="center" color="inherit" style={{fontSize:"20px"}}>
        Develop & Designed by Furquan Rahim,&nbsp;All Right Reserved&nbsp;<CopyrightIcon style={{position:"relative", top:"4"}} />&nbsp;{date.getFullYear()} 
    </Typography>
</Box>
    </>
  )
}

export default Footer