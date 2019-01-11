import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import Grid from "@material-ui/core/Grid/Grid";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button/Button";
import s from "./Footer.module.css";

const Footer = () => (
  <>
    <AppBar position={"static"} color={"default"} className={s.root}>
      <Toolbar className={s.toolBar}>
        <Grid container justify={"center"} alignItems={"center"}>
          <Grid item xs={3}>
            <Grid container justify={"flex-end"}>
              <Typography component={"div"}>
                <CardMedia
                  component={"img"}
                  alt={"logo"}
                  image={"https://image.ibb.co/j6aUH0/mobileshop.png"}
                  title={"logo"}
                  style={{ maxWidth: 150, maxHeight: 50 }}
                />
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container justify={"center"}>
              <List className={s.list} subheader={<li />}>
                <ListItemText>
                  <Typography
                    component={"h6"}
                    variant={"subtitle2"}
                    align={"left"}
                  >
                    <Link to={routes.about} style={{ textDecoration: "none" }}>
                      About
                    </Link>
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Typography
                    component={"h6"}
                    variant={"subtitle2"}
                    align={"left"}
                  >
                    <Link
                      to={routes.termConditions}
                      style={{ textDecoration: "none" }}
                    >
                      Terms
                    </Link>
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Typography
                    component={"h6"}
                    variant={"subtitle2"}
                    align={"left"}
                  >
                    <Link
                      to={routes.contact}
                      style={{ textDecoration: "none" }}
                    >
                      Contacts
                    </Link>
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Typography
                    component={"h6"}
                    variant={"subtitle2"}
                    align={"left"}
                  >
                    <Link to={routes.policy} style={{ textDecoration: "none" }}>
                      Policy
                    </Link>
                  </Typography>
                </ListItemText>
              </List>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container justify={"flex-start"}>
              <Grid item xs={8}>
                <Grid container justify={"center"} className={s.mediaContainer}>
                  <Grid item xs={12}>
                    <Typography component={"div"} align={"center"}>
                      <Button
                        variant={"fab"}
                        color={"inherit"}
                        className={s.btn}
                      >
                        <CardMedia
                          component={"img"}
                          alt={"FacebookLogo"}
                          image={
                            "https://image.ibb.co/bsSeQL/facebook-icon.png"
                          }
                          title={"FacebookLogo"}
                          style={{
                            maxWidth: 64,
                            maxHeight: 64,
                            margin: "0 auto"
                          }}
                        />
                      </Button>

                      <Button
                        variant={"fab"}
                        color={"inherit"}
                        className={s.btn}
                      >
                        <CardMedia
                          component={"img"}
                          alt={"twitterLogo"}
                          image={"https://image.ibb.co/gwg65L/twitter-icon.png"}
                          title={"twitterLogo"}
                        />
                      </Button>
                      <Button
                        variant={"fab"}
                        color={"inherit"}
                        className={s.btn}
                      >
                        <CardMedia
                          component={"img"}
                          alt={"instagramLogo"}
                          image={
                            "https://image.ibb.co/mX2eQL/intagram-icon.png"
                          }
                          title={"instagramLogo"}
                          style={{
                            maxWidth: 64,
                            maxHeight: 64,
                            margin: "0 auto"
                          }}
                        />
                      </Button>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
      <div className={s.toolBarBottom}>
        <p>© «Online Store™» 2018</p>
      </div>
    </AppBar>
  </>
);

export default Footer;
