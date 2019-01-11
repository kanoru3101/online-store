import React from "react";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Paper from "@material-ui/core/Paper/Paper";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import { withStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField/TextField";
import { formatRoute } from "react-router-named-routes";
import { routes } from "../../routes";
import { Link } from "react-router-dom";

const styles = {
  image: {
    maxWidth: 100,
    maxHeight: 100,
    margin: "0 auto"
  },
  text: {
    textAlign: "left"
  },
  titleProduct: {
    color: "#009688",
    textAlign: "center",
    "&:hover": {
      color: "#F57C00"
    }
  },
  container: {
    marginTop: 5,
    marginBottom: 5
  },
  count: {
    fontWeight: "bold",
    color: "#7c7c7c",
    textAlign: "right"
  },
  countProduct: {
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center"
  },
  price: {
    fontWeight: "bold"
  },
  textField: {
    width: 64,
    height: 30,
    alignItems: "center",
    textAlign: "center",
    margin: 0
  },
  btnCountProduct: {
    width: 30,
    height: 20,
    padding: 4
  },
  btnDelete: {
    color: "#FFFFFF"
  },
  icon: {
    fontSize: 10,
    height: 20,
    fontWeight: "bold"
  },
  input: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#7c7c7c"
  }
};

//constants for change count product
const REMOVE = "REMOVE";
const INCREASE = "INCREASE";

const CartListView = ({ item, remove, classes, id, changeCountForProduct }) => (
  <Paper>
    <Grid container className={classes.container} alignItems={"center"}>
      <Grid item xs={2}>
        <Grid container className={classes.countProduct}>
          <Grid item xs={12}>
            <Button
              className={classes.btnCountProduct}
              onClick={() =>
                changeCountForProduct({
                  id,
                  typeAction: INCREASE
                })
              }
            >
              <AddIcon color={"primary"} />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <TextField
              disabled
              id={"countProduct"}
              className={classes.textField}
              margin={"normal"}
              variant={"outlined"}
              inputProps={{
                className: classes.input
              }}
              value={item.count}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className={classes.btnCountProduct}
              color={"primary"}
              onClick={() =>
                changeCountForProduct({
                  id,
                  typeAction: REMOVE
                })
              }
            >
              <RemoveIcon color={"primary"} />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Link to={formatRoute(routes.productPage, { id })}>
          <Typography align={"right"}>
            <CardMedia
              component={"img"}
              alt={item.title}
              image={item.image}
              title={item.title}
              className={classes.image}
            />
          </Typography>
        </Link>
      </Grid>
      <Grid item xs={6}>
        <Link to={formatRoute(routes.productPage, { id })}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <Typography variant={"h6"} className={classes.titleProduct}>
                {item.title}
              </Typography>
            </Grid>
            <Grid container justify={"flex-end"}>
              <Grid item xs={4}>
                <Typography variant={"subtitle1"} className={classes.count}>
                  Price:
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  variant={"subtitle1"}
                  color={"primary"}
                  align={"right"}
                >
                  {item.price * item.count} UAH
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Link>
      </Grid>
      <Grid item xs={2}>
        <Grid container justify={"center"}>
          <Grid item>
            <Button
              variant="fab"
              mini
              color="secondary"
              aria-label="Delete"
              className={classes.btnDelete}
              onClick={() => remove(id)}
            >
              <DeleteIcon />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Paper>
);

export default withStyles(styles)(CartListView);
