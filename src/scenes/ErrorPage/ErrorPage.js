import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";

const styles = {
  container: {
    marginBottom: 20,
    marginTop: 20
  },
  pageTitle: {
    color: "#3f51b5"
  },
  image: {
    maxHeight: 500,
    maxWidth: 500,
    margin: "0 auto"
  }
};

const ErrorPage = () => (
  <Grid container justify={"center"} style={styles.container}>
    <Grid item xs={7}>
      <Typography
        component={"h4"}
        variant={"h4"}
        align={"left"}
        style={styles.pageTitle}
      >
        404 - Page not Found
      </Typography>
    </Grid>
    <Grid item xs={7}>
      <Typography component={"div"} align={"center"}>
        <CardMedia
          component={"img"}
          alt={"Магазин Rozetka.ua"}
          image={"https://cdn-images-1.medium.com/max/1600/0*AnVCpSvrAeldg3Rn."}
          title={"Магазин Rozetka.ua"}
          style={styles.image}
        />
      </Typography>
    </Grid>
  </Grid>
);

export default ErrorPage;
