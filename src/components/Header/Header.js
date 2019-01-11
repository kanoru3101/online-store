import { Link } from "react-router-dom";
import { routes } from "../../routes";
import React from "react";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import * as appOperations from "../../modules/app/appOperations";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Grid from "@material-ui/core/Grid/Grid";
import Badge from "@material-ui/core/Badge/Badge";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import SingIn from "./SingIn";
import store from "store2";
import SearchComponent from "../SearchComponent/SearchComponent";
import AdminLink from "./AdminLink";
import { withStyles } from '@material-ui/core/styles';

const styles = {
  toolBarBottom: {
    backgroundColor: '#e7efcdfa',
  },
  typography: {
    paddingRight: 30,
    color: '#3f51b5',
    fontWeight: 'bold',
  },
  cart: {
    textDecoration: 'none',
    color: '#009688',
    fontWeight: 'bold',
  },
  cartMedia:{
    maxWidth: 220,
    maxHeight: 70,
}


};


const Header = props => {

  return (
    <AppBar position={"relative"}>
      <Toolbar className={props.classes.toolBarBottom}>
        <Grid container justify={"center"} alignItems={"center"}>
          <Grid item xs={3}>
            <Grid container alignItems={"center"}>
              <Typography variant="h6" color="inherit" className={props.classes.typography}>
                <Link to={routes.home}>
                  <CardMedia
                    component={"img"}
                    alt={"logo"}
                    image={"https://image.ibb.co/j6aUH0/mobileshop.png"}
                    title={"logo"}
                    className={props.classes.cartMedia}
                  />
                </Link>
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={9}>
            <Grid container alignItems={"center"}>
              <Grid item xs={2}>
                <AdminLink {...props} />
              </Grid>
              <Grid item xs={5}>
                <SearchComponent location={props.location} />
              </Grid>
              <Grid item xs={4}>
                <Grid container justify={"flex-end"}>
                  <Typography variant={"h6"} className={props.classes.typography}>
                    <SingIn {...props} />
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={1}>
                <Grid container justify={"flex-end"}>
                  <Typography
                    variant="h6"
                    color={"secondary"}
                    className={props.classes.typography}
                    align={"right"}
                  >
                    <Link
                      to={{ pathname: routes.cart, state: { modal: true } }}
                      className={props.classes.cart}
                    >
                      <Badge
                        badgeContent={props.cartItemsCount}
                        color={"secondary"}
                      >
                        <ShoppingCartIcon />
                      </Badge>
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state, props) => ({
  cartItemsCount: state.cart.items.length,
  token: store.local.get("token"),
  user: state.app.user,
  location: props.location
});

const mapStateToDispatch = {
  removeToken: appOperations.removeToken
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(withStyles(styles)(Header));
