import React from "react";
import Button from "@material-ui/core/Button/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography/Typography";

const styles = {
  btn: {
    paddingBottom: 10,
    paddingLeft: 10
  },
  container: {
    marginBottom: 10,
    marginTop: 10,
    background: "#e9e7f4"
  },
  subTitle: {
    fontWeight: "bold",
    color: "#7c7c7c"
  },
  item: {
    fontWeight: "bold"
  },
  itemContainer: {
    borderRight: "1px solid #D8D8D8"
  }
};

const UserListView = ({ users, deleteUser, showModalUser }) => (
  <Grid container>
    <Grid item xs={12}>
      {users.map(({ firstName, lastName, role, email, id }) => (
        <Card style={styles.container} key={id}>
          <CardContent>
            <Grid container spacing={16} alignItems={"center"}>
              <Grid item xs={2}>
                <Grid
                  container
                  alignItems={"center"}
                  style={styles.itemContainer}
                >
                  <Grid item xs={12}>
                    <Typography variant={"subtitle1"} style={styles.subTitle}>
                      Fist name:
                    </Typography>
                    <Typography
                      variant={"h6"}
                      style={styles.item}
                      color={"primary"}
                    >
                      {firstName}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={2}>
                <Grid
                  container
                  alignItems={"center"}
                  style={styles.itemContainer}
                >
                  <Grid item xs={12}>
                    <Typography variant={"subtitle1"} style={styles.subTitle}>
                      Last name:
                    </Typography>
                    <Typography
                      variant={"h6"}
                      style={styles.item}
                      color={"primary"}
                    >
                      {lastName}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={5}>
                <Grid
                  container
                  alignItems={"center"}
                  style={styles.itemContainer}
                >
                  <Grid item xs={12}>
                    <Typography variant={"subtitle1"} style={styles.subTitle}>
                      Email:
                    </Typography>

                    <Typography
                      variant={"h6"}
                      style={styles.item}
                      color={"primary"}
                    >
                      {email}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={1}>
                <Grid
                  container
                  alignItems={"center"}
                  style={styles.itemContainer}
                >
                  <Grid item xs={12}>
                    <Typography variant={"subtitle1"} style={styles.subTitle}>
                      Role
                    </Typography>

                    <Typography
                      variant={"h6"}
                      style={styles.item}
                      color={"primary"}
                    >
                      {role}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={2}>
                <Grid container justify={"flex-end"}>
                  <Button
                    variant="fab"
                    mini
                    color="primary"
                    aria-label="Edit"
                    onClick={() => showModalUser("EDIT_USER", id)}
                  >
                    <EditIcon />
                  </Button>
                  <Button
                    variant="fab"
                    mini
                    color="secondary"
                    aria-label="Delete"
                    onClick={() => deleteUser(id)}
                  >
                    <DeleteIcon />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Grid>
  </Grid>
);

export default UserListView;
