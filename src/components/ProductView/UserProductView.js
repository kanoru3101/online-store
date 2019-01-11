import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button/Button";
import React from "react";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";

const styles = {
  title: {
    align: "left"
  },
  price: {
    paddingTop: 10
  }
};

const UserProductView = ({ item, addToCart }) => (
  <Grid container spacing={0} justify={"center"} style={{ paddingBottom: 20 }}>
    <Grid item xs={10}>
      <Grid container spacing={16}>
        <Grid item xs={5}>
          <CardMedia
            component={"img"}
            title={item.title}
            alt={item.title}
            src={item.image}
            style={{ maxWidth: 250 }}
          />
        </Grid>
        <Grid item xs={7}>
          <Card>
            <CardContent>
              <Typography
                style={styles.title}
                variant={"headline"}
                component={"h1"}
                color={"primary"}
              >
                {item.title}
              </Typography>

              <Typography
                align={"left"}
                variant={"subtitle1"}
                color={"textSecondary"}
              >
                Description:
              </Typography>

              <Typography
                align={"justify"}
                style={{ width: "95%" }}
                color={"default"}
                component={"p"}
              >
                {item.description}
              </Typography>

              <Grid container justify={"flex-end"} style={styles.price}>
                <Grid item xs={6}>
                  <Typography color={"secondary"} variant={"h6"}>
                    Price: {item.price} UAH
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography align={"right"}>
                    <Button
                      variant={"contained"}
                      color="primary"
                      mini
                      onClick={() => addToCart(item)}
                    >
                      Add Cart
                    </Button>
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default UserProductView;
