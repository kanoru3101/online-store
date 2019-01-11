import React from "react";
import Grid from "@material-ui/core/Grid";

import InputLabel from "@material-ui/core/InputLabel";

import TextField from "@material-ui/core/TextField/TextField";
import purple from "@material-ui/core/es/colors/purple";
import Typography from "@material-ui/core/Typography/Typography";

const classes = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing.unit
  },
  cssLabel: {
    "&$cssFocused": {
      color: purple[500]
    }
  },
  cssFocused: {},
  cssUnderline: {
    "&:after": {
      borderBottomColor: purple[500]
    }
  },
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: purple[500]
    }
  },
  notchedOutline: {},
  bootstrapRoot: {
    "label + &": {
      marginTop: theme.spacing.unit * 3
    }
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  },
  bootstrapFormLabel: {
    fontSize: 18
  }
});

const FormInput = ({ label, name, required, meta, ...props }) => {
  return (
    <Grid container alignItems={"center"} justify={"center"}>
      <Grid item xs={11} style={{ paddingBottom: 10 }}>
        <Grid container justify={"center"}>
          <Grid item xs={12}>
            <TextField
              className={classes.margin}
              label={name}
              variant="outlined"
              {...props}
            />
          </Grid>
          <Typography align={"center"}>
            <InputLabel>
              {label}
              {required && <label>*</label>}
            </InputLabel>
          </Typography>

          <Grid item xs={8}>
            <Typography align={"center"} component={"div"} color={"error"}>
              {meta.error && meta.touched && <div>{meta.error}</div>}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FormInput;
