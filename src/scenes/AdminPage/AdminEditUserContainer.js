import React from "react";
import { connect } from "react-redux";
import * as usersSelectors from "../../modules/users/usersSelectors";
import * as usersOperations from "../../modules/users/usersOperations";
import { compose, withHandlers, withState } from "recompose";
import AdminEditUserView from "./AdminEditUserView";

/*
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
*/

const mapStateToProps = (state, props) => ({
  users: state.users.users,
  currentUser: usersSelectors.getCurrentUser(state, props.id)
});

const mapStateToDispatch = {
  updateUser: usersOperations.updateUser
};

const AdminEditUserContainer = props => (
  <AdminEditUserView
    onSubmit={props.onSubmit}
    firstName={props.userData.firstName}
    onChange={props.onChange}
    lastName={props.userData.lastName}
    email={props.userData.email}
    role={props.userData.role}
    onClose={props.onClose}
  />
);

const enhance = compose(
  connect(
    mapStateToProps,
    mapStateToDispatch
  ),
  withState("userData", "updateUserData", props => props.currentUser),
  withHandlers({
    onSubmit: props => e => {
      e.preventDefault();
      props.updateUser(props.userData);
      props.onClose();
    },
    onChange: props => item => event => {
      props.updateUserData({
        ...props.userData,
        [item]: event.target.value
      });
    }
  })
);

export default enhance(AdminEditUserContainer);
