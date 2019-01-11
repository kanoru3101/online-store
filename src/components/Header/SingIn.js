import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button/Button";
import { routes } from "../../routes";
import Grid from "@material-ui/core/Grid/Grid";
import React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import { compose, withHandlers } from "recompose";

//change button if user have a token
const handleButton = (token, location, clearToken) => {
  if (token) {
    return (
      <Link to={location.pathname} style={{ textDecoration: "none" }}>
        <Button
          mini
          variant={"text"}
          color={"secondary"}
          onClick={() => {
            clearToken(token);
          }}
        >
          logout
        </Button>
      </Link>
    );
  } else {
    return (
      <Link to={routes.auth} style={{ textDecoration: "none" }}>
        <Button mini variant={"text"} color={"secondary"}>
          login
        </Button>
      </Link>
    );
  }
};

const SingIn = props => (
  <Grid container spacing={8} alignItems={"center"}>
    <Grid item xs={6}>
      <Typography variant={"h6"} color={"secondary"} align={"right"}>
        {props.user ? props.user.firstName : undefined}
      </Typography>
    </Grid>
    <Grid item xs={6}>
      {handleButton(props.token, props.location, props.clearToken)}
    </Grid>
  </Grid>
);

const enhance = compose(
  withHandlers({
    clearToken: props => () => {
      props.removeToken();
    }
  })
);

export default enhance(SingIn);
