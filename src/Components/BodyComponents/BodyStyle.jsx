import { makeStyles } from "@material-ui/core";
import { Theme } from "../Theme";


export const useStyles = makeStyles((theme) => ({
    section: {
        backgroundColor: Theme.colors.base1,
        padding: theme.spacing(10, 0, 8, 0),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    "@media only screen and (max-width: 1200px)" : {
        section: {
             padding: theme.spacing(6, 0, 2, 0),
              
         }
    },
    sectionDark: {
        backgroundColor: Theme.colors.primary1,
        padding:"40px 0 70px",
        // padding: theme.spacing(10, 0, 8, 0),
    },
    decorater :{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    divider: {
       width: "64px",
       height: "4px",
       display: "flex",
       flexDirection: "column",
       backgroundColor: Theme.colors.primary,
    //    margin: theme.spacing(2, 0)
    },
    responsiveImg: {
        width: "100%",
        height: "auto",
    },
    gradientOverlay:{ },
    sectionHeadingCont: {
        padding: theme.spacing(1),
        color: Theme.colors.base2
    },
    sectionHeading: {
     color: Theme.colors.base2,
     margin: theme.spacing(1, 0),
    },
    AvatarCont: {
            display: "flex",
            flexFlow: "row",
            justifyContent: "center",
            alignItems: "center"
    },
    avatar: {
       background: Theme.colors.primary,
       color: Theme.colors.base2,
    },
    MediaText: {
        // background: Theme.colors.primary,
        color: Theme.colors.base2,
     },

     imageContainer:{
         position: "relative",
         '&:hover $imageOverlay' : {
             opacity : 0.8
         }
     },
     imageOverlay: {
         position: "absolute",
         width: "100%",
         height: "100%",
         top: 0,
         left: 0,
         backgroundColor: Theme.colors.primary,
         color: Theme.colors.base2,
         display: "flex",
         flexFlow: "column wrap",
         justifyContent: "center",
         alignItems: "center",
         opacity: 0,
         transition: "0.7s",
     },
     overlayTitle: {
         fontSize: "2rem",
         marginBottom: "10px",
         textAlign: "center",
         [theme.breakpoints.down("xs")]: {
             fontSize: "1.2rem",
         }
     },
     submitBtn: {
         backgroundColor: Theme.colors.primary,
         color: Theme.colors.base2,
       "&:hover" : {
           backgroundColor: Theme.colors.primary1,
           borderStyle: "none"
       }
     },


     footerContainer: {
         backgroundColor: Theme.colors.primary1,
         color: Theme.colors.base2,
         padding: theme.spacing(2),
         position: "relative",
     },
     iconButton: {
          position: "absolute",
          right: 5,
          top: -25,
          backgroundColor: Theme.colors.primary,
          color: Theme.colors.base2, 
     }
}));