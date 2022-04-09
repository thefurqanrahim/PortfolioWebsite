import React, { useState } from "react";
import emailjs from "emailjs-com"
import { Box, Grid, Container, Hidden, Button } from "@material-ui/core";
import { useStyles } from "../BodyComponents/BodyStyle";
// import image from "../images/About.jpg";
import image from "../images/contactus.jpg";
import { RenderSectionHeading } from "../Common/CommonComponents";
import RenderInputText from "../Common/FormComponent";
import ScrollAnimation from "react-animate-on-scroll"


export default function Contact() {
  const classes = useStyles();
  const [state, setState] = useState({
    data: {
      firstname: "",
      email: "",
      messages: "",
    },
    errors: {},
  });

  const handleOnChange = ({ target }) => {
    const { data, errors } = state;
    target.value.length <= 3
      ? (errors[target.name] = `${target.name} atleast have 3 letters`)
      : (errors[target.name] = "");

    data[target.name] = target.value;
    setState({ data, errors });
  };

  

  const handleSubmit = (e) => {
       e.preventDefault()
       console.log("submitted,", state.data)
       
       emailjs.sendForm('service_zf957mv', 'template_pi7bwam', e.target, "rVC8a7E_GAohVHaon")
       .then(res => {
         console.log(res)
        }).catch(err => console.log(err))
        alert("Your Form Is Submitted")
      }
  return (
    <Box className={classes.section} id="Contact">
      <ScrollAnimation animateIn='fadeIn'>
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          <Grid item sm={6}>
            <Box component={Hidden} smDown>
              <img
                src={image}
                alt="Contact"
                className={classes.responsiveImg}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            {RenderSectionHeading({
              smallText: "CONTACT ME",
              heading: "Seems To Be Intresting",
              description:
                "Skilled freelance Mobile App Developer. Dedicated to staying up-to-date on new techniques and procedures related to Web Development, graphic design, desktop publishing, computer-aided design and video creation. Managed multiple projects simultaneously. Excellent communicators can work as part of a team or as the sole Developer.",
            })}
            <br />

            <form onSubmit={handleSubmit}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={12} sm={10} style={{ marginBottom: "16px" }}>
                  {RenderInputText({
                    label: "First Name",
                    name: "firstName",
                    state: state,
                    onChange: handleOnChange,
                  })}
                </Grid>
                <Grid item xs={12} sm={10} style={{ marginBottom: "16px" }}>
                  {RenderInputText({
                    label: "email@example.com",
                    name: "email",
                    state: state,
                    onChange: handleOnChange,
                  })}
                </Grid>
                <Grid item xs={12} sm={10} style={{ marginBottom: "16px"}}>
                  {RenderInputText({
                    label: "Type your Messages here",
                    name: "messages",
                    state: state,
                    onChange: handleOnChange,
                    multiline: true,
                    rows: 5,
                  })}
                </Grid>
                <Grid item xs={12} sm={10} style={{ marginBottom: "16px" }}>
                <Button variant="outlined" type="submit" fullWidth={true} className={classes.submitBtn} style={{color: "#fff", borderRadius: "5px"}}>
                  Submit
                </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
      </ScrollAnimation>
    </Box>
  );
}
