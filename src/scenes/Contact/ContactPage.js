import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader/ListSubheader";

const styles = {
  title: {
    paddingBottom: 20,
    paddingLeft: 20
  },
  titles: {
    paddingTop: 30,
    paddingBottom: 10,
    paddingLeft: 10
  },
  list: {
    listStyleType: "none",
    borderRight: "1px solid #D8D8D8"
  },
  subHeader: {
    color: "#7c7c7c"
  },
  subTitle: {
    fontWeight: "bold",
    color: "#7c7c7c",
    paddingTop: 5
  }
};

const ContactPage = () => (
  <Grid
    container
    justify={"center"}
    style={{ marginBottom: 40, marginTop: 20 }}
  >
    <Grid item xs={7}>
      <Typography
        component={"h4"}
        variant={"h4"}
        align={"left"}
        style={styles.title}
      >
        Advice and ordering by phone
      </Typography>
    </Grid>
    <Grid item xs={7}>
      <Grid container spacing={16}>
        <Grid item xs={6}>
          <Grid container justify={"center"} style={styles.list}>
            <List subheader={<li />}>
              <ListItemText>
                <Typography component={"h6"} variant={"h6"} align={"left"}>
                  (044) 333-33-33
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography component={"h6"} variant={"h6"} align={"left"}>
                  (044) 333-33-34
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography component={"h6"} variant={"h6"} align={"left"}>
                  (044) 333-33-35
                </Typography>
              </ListItemText>
            </List>
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Typography
            component={"p"}
            variant={"subtitle1"}
            style={styles.subTitle}
          >
            Schedule call center
          </Typography>
          <Typography component={"p"} variant={"subheading"}>
            From 8:00 To 21:00
          </Typography>
          <Typography
            component={"p"}
            variant={"subtitle2"}
            style={styles.subHeader}
          >
            Saturday: 9am to 8pm
          </Typography>
          <Typography
            component={"p"}
            variant={"subtitle2"}
            style={styles.subHeader}
          >
            Sunday: 10:00 to 19:00
          </Typography>
        </Grid>
        <br />
        <Grid item xs={6}>
          <List style={styles.list} subheader={<li />}>
            <ListSubheader>
              <Typography
                component={"p"}
                variant={"subtitle1"}
                style={styles.subTitle}
              >
                Service department
              </Typography>
            </ListSubheader>
            <ListItemText>Kyiv, S. Bandera Avenue, 6</ListItemText>
            <ListItemText>Kyiv, st. Konstantinovskaya, 71</ListItemText>
            <ListItemText>Kyiv, st. Khreshchatyk, 20-22</ListItemText>
          </List>
        </Grid>

        <Grid item xs={6}>
          <Typography
            component={"p"}
            variant={"subtitle1"}
            style={styles.subTitle}
          >
            Schedule (Mon-Sat)
          </Typography>
          <Typography component={"p"} variant={"subheading"}>
            From 10:00 to 21:00
          </Typography>
          <Typography
            component={"p"}
            variant={"subtitle2"}
            style={styles.subHeader}
          >
            Sunday: 10:00 to 18:00
          </Typography>
          <Typography
            component={"p"}
            variant={"subtitle2"}
            style={styles.subHeader}
          >
            Sunday: 10:00 to 19:00
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default ContactPage;
