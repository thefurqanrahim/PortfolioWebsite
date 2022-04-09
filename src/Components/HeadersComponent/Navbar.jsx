import React from "react";
import { useStyles } from "./HeaderStyle";
import { Hidden, IconButton, AppBar, Box, Toolbar, Typography, Button  } from "@material-ui/core";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Link } from "react-scroll";

const Navbar = ({ navlinks, handleDrawerToogler }) => {
  const classes = useStyles();
  return (
    <Box>
      <AppBar position="fixed" className={classes.navbar}>
        <Toolbar className={classes.ToolBar}>
        <a href="Header" style={{textDecoration : "none", color: "#fff"}}>
          <Typography style={{display: "flex"}} variant="h2" component="h6" sx={{ flexGrow: 1 }} className="navlogo">
          {/* <img src={image} style={{width: "10%"}} alt="" /> */}
          FR
          </Typography>
          </a>
          <Box component={Hidden} xsDown>
            <Box>
              {navlinks.map((item, i) => (
                <Button key={i} className={classes.navlinks}
                to={`${item.id}`}
                activeClass= 'active'
                spy={true}
                smooth={true}
                offset={20}
                duration={500}
                component={Link}
                color='inherit'
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Box>
          <Box component={Hidden} smUp>
            <IconButton
              color="inherit"
              onClick={handleDrawerToogler}
              style={{ padding: "0" }}
            >
              <MenuOpenIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
