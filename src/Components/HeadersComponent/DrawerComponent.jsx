import React from "react";
import { Drawer, Box, ListItem, ListItemText, List } from "@material-ui/core";
import { useStyles } from "../HeadersComponent/HeaderStyle";
import { Link } from "react-scroll";
import image from "../images/far1.jpg";

const DrawerComponent = ({ initialState, navlinks, handleDrawerToogler }) => {
  const classes = useStyles();
  return (
    <Drawer
      anchor="left"
      open={initialState}
      onClose={handleDrawerToogler}
      className={classes.drawer}
    >
      <Box className={classes.drawerContainer}>
        <List style={{padding: "60px"}}>
        <div>
        <img className={classes.drawerImage} src={image} alt="" height="auto" width= "100%" />
        </div>
        <br />
        {navlinks.map((item, i) => (
          <ListItem style={{color: "#fff"}} key={i} className={classes.ListItem} 
                to={`${item.id}`}
                activeClass= 'active'
                spy={true}
                smooth={true}
                offset={20}
                duration={500}
                component={Link}
                color='inherit'>
            <ListItemText>
            {item.label}
            </ListItemText>
          </ListItem>
        ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default DrawerComponent;
