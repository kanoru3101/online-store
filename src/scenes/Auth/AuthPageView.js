import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/Button/Button";
import RegisterForm from "../../components/SingInForms/RegisterForm";
import { loginValidate, registerValidate } from "../../tools/fieldValidators";
import LoginForm from "../../components/SingInForms/LoginForm";
import React from "react";

//const for сhoosing authentication
const LOGIN = "LOGIN";
const REGISTRATION = "REGISTRATION";

const AuthPageView = ({
  changeAuth,
  checkedAuth,
  onSubmitRegister,
  onSubmitLogin
}) => (
  <Grid container justify={"center"}>
    <Grid item xs={12} style={{ marginBottom: 20 }}>
      <Grid container justify={"center"}>
        <Button
          variant={"contained"}
          style={{ width: 120 }}
          onClick={() => changeAuth(LOGIN)}
        >
          {LOGIN}
        </Button>
        <Button
          variant={"contained"}
          style={{ width: 120 }}
          onClick={() => changeAuth(REGISTRATION)}
        >
          {REGISTRATION}
        </Button>
      </Grid>
    </Grid>
    <Grid item xs={12}>
      {checkedAuth === REGISTRATION ? (
        <RegisterForm
          onSubmitRegister={onSubmitRegister}
          registerValidate={registerValidate}
        />
      ) : (
        <LoginForm
          onSubmitLogin={onSubmitLogin}
          loginValidate={loginValidate}
        />
      )}
    </Grid>
  </Grid>
);

export default AuthPageView;
