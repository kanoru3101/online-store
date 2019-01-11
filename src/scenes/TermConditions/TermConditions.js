import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import React from "react";

const styles = {
  title: {
    paddingBottom: 20
  },
  titles: {
    paddingTop: 30,
    paddingBottom: 10,
    paddingLeft: 10,
    fontWeight: "bold"
  },
  warning: {}
};

const TermConditionsPage = () => (
  <Grid
    container
    justify={"center"}
    style={{ marginBottom: 20, marginTop: 20 }}
  >
    <Grid item xs={7}>
      <Typography
        component={"h3"}
        variant={"h3"}
        align={"left"}
        gutterBottom
        style={styles.title}
      >
        Terms of use of the site
      </Typography>
    </Grid>
    <Grid item xs={7}>
      <Typography
        component={"h4"}
        variant={"subtitle1"}
        align={"left"}
        style={styles.titles}
      >
        Warning! Read these terms carefully before viewing this site. If you do
        not agree to these terms, do not use this site.
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
        Use of the site
      </Typography>
    </Grid>

    <Grid item xs={7}>
      <Typography component={"p"} variant={"subtitle1"} align={"justify"}>
        The Online Store site allows you to view and download the materials of
        this site ("the Site") only for personal non-commercial use, provided
        that you keep all information about copyright and other proprietary data
        contained in the source materials and any copies thereof. . It is
        forbidden to modify the materials of this Site, as well as to distribute
        or display them in any form or use them in any other way for public or
        commercial purposes. Any use of these materials on other sites or in
        computer networks is prohibited.
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
        Disclaimer
      </Typography>
    </Grid>

    <Grid item xs={7}>
      <Typography component={"p"} variant={"subtitle1"} align={"justify"}>
        The materials and services of this site are provided "as is" without any
        warranty. The Site does not guarantee the accuracy and completeness of
        the materials, programs and services provided on this Site. The Site
        may, at any time without notice, modify the materials and services
        provided on this Site, as well as the products and prices mentioned
        therein. In case the materials and services on this Site are out of
        date, Rosetta is not obliged to update them. The Site is under no
        circumstances responsible for any loss (including, but not limited to,
        loss of profit, data, or from interruption of business activity) arising
        from the use, inability to use or results of the use of this site.
      </Typography>
    </Grid>
  </Grid>
);

export default TermConditionsPage;
