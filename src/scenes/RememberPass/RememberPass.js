import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import { Field, Form } from "react-final-form";
import FormInput from "../../components/FormInput/FormInput";
import Button from "@material-ui/core/Button/Button";
import { emailValidate } from "../../tools/fieldValidators";
import Typography from "@material-ui/core/Typography/Typography";
import * as Api from "../../api/Api";
import { FORM_ERROR } from "final-form";
import { compose, withState, withHandlers } from "recompose";
const styles = {
  container: {
    paddingTop: 20
  },
  trueResult: {
    color: "#0f5900"
  }
};
/*
class RememberPassPage extends React.Component {
  state = {
    isTrue: false
  };
  onSubmit = async values => {
    try {
      const res = await Api.Auth.rememberPass(values);
      if (res.data.success === true) {
        this.setState({ isTrue: true });
      }
    } catch (e) {
      return {
        [FORM_ERROR]: "Email is not registered"
      };
    }
  };

  render() {
    debugger;
    return (
      <Grid container justify={"center"} style={styles.container}>
        <Grid item xs={12}>
          <Typography align={"center"} component={"div"}>
            <Form
              onSubmit={this.onSubmit}
              validate={emailValidate}
              render={({ handleSubmit, submitError }) => (
                <Grid item xs={12} style={{ marginBottom: 20 }}>
                  <Field name="email">
                    {({ input, meta }) => (
                      <FormInput {...input} meta={meta} name={"Email"} />
                    )}
                  </Field>
                  {this.state.isTrue && (
                    <Typography variant={"subtitle1"} style={styles.trueResult}>
                      Password sent to email
                    </Typography>
                  )}
                  <Button mini variant={"contained"} onClick={handleSubmit}>
                    Remember Password
                  </Button>
                  {submitError && <div>{submitError}</div>}
                </Grid>
              )}
            />
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default RememberPassPage;
*/

const RememberPassPage = props => {
  return (
    <Grid container justify={"center"} style={styles.container}>
      <Grid item xs={12}>
        <Typography align={"center"} component={"div"}>
          <Form
            onSubmit={props.onSubmit}
            validate={emailValidate}
            render={({ handleSubmit, submitError }) => (
              <Grid item xs={12} style={{ marginBottom: 20 }}>
                <Field name="email">
                  {({ input, meta }) => (
                    <FormInput {...input} meta={meta} name={"Email"} />
                  )}
                </Field>
                {props.passwordIsSend && (
                  <Typography variant={"subtitle1"} style={styles.trueResult}>
                    Password sent to email
                  </Typography>
                )}
                <Button mini variant={"contained"} onClick={handleSubmit}>
                  Remember Password
                </Button>
                {submitError && <div>{submitError}</div>}
              </Grid>
            )}
          />
        </Typography>
      </Grid>
    </Grid>
  );
};

const enhance = compose(
  withState("passwordIsSend", "changePassIsSend", false),
  withHandlers({
    onSubmit: props => async values => {
      try {
        const res = await Api.Auth.rememberPass(values);
        if (res.data.success === true) {
          props.changePassIsSend(true);
        }
      } catch (e) {
        return {
          [FORM_ERROR]: "Email is not registered"
        };
      }
    }
  })
);

export default enhance(RememberPassPage);
