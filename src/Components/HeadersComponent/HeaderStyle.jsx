import { makeStyles } from "@material-ui/core";
import zIndex from "@material-ui/core/styles/zIndex";
import image from "../images/brandBanner.jpg"
import { Theme } from '../Theme'
export const useStyles = makeStyles((theme) => ({
  navlogo: {
    fontFamily: "lobster"
  },
  HeardWraper: {
    width: "100%",
    height: "auto",
    minHeight: "90vh",
    background: `linear-gradient(to bottom right, #04303140, #00606473), url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  Headercontainer: {
    width: "100%",
    minHeight: "90vh",
    height: "auto",
    padding: "20px",
    color: "#fff",
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: "3rem",
    margin: theme.spacing(2,0),
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem"
    },
  },
  "@media only screen and (max-width: 510px)" : {
    headerTitle: {
         fontSize: "1.4rem",    
     },
    },
    // "@media only screen and (max-width: 360px)" : {
    //   headerTitle: {
    //        fontSize: "1.1rem"    
    //    }
    //   },
  headerDescription: {
    fontSize: "2rem",
    margin: theme.spacing(1,1),
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5 rem",
      margin: theme.spacing(2, 0),
    },
  },
  "@media only screen and (max-width: 510px)" : {
    headerDescription: {
         fontSize: "1rem"    
     }
    },
  navbar: {
    backgroundColor: "#1e464a !important",
    color: "#fff !important",
  },
  ToolBar: {
       display: "flex",
       flexFlow: "row wrap",
       justifyContent: "space-between"
    },
  navlinks: {
    color: "#fff !important",
    fontSize: "16px !important",
  },
  drawerImage: {
    borderWidth: "3px",  
    borderStyle: "solid",
    borderColor: "#fff",
    borderRadius: "100px",
    // height:"100px",
    // width: "100px",
    backgroundColor: "blue",
    zIndex: "-1px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  decorator: {
    display: "flex",
    fontWeight: "bolder",
    // fontFamily: "roboto",
    position: "relative",
    marginTop: "20px",
    // fontSize: "20px",
    '&:before': {
      width: "40px", 
      height: "40px",
      backgroundColor: Theme.colors.primary,
      content: '" "',
      borderRadius: "50%",
    }
  },
  decoratorText: {
    lineHeight: "42px",
    position: "absolute",
    left: "20px",
    fontFamily: "Arial",
  },
  arrow: {
    lineHeight: "55px",
    position: "absolute",
    left: "110px",
    animation: "upDown",
    animationDuration: "0.7s",
    animationIterationCount: "infinite",
  },
    '@global': {
      "@keyframes upDown": {
        "0%": {
          transform: "scale(1,1)",
          paddingTop: "0px",
        },
        "100%": {
          transform: "scale(1,1)",
          paddingTop: "10px",
          // translate: "ease"
        }
      }
    },

    drawer: {
      width: "250px",
      height: "100vh"
    },
    drawerContainer : {
      width: "250px",
      height: "100vh",
      backgroundColor: Theme.colors.primary1,
      display: "flex",
      justifyContent : "center",
      alignItems : "center"
    },
    ListItem : {
      color: Theme.colors.base2,
      position : "relative",
      left : "18%",
      // marginTop : "13px"
      // display : "flex",
      // justifyContent : "center",
      // alignItems : "center"
    }
}));
