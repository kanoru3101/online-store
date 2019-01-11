import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Grid from "@material-ui/core/Grid/Grid";
import { Link } from "react-router-dom";
import { formatRoute } from "react-router-named-routes";
import { routes } from "../../routes";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  menuItem: {
    height: "100%",
    width: "100%",
    color: "#F57C00",
    display: "flex",
    paddingBottom: 0,
    paddingTop: 0,
    borderBottom: 1
  },
  container: {
    color: "#009688",
    alignItems: "center",
    height: "100%",
    width: "100%"
  },
  containerHover: {
    color: "#F57C00",
    alignItems: "center",
    height: "100%",
    width: "100%"
  },
  img: {
    maxHeight: 50
  }
};

const RenderSuggestion = props => {
  const { suggestion, isHighlighted, classes } = props;
  const id = suggestion.id;
  return (
    <MenuItem
      selected={isHighlighted}
      className={classes.menuItem}
      component={"div"}
    >
      <Link
        to={formatRoute(routes.productPage, { id })}
        className={classes.menuItem}
      >
        <Grid
          container
          justify={"flex-start"}
          className={isHighlighted ? classes.containerHover : classes.container}
        >
          <Grid item xs={2}>
            <img
              alt={suggestion.title}
              src={suggestion.image}
              title={suggestion.title}
              className={classes.img}
            />
          </Grid>
          <Grid item xs={10}>
            <div>{suggestion.title}</div>
          </Grid>
        </Grid>
      </Link>
    </MenuItem>
  );
};

export default withStyles(styles)(RenderSuggestion);
