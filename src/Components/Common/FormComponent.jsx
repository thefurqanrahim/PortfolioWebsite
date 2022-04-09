// import React from "react";
import { makeStyles, TextField } from "@material-ui/core";
import { Theme } from "../Theme";


const useStyles = makeStyles((theme) => ({
    csslabel: {
        color: "#d3d3d3",
        "&.Mui-focused": {
            color: Theme.colors.primary,
            // backgroundColor: Theme.colors.primary,
        }, 
    },
    cssOutlinedInput: {
        "&:not(hover):not($disabled):not($cssFocused):not($error) $notchedOutline":
        {
            borderColor: Theme.colors.base2,
            opacity: 0.5,
        },
        "&:hover:not($disabled):not($cssFocused):not($error) $notchedOutline": {
            opacity: 1,
            borderColor: Theme.colors,
        },
        "&$cssFocused $notchedOutline": {
            borderColor: Theme.colors.primary,
            color: Theme.colors.primary,
        },
    },
    notchedOutline: {},
    cssFocused: {},
    error: {},
    disabled: {},
}));
const RenderInputText = ({name, label, state, onChange, multiline, rows}) => {
   const { data, errors } = state; 
   const classes = useStyles();
    return (
      <TextField
      InputLabelProps={{
          classes: {
              root: classes.csslabel,
              focused: classes.cssFocused,
          },
      }}
      InputProps={{
              classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
              },
      }}
        variant="outlined"
        label={label}
        fullWidth={true}
        name={name}
        value={data[name]}
        error={errors[name] ? true : false}
        helperText={errors[name]}
        onChange={onChange}
        multiline={multiline}
        rows={rows}
      />
  );
};

export default RenderInputText;
