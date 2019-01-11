import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select/Select";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";

const styles = {
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20
  },
  boxInput: {
    paddingBottom: 15
  },
  imageDiv: {
    justifyItems: "center",
    alignItems: "center"
  }
};

const AdminEditUserView = ({
  firstName,
  lastName,
  email,
  role,
  onSubmit,
  onClose,
  onChange
}) => (
  <form onSubmit={onSubmit}>
    <Grid
      container
      alignContent={"center"}
      justify={"center"}
      style={styles.container}
    >
      <Grid item xs={10} style={styles.boxInput}>
        <Grid container>
          <Grid item xs={3}>
            <InputLabel htmlFor={"firsName"}>First Name</InputLabel>
          </Grid>
          <Grid item xs={7}>
            <Input
              name="firstName"
              fullWidth
              value={firstName}
              onChange={onChange("firstName")}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={10} style={styles.boxInput}>
        <Grid container>
          <Grid item xs={3}>
            <InputLabel htmlFor={"lastName"}>Last Name</InputLabel>
          </Grid>
          <Grid item xs={7}>
            <Input
              name="lastName"
              fullWidth
              value={lastName}
              onChange={onChange("lastName")}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={10} style={styles.boxInput}>
        <Grid container style={styles.imageDiv}>
          <Grid item xs={3}>
            <InputLabel htmlFor={"email"}>Email</InputLabel>
          </Grid>
          <Grid item xs={7}>
            <Input
              disabled
              name="email"
              fullWidth
              value={email}
              onChange={onChange("email")}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={10} style={styles.boxInput}>
        <Grid container>
          <Grid item xs={3}>
            <InputLabel htmlFor={"role"}>Role</InputLabel>
          </Grid>

          <Select
            native
            value={role}
            onChange={onChange("role")}
            input={<Input id="age-native-simple" />}
          >
            <option value={"user"}>user</option>
            <option value={"admin"}>admin</option>
          </Select>
        </Grid>

        <Grid container style={styles.imageDiv} justify={"flex-end"}>
          <Typography align={"right"} component={"div"}>
            <Grid item xs={12}>
              <Button variant={"fab"} color={"primary"} mini type="submit">
                <AddIcon />
              </Button>
              <Button
                variant={"fab"}
                color={"secondary"}
                mini
                onClick={() => onClose()}
              >
                <CloseIcon />
              </Button>
            </Grid>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </form>
);

export default AdminEditUserView;
