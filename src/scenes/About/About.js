import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";

const styles = {
  title: {
    paddingBottom: 20
  },
  titles: {
    paddingTop: 30,
    paddingBottom: 10,
    paddingLeft: 10
  }
};

const AboutPage = () => (
  <Grid
    container
    justify={"center"}
    style={{ marginBottom: 40, marginTop: 20 }}
  >
    <Grid item xs={7}>
      <Typography
        component={"h3"}
        variant={"h3"}
        align={"left"}
        style={styles.title}
      >
        About us
      </Typography>
    </Grid>
    <Grid item xs={7}>
      <Typography
        component={"h4"}
        variant={"title"}
        align={"left"}
        style={styles.titles}
      >
        Internet-supermarket - the most popular online store in Ukraine
      </Typography>
    </Grid>
    <Grid item xs={7}>
      <Typography component={"div"} align={"center"}>
        <CardMedia
          component={"img"}
          alt={"Магазин Rozetka.ua"}
          image={"https://i2.rozetka.ua/pages/479/479703.jpg"}
          title={"Магазин Rozetka.ua"}
        />
      </Typography>
    </Grid>
    <Grid item xs={7}>
      <Typography component={"p"} variant={"subtitle1"} align={"left"}>
        We offer a wide range of electronics.
      </Typography>
    </Grid>
    <Grid item xs={7}>
      <Typography
        component={"h4"}
        variant={"title"}
        align={"left"}
        style={styles.titles}
      >
        We are trusted
      </Typography>
    </Grid>
    <Grid item xs={7}>
      <Typography component={"p"} variant={"subtitle1"} align={"justify"}>
        Our main goal and the main principle in the work is the satisfaction of
        customers - both retail buyers and organizations. We have been
        cooperating with some companies for over 10 years. In solving any
        issues, we are always on your side, because we understand - our future
        is 100% in your hands.
      </Typography>
    </Grid>
    <Grid item xs={7}>
      <Typography
        component={"h4"}
        variant={"title"}
        align={"left"}
        style={styles.titles}
      >
        For the convenience of choice
      </Typography>
    </Grid>
    <Grid item xs={7}>
      <Typography component={"p"} variant={"subtitle1"} align={"justify"}>
        We strive to provide as much useful information as possible about the
        products being sold. O has simple and effective tools for selecting
        products according to technical characteristics. For example, in the
        category "Notebooks" you can order sorting for 11 important parameters.
        We are ready to offer 100% compatible products, accessories and
        consumables.
      </Typography>
    </Grid>
    <Grid item xs={7}>
      <Typography component={"p"} variant={"subtitle1"} align={"justify"}>
        Also, in Kiev, we offer to visit the showroom shop, where you can "live"
        to examine and try the device you like in action, or just pick up an
        order.
      </Typography>
    </Grid>
    <Grid item xs={7}>
      <Typography component={"p"} variant={"subtitle1"} align={"justify"}>
        We have professional salesmen and consultants. In telephone mode or
        directly in the store, they are ready to provide a qualified technical
        advice and answer any questions.
      </Typography>
    </Grid>
  </Grid>
);

export default AboutPage;
