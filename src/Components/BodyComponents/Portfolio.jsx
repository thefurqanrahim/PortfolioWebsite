import React from "react";
import { Box, Container, Grid, Typography, Button } from "@material-ui/core";
import { useStyles } from "./BodyStyle";
import { RenderSectionHeading } from "../Common/CommonComponents";
// import image1 from "../images/5-2.jpg";
// import image2 from "../images/5-3.jpg";
// import image3 from "../images/5-4.jpg";
// import image4 from "../images/5-6.jpg";
// import image5 from "../images/5-8.jpg";
import image1 from "../images/1.PNG";
import image2 from "../images/2.PNG"
import image3 from "../images/3.PNG"
import image4 from "../images/4.PNG"
import image5 from "../images/5.PNG"
import image6 from "../images/6.PNG";
import ScrollAnimation from "react-animate-on-scroll"



const Portfolio = () => {
  const classes = useStyles();

  const Data = [
    { url:image1, title: "#ُPortfolio", link: "" },
    { url:image2, title: "#Portfolio", link: "" },
    { url:image3, title: "#Portfolio", link: "" },
    { url:image4, title: "#Portfolio", link: "" },
    { url:image5, title: "#Portfolio", link: "" },
    { url:image6, title: "#Portfolio", link: "" },
  ]
  return (
    <>
      <Box className={classes.sectionDark} id="Portfolio">
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
        <img src={Data.url} alt="" />
          <Grid
            item
            xs={12}
            sm={8}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {RenderSectionHeading({
              smallText: "PORTFOLIO",
              heading: "Let's See My Work",
              alignCenter: true,
            })}
          </Grid>
        </Grid>
        <ScrollAnimation animateIn='fadeIn'>
        <Container maxWidth="xl" style={{marginTop: "30px"}}>
          <Grid container spacing={3}>
              <Grid item xs={12} sm={6} lg={4}>
                <Box className={classes.imageContainer}>
                <img src={image1} alt="" className={classes.responsiveImg} />
                <Box className={classes.imageOverlay}>
                  <Typography className={classes.overlayTitle}>Weather App</Typography>
                  <ul style={{textAlign: "center", listStyle: "none", marginBottom:" 20px"}}>
                    <li>React JS</li>
                    <li> React Hooks </li>
                    <li> Material UI</li>
                    <li>API</li>
                  </ul>
                  <a href="https://thefurqanrahim.github.io/Weather/" target="blank" style={{textDecoration: "none"}}>
                  <Button variant="contained">Visit</Button>
                  </a>
                </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <Box className={classes.imageContainer}>
                <img src={image2} alt="" className={classes.responsiveImg} />
                    <Box className={classes.imageOverlay}>
                  <Typography className={classes.overlayTitle}>Islamic Date</Typography>
                  <ul style={{textAlign: "center", listStyle: "none", marginBottom:" 20px"}}>
                    <li>React JS</li>
                    <li> React Hooks </li>
                    <li> Material UI</li>
                    <li>API</li>
                  </ul>
                  <a href="https://thefurqanrahim.github.io/IslamicDates/" target="blank" style={{textDecoration: "none"}}>
                  <Button variant="contained">Visit</Button>
                  </a>
                </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <Box className={classes.imageContainer}>
                <img src={image3} alt="" className={classes.responsiveImg} />
                    <Box className={classes.imageOverlay}>
                  <Typography className={classes.overlayTitle}>Todo App</Typography>
                  <ul style={{textAlign: "center", listStyle: "none", marginBottom:" 20px"}}>
                    <li>React JS</li>
                    <li> React Hooks </li>
                  </ul>
                  <a href="https://thefurqanrahim.github.io/TodoApp/" target="blank" style={{textDecoration: "none"}}>
                  <Button variant="contained">Visit</Button>
                  </a>
                </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} lg={4}>
                <Box className={classes.imageContainer}>
                <img src={image4} alt="" className={classes.responsiveImg} />
                    <Box className={classes.imageOverlay}>
                  <Typography className={classes.overlayTitle}>Bizz World</Typography>
                  <ul style={{textAlign: "center", listStyle: "none", marginBottom:" 20px"}}>
                    <li>React JS</li>
                    <li> React Hooks </li>
                    <li> Bootstrap</li>
                  </ul>
                  <a href="https://thefurqanrahim.github.io/BizzCommunication/" target="blank" style={{textDecoration: "none"}}>
                  <Button variant="contained">Visit</Button>
                  </a>
                </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <Box className={classes.imageContainer}>
                <img src={image5} alt="" className={classes.responsiveImg} />
                    <Box className={classes.imageOverlay}>
                  <Typography className={classes.overlayTitle}>Quiz App</Typography>
                  <ul style={{textAlign: "center", listStyle: "none", marginBottom:" 20px"}}>
                    <li>React JS</li>
                    <li> React Hooks </li>
                  </ul>
                  <a href="https://project-cf43f.web.app/" target="blank" style={{textDecoration: "none"}}>
                  <Button variant="contained">Visit</Button>
                  </a>
                </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <Box className={classes.imageContainer}>
                <img src={image6} alt="" className={classes.responsiveImg} />
                    <Box className={classes.imageOverlay}>
                  <Typography className={classes.overlayTitle}>Graphic Design</Typography>
                  <ul style={{textAlign: "center", listStyle: "none", marginBottom: "10px"}}>
                    <li>Illustrator</li>
                    <li>Photoshop</li>
                    <li>After Effects</li>
                  </ul>
                  <a href="https://www.behance.net/thefurquanrahim" target="blank" style={{textDecoration: "none"}}>
                  <Button variant="contained">Visit</Button>
                  </a>
                </Box>
                </Box>
              </Grid>
          </Grid>
        </Container>
        </ScrollAnimation>
      </Box>
    </>
  );
};

export default Portfolio;
