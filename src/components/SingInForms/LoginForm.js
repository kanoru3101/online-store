import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import { Field, Form } from "react-final-form";
import FormInput from "../FormInput/FormInput";
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography/Typography";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

const LoginForm = props => (
  <Grid container justify={"center"} style={{ marginBottom: 20 }}>
    <Grid item xs={8}>
      <Typography align={"center"} variant={"h6"}>
        Sing in
      </Typography>

      <Typography align={"center"} component={"div"}>
        <Form
          onSubmit={props.onSubmitLogin}
          validate={props.loginValidate}
          render={({ handleSubmit, submitError }) => (
            <Grid item xs={12} style={{ marginBottom: 20 }}>
              <Field name="email">
                {({ input, meta }) => (
                  <FormInput {...input} meta={meta} name={"Email"} />
                )}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <FormInput
                    type="password"
                    {...input}
                    meta={meta}
                    name={"Password"}
                  />
                )}
              </Field>

              <Button mini variant={"contained"} onClick={handleSubmit}>
                Sing In
              </Button>
              {submitError && <div>{submitError}</div>}
            </Grid>
          )}
        />
      </Typography>
      <Typography align={"center"} component={"div"} variant={"body1"}>
        <Link to={routes.rememberPass} style={{ textDecoration: "none" }}>
          Forgot password
        </Link>
      </Typography>
    </Grid>
  </Grid>
);

export default LoginForm;
