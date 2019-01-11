import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import { Field, Form } from "react-final-form";
import FormInput from "../FormInput/FormInput";
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography/Typography";

const styles = {
  error: {
    color: "#d21418",
    fontWeight: "bold"
  }
};

const RegisterForm = props => (
  <Grid container justify={"center"}>
    <Grid item xs={8}>
      <Typography align={"center"} variant={"h6"}>
        Registration
      </Typography>

      <Typography align={"center"} component={"div"}>
        <Form
          onSubmit={props.onSubmitRegister}
          validate={props.registerValidate}
          render={({ handleSubmit, submitError }) => (
            <Grid item xs={12} style={{ marginBottom: 20 }}>
              <Field name="firstName">
                {({ input, meta }) => (
                  <FormInput {...input} meta={meta} name={"First Name"} />
                )}
              </Field>

              <Field name="lastName">
                {({ input, meta }) => (
                  <FormInput {...input} meta={meta} name={"Last Name"} />
                )}
              </Field>

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

              <Field name="repeatPassword">
                {({ input, meta }) => (
                  <FormInput
                    type="password"
                    {...input}
                    meta={meta}
                    name={"Repeat Password"}
                  />
                )}
              </Field>
              {submitError && (
                <Typography variant={"subtitle1"} style={styles.error}>
                  {submitError}
                </Typography>
              )}
              <Button mini variant={"contained"} onClick={handleSubmit}>
                Register
              </Button>
            </Grid>
          )}
        />
      </Typography>
    </Grid>
  </Grid>
);

export default RegisterForm;
