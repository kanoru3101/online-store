import React from "react";
import { FORM_ERROR } from "final-form";
import { connect } from "react-redux";
import * as appOperations from "../../modules/app/appOperations";
import AuthPageView from "./AuthPageView";
import * as Api from "../../api/Api";
import { routes } from "../../routes";
import { compose, withHandlers, withState } from "recompose";

//const for сhoosing authentication
const LOGIN = "LOGIN";

/*
class AuthPageContainer extends React.Component {
  state = {
    checkedAuth: LOGIN
  };

  onSubmitLogin = async (values, form) => {
    try {
      const res = await Api.Auth.login(values);
      this.props.setToken(res.data.token, res.data.user);

      form.reset();
      this.props.history.push(routes.home);
    } catch (e) {
      console.log(e);
      return {
        [FORM_ERROR]: "Wrong email or password"
      };
    }
  };

  onSubmitRegister = async (values, form) => {
    try {
      delete values.repeatPassword;
      const res = await Api.Auth.register(values);
      Api.setToken(res.data.token);
      form.reset();
    } catch (e) {
      console.log(e);
      return {
        [FORM_ERROR]: "This email is already registered"
      };
    }
  };

  changeAuth = type => {
    this.setState({
      checkedAuth: type
    });
  };

  render() {
    return (
      <Grid container justify={"center"}>
        <Grid item xs={12} style={{ marginBottom: 20 }}>
          <Grid container justify={"center"}>
            <Button
              variant={"contained"}
              style={{ width: 120 }}
              onClick={() => this.changeAuth(LOGIN)}
            >
              {LOGIN}
            </Button>
            <Button
              variant={"contained"}
              style={{ width: 120 }}
              onClick={() => this.changeAuth(REGISTRATION)}
            >
              {REGISTRATION}
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {this.state.checkedAuth === REGISTRATION ? (
            <RegisterForm
              {...this.props}
              onSubmitRegister={this.onSubmitRegister}
              registerValidate={registerValidate}
            />
          ) : (
            <LoginForm
              {...this.props}
              onSubmitLogin={this.onSubmitLogin}
              loginValidate={loginValidate}
            />
          )}
        </Grid>
      </Grid>
    );
  }
}
*/
const mapStateToProps = state => ({
  token: state.app.token
});

const mapStateToDispatch = {
  setToken: appOperations.setToken
};

const AuthPageContainer = props => (
  <AuthPageView
    changeAuth={props.changeAuth}
    onSubmitRegister={props.onSubmitRegister}
    onSubmitLogin={props.onSubmitLogin}
    checkedAuth={props.checkedAuth}
  />
);

const enhance = compose(
  connect(
    mapStateToProps,
    mapStateToDispatch
  ),
  withState("checkedAuth", "handleAuth", LOGIN),
  withHandlers({
    onSubmitLogin: props => async (values, form) => {
      try {
        const res = await Api.Auth.login(values);
        props.setToken(res.data.token, res.data.user);
        form.reset();
        props.history.push(routes.home);
      } catch (e) {
        console.log(e);
        return {
          [FORM_ERROR]: "Wrong email or password"
        };
      }
    },
    onSubmitRegister: props => async (values, form) => {
      try {
        delete values.repeatPassword;
        const res = await Api.Auth.register(values);
        Api.setToken(res.data.token);
        form.reset();
        props.handleAuth(LOGIN);
      } catch (e) {
        console.log(e);
        return {
          [FORM_ERROR]: "This email is already registered"
        };
      }
    },
    changeAuth: props => type => {
      props.handleAuth(type);
    }
  })
);
export default enhance(AuthPageContainer);

/*
export default connect(
  mapStateToProps,
  mapStateToDispatch
)(AuthPageContainer);
*/
