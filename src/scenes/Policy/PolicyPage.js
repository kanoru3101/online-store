import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";

const styles = {
  titles: {
    paddingTop: 30,
    paddingBottom: 10,
    paddingLeft: 10,
    fontWeight: "bold"
  },
  container: {
    marginBottom: 20,
    marginTop: 20
  }
};

const PolicyPage = () => (
  <Grid container justify={"center"} style={styles.container}>
    <Grid item xs={7}>
      <Typography component={"h4"} variant={"h4"} align={"left"}>
        Policy
      </Typography>
    </Grid>
    <Grid item xs={7}>
      <Typography
        component={"h4"}
        variant={"title"}
        align={"left"}
        gutterBottom
        style={styles.titles}
      >
        Registration on the site
      </Typography>
    </Grid>

    <Grid item xs={7}>
      <Typography component={"p"} variant={"subtitle1"} align={"justify"}>
        By registering on the Site, you agree to provide accurate and accurate
        information about yourself and your contact details.
      </Typography>
      <br />
      <Typography component={"p"} variant={"subtitle1"} align={"justify"}>
        As a result of registration, you receive a login and a password for
        which you are responsible for the security. You are also responsible for
        all actions under your login and password on the Site. In case of loss
        of registration data, you are obliged to inform us about it.
      </Typography>
    </Grid>

    <Grid item xs={7}>
      <Typography
        component={"h6"}
        variant={"h6"}
        align={"left"}
        gutterBottom
        style={styles.titles}
      >
        Use of personal data
      </Typography>
    </Grid>

    <Grid item xs={7}>
      <Typography component={"p"} variant={"subtitle1"} align={"justify"}>
        We use various technologies for collecting and storing information when
        you visit the Online Store site (more about protection and processing of
        personal data). This may include recording one or more cookies or
        anonymous identifiers. We also use cookies and anonymous identifiers
        when you interact with services offered by our partners, such as
        advertising services, such as those that may appear on other sites.
      </Typography>
    </Grid>
  </Grid>
);

export default PolicyPage;
