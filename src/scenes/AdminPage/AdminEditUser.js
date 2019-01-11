import React from "react";
import { connect } from "react-redux";
import * as usersSelectors from "../../modules/users/usersSelectors";
import * as usersOperations from "../../modules/users/usersOperations";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography/Typography";
import Select from "@material-ui/core/Select/Select";
import Button from "@material-ui/core/Button/Button";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";

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

class AdminEditUser extends React.Component {
  state = {
    ...this.props.currentUser
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.updateUser(this.state);
    this.props.onClose();
  };

  onChange = item => ({ target: { value } }) => {
    this.setState({
      [item]: value
    });
  };

  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.onSubmit}>
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
                  value={this.state.firstName}
                  onChange={this.onChange("firstName")}
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
                  value={this.state.lastName}
                  onChange={this.onChange("lastName")}
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
                  value={this.state.email}
                  onChange={this.onChange("email")}
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
                value={this.state.role}
                onChange={this.onChange("role")}
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
                    onClick={() => this.props.onClose()}
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
  }
}

const mapStateToProps = (state, props) => ({
  users: state.users.users,
  currentUser: usersSelectors.getCurrentUser(state, props.id)
});

const mapStateToDispatch = {
  updateUser: usersOperations.updateUser
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(AdminEditUser);
