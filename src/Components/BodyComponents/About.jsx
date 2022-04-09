import React from "react";
import { Box, Grid, Container, Hidden } from "@material-ui/core";
import { useStyles } from "../BodyComponents/BodyStyle";
// import image from "../images/About.jpg";
import image from "../images/Farr.jpg";
import { RenderSectionHeading, CardMedia } from "../Common/CommonComponents";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import WebhookIcon from "@mui/icons-material/Webhook";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import MotionPhotosAutoIcon from "@mui/icons-material/MotionPhotosAuto";
import ScrollAnimation from "react-animate-on-scroll"



export default function About() {
  const classes = useStyles();

  const cardMediaData = [
    {
      title: "Mobile Apps",
      description:
        "In-depth understanding of computer programming language and ability to code.",
      icon: <PhoneIphoneIcon />,
    },
    {
      title: "Web Development",
      description:
      "In-depth understanding of computer programming language and ability to code.",
      icon: <WebhookIcon />,
    },
    {
      title: "E-Commerce Website",
      description:
        "In-depth understanding of computer programming language and ability to code.",
      icon: <DesignServicesIcon />,
    },
    {
      title: "UI/UX Design",
      description: "I build meaningful experiences for users through design.",
      icon: <MotionPhotosAutoIcon />,
    },
  ];

  return (
    <Box className={classes.section} id="About">
    <ScrollAnimation animateIn='fadeIn'>
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          <Grid item sm={6}>
            <Box component={Hidden} smDown>
              <img src={image} alt="About" className={classes.responsiveImg} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} style={{display: "flex", flexDirection: "column", justifyContent: "center"}}> 
            {RenderSectionHeading({
              smallText: "ABOUT ME",
              heading: "Hello, I'm Furquan Rahim",
              description:
                "Skilled freelance Mobile App Developer. Dedicated to staying up-to-date on new techniques and procedures related to Web Development, graphic design, desktop publishing, computer-aided design and video creation. Managed multiple projects simultaneously. Excellent communicators can work as part of a team or as the sole Developer.",
            })}
            <br />
            {/* {CardMedia({
              label: "label1",
              Desc: "Desc1",
              Icon: <AcUnitIcon />,
            })} */}

            <Grid container spacing={3}>
              {cardMediaData.map((item, i) => (
                <Grid item xs={12} md={6} key={i}>
                  {CardMedia({
                    label: item.title,
                    Desc: item.description,
                    Icon: item.icon,
                  })}
                </Grid>
              ))}
              <Grid />
            </Grid>
          </Grid>
        </Grid>
      </Container>
      </ScrollAnimation>
    </Box>
  );
}
