import React from "react";
import CartListView from "./CartListView";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";

const styles = {
  total: {
    fontWeight: "bold",
    color: "#7c7c7c",
    paddingTop: 10,
    marginRight: 10
  },
  container: {
    marginTop: 10,
    marginBottom: 20
  },
  btn: {
    width: 100
  }
};

const CardList = ({
  items,
  totalPrice,
  remove,
  changeCountForProduct,
  isModal
}) => {
  return (
    <Grid container spacing={0} justify={"center"} style={styles.container}>
      <Grid item xs={isModal ? 10 : 6}>
        {items.map(item => (
          <CartListView
            key={item.id}
            item={item}
            remove={remove}
            changeCountForProduct={changeCountForProduct}
            id={item.id}
          />
        ))}
        <Grid container justify={"center"} alignItems={"center"}>
          <Grid item xs={8}>
            <Typography
              variant={"headline"}
              align={"right"}
              style={styles.total}
            >
              Total: {totalPrice}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography align={"right"}>
              <Button
                mini
                color={"primary"}
                variant={"contained"}
                style={styles.btn}
              >
                Checkout
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CardList;
